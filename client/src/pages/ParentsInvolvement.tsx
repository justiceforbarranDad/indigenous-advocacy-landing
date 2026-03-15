import { useState } from 'react';
import { useLocation } from 'wouter';
import { ChevronLeft, Users, FileText, Heart, Building2, CheckCircle, Mail } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { trpc } from '@/lib/trpc';
import { toast } from 'sonner';

export default function ParentsInvolvement() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childSituation: '',
    involvement: '',
    message: '',
  });

  const submitParent = trpc.parents.submitParentProfile.useMutation({
    onSuccess: () => {
      toast.success('Thank you! Your information has been received. We will contact you soon.');
      setFormData({
        parentName: '',
        email: '',
        phone: '',
        childSituation: '',
        involvement: '',
        message: '',
      });
    },
    onError: (error: any) => {
      toast.error('Error submitting information. Please try again.');
      console.error(error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.parentName || !formData.email) {
      toast.error('Please fill in all required fields');
      return;
    }
    submitParent.mutate(formData);
  };

  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <div className="container max-w-5xl mx-auto px-4 py-12">
        <button
          onClick={() => setLocation('/')}
          className="flex items-center gap-2 text-amber-orange hover:text-amber-light mb-8 transition-colors"
        >
          <ChevronLeft size={20} />
          Back to Home
        </button>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-forest-green mb-4">
            Parents & Families United
          </h1>
          <p className="text-xl text-charcoal-light leading-relaxed max-w-3xl">
            Join a growing movement of parents and families fighting for justice, accountability, and systemic change. Together, we are building a non-profit organization to document institutional failures, protect vulnerable children, and create lasting historical accountability.
          </p>
        </div>

        {/* Why Join */}
        <Card className="mb-8 border-amber-orange/20">
          <CardHeader className="bg-forest-green text-cream">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Heart size={24} />
              Why Join This Movement?
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="text-amber-orange flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-forest-green mb-1">Strength in Numbers</h4>
                    <p className="text-sm text-charcoal-light">Unified families have more power to demand accountability from governments and institutions.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="text-amber-orange flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-forest-green mb-1">Legal Protection</h4>
                    <p className="text-sm text-charcoal-light">Non-profit status provides legal standing to pursue institutional accountability and international claims.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="text-amber-orange flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-forest-green mb-1">Resource Sharing</h4>
                    <p className="text-sm text-charcoal-light">Access to legal aid, mental health support, and advocacy resources for all member families.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="text-amber-orange flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-forest-green mb-1">Historical Documentation</h4>
                    <p className="text-sm text-charcoal-light">Create an official record of institutional failures that will become part of history.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="text-amber-orange flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-forest-green mb-1">International Advocacy</h4>
                    <p className="text-sm text-charcoal-light">Pursue claims at UN bodies and international human rights courts for systemic violations.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="text-amber-orange flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-forest-green mb-1">Future Prevention</h4>
                    <p className="text-sm text-charcoal-light">Work together to prevent other families from experiencing the same systemic abuse.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Non-Profit Formation Guide */}
        <Card className="mb-8 border-amber-orange/20">
          <CardHeader className="bg-forest-green text-cream">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Building2 size={24} />
              Building a Non-Profit Organization
            </CardTitle>
            <CardDescription className="text-cream/80">
              Step-by-step guidance for creating a formal organization
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-8 space-y-6">
            <div className="space-y-4">
              <div className="p-6 bg-cream-dark rounded-lg border-l-4 border-amber-orange">
                <h4 className="font-semibold text-forest-green mb-2 flex items-center gap-2">
                  <span className="bg-amber-orange text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
                  Form a Founding Board
                </h4>
                <p className="text-sm text-charcoal-light">
                  Recruit 3-5 founding members (parents, advocates, legal professionals) to serve as the initial board of directors. This group will guide the organization's mission and operations.
                </p>
              </div>

              <div className="p-6 bg-cream-dark rounded-lg border-l-4 border-amber-orange">
                <h4 className="font-semibold text-forest-green mb-2 flex items-center gap-2">
                  <span className="bg-amber-orange text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
                  Define Mission & Bylaws
                </h4>
                <p className="text-sm text-charcoal-light">
                  Create a clear mission statement focused on accountability, protection of vulnerable children, and systemic change. Draft bylaws governing board decisions, membership, and operations.
                </p>
              </div>

              <div className="p-6 bg-cream-dark rounded-lg border-l-4 border-amber-orange">
                <h4 className="font-semibold text-forest-green mb-2 flex items-center gap-2">
                  <span className="bg-amber-orange text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
                  Register as Non-Profit (Canada)
                </h4>
                <p className="text-sm text-charcoal-light">
                  <strong>Federal:</strong> Incorporate as a non-profit corporation under the Canada Not-for-profit Corporations Act. <strong>Provincial:</strong> Register with Quebec's Registraire des entreprises. Cost: ~$500-1000 CAD.
                </p>
              </div>

              <div className="p-6 bg-cream-dark rounded-lg border-l-4 border-amber-orange">
                <h4 className="font-semibold text-forest-green mb-2 flex items-center gap-2">
                  <span className="bg-amber-orange text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
                  Obtain Charitable Status (Optional)
                </h4>
                <p className="text-sm text-charcoal-light">
                  Apply for charitable status with Canada Revenue Agency (CRA) to enable tax-deductible donations. This requires demonstrating public benefit and filing annual reports. Timeline: 4-6 months.
                </p>
              </div>

              <div className="p-6 bg-cream-dark rounded-lg border-l-4 border-amber-orange">
                <h4 className="font-semibold text-forest-green mb-2 flex items-center gap-2">
                  <span className="bg-amber-orange text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
                  Build Member Database
                </h4>
                <p className="text-sm text-charcoal-light">
                  Recruit member families, document their cases, and create a secure database of institutional failures. This becomes the organization's most valuable asset for legal action and historical accountability.
                </p>
              </div>

              <div className="p-6 bg-cream-dark rounded-lg border-l-4 border-amber-orange">
                <h4 className="font-semibold text-forest-green mb-2 flex items-center gap-2">
                  <span className="bg-amber-orange text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
                  Secure Legal & Financial Resources
                </h4>
                <p className="text-sm text-charcoal-light">
                  Hire legal counsel specializing in institutional accountability and international law. Set up transparent financial systems for donations and grants. Create annual budgets and accountability reports.
                </p>
              </div>

              <div className="p-6 bg-cream-dark rounded-lg border-l-4 border-amber-orange">
                <h4 className="font-semibold text-forest-green mb-2 flex items-center gap-2">
                  <span className="bg-amber-orange text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">7</span>
                  Launch International Advocacy
                </h4>
                <p className="text-sm text-charcoal-light">
                  File complaints with UN bodies (UN Committee on the Rights of the Child, UN Permanent Forum on Indigenous Issues). Pursue cases at international human rights courts. Build media presence and public awareness.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Resources */}
        <Card className="mb-8 border-amber-orange/20">
          <CardHeader className="bg-forest-green text-cream">
            <CardTitle className="text-2xl flex items-center gap-2">
              <FileText size={24} />
              Resources for Non-Profit Formation
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://www.canada.ca/en/revenue-agency/services/charities-giving/charities.html"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-cream-dark rounded-lg hover:bg-amber-orange/10 transition-colors border border-amber-orange/20"
              >
                <h4 className="font-semibold text-forest-green mb-1">Canada Revenue Agency - Charities</h4>
                <p className="text-xs text-charcoal-light">Official guide to charitable status and tax-deductible donations</p>
              </a>

              <a
                href="https://www.ic.gc.ca/eic/site/cd-dgc.nsf/eng/home"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-cream-dark rounded-lg hover:bg-amber-orange/10 transition-colors border border-amber-orange/20"
              >
                <h4 className="font-semibold text-forest-green mb-1">Corporations Canada</h4>
                <p className="text-xs text-charcoal-light">Federal incorporation for non-profit corporations</p>
              </a>

              <a
                href="https://www.registreentreprises.gouv.qc.ca/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-cream-dark rounded-lg hover:bg-amber-orange/10 transition-colors border border-amber-orange/20"
              >
                <h4 className="font-semibold text-forest-green mb-1">Quebec Business Registry</h4>
                <p className="text-xs text-charcoal-light">Provincial registration for Quebec-based organizations</p>
              </a>

              <a
                href="https://www.un.org/en/about-us/structure/human-rights-council"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-cream-dark rounded-lg hover:bg-amber-orange/10 transition-colors border border-amber-orange/20"
              >
                <h4 className="font-semibold text-forest-green mb-1">UN Human Rights Council</h4>
                <p className="text-xs text-charcoal-light">International advocacy and complaint mechanisms</p>
              </a>

              <a
                href="https://www.un.org/en/about-us/structure/human-rights-council"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-cream-dark rounded-lg hover:bg-amber-orange/10 transition-colors border border-amber-orange/20"
              >
                <h4 className="font-semibold text-forest-green mb-1">UN Committee on Rights of the Child</h4>
                <p className="text-xs text-charcoal-light">File complaints about child welfare violations</p>
              </a>

              <a
                href="https://www.amnesty.org/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-cream-dark rounded-lg hover:bg-amber-orange/10 transition-colors border border-amber-orange/20"
              >
                <h4 className="font-semibold text-forest-green mb-1">Amnesty International</h4>
                <p className="text-xs text-charcoal-light">Partner for international human rights advocacy</p>
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Parent Registration Form */}
        <Card className="border-amber-orange/20">
          <CardHeader className="bg-forest-green text-cream">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Users size={24} />
              Join the Movement
            </CardTitle>
            <CardDescription className="text-cream/80">
              Register as a founding member or supporter of this non-profit initiative
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">
                  Full Name *
                </label>
                <Input
                  type="text"
                  placeholder="Your full name"
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  required
                  className="border-amber-orange/30"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">
                  Email Address *
                </label>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="border-amber-orange/30"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">
                  Phone Number (Optional)
                </label>
                <Input
                  type="tel"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="border-amber-orange/30"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">
                  Your Child's Situation (Brief Overview) *
                </label>
                <Textarea
                  placeholder="Describe the institutional failures or systemic issues your child/family has faced..."
                  value={formData.childSituation}
                  onChange={(e) => setFormData({ ...formData, childSituation: e.target.value })}
                  rows={3}
                  className="border-amber-orange/30 resize-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">
                  How Would You Like to Get Involved? *
                </label>
                <Textarea
                  placeholder="e.g., Founding board member, legal case documentation, fundraising, advocacy, media outreach, etc."
                  value={formData.involvement}
                  onChange={(e) => setFormData({ ...formData, involvement: e.target.value })}
                  rows={3}
                  className="border-amber-orange/30 resize-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">
                  Additional Message (Optional)
                </label>
                <Textarea
                  placeholder="Any other information you'd like to share..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={3}
                  className="border-amber-orange/30 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={submitParent.isPending}
                className="w-full bg-amber-orange hover:bg-amber-light text-white py-3 font-semibold"
              >
                {submitParent.isPending ? 'Submitting...' : 'Join the Movement'}
              </Button>
            </form>

            <div className="mt-8 p-6 bg-amber-orange/10 rounded-lg border-l-4 border-amber-orange">
              <p className="text-sm text-charcoal font-semibold mb-2">
                🤝 What Happens Next?
              </p>
              <p className="text-xs text-charcoal-light">
                Your information will be reviewed by our coordination team. We will contact you within 1-2 weeks to discuss your involvement, answer questions about non-profit formation, and explore how your family's case can contribute to this historical accountability movement.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="mt-12 p-8 bg-forest-green text-cream rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Together, We Create Change</h3>
          <p className="mb-6 leading-relaxed max-w-2xl mx-auto">
            Every parent's story matters. Every family's experience of institutional failure becomes part of the historical record. By uniting under a non-profit organization, we transform individual struggles into systemic accountability and international justice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:justiceforbarran@gmail.com?subject=Non-Profit%20Organization%20Inquiry"
              className="inline-flex items-center justify-center gap-2 bg-amber-orange hover:bg-amber-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              <Mail size={20} />
              Contact Coordination Team
            </a>
            <button
              onClick={() => setLocation('/')}
              className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-white"
            >
              Back to Campaign
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
