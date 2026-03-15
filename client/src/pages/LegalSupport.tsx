import { useState } from 'react';
import { useLocation } from 'wouter';
import { ChevronLeft, FileText, Users, Globe, Mail } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { trpc } from '@/lib/trpc';
import { toast } from 'sonner';

export default function LegalSupport() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    lawyerName: '',
    email: '',
    jurisdiction: '',
    specialization: '',
    experience: '',
    message: '',
  });

  const submitLawyer = trpc.legal.submitLawyerProfile.useMutation({
    onSuccess: () => {
      toast.success('Thank you! Your legal profile has been received. We will contact you soon.');
      setFormData({
        lawyerName: '',
        email: '',
        jurisdiction: '',
        specialization: '',
        experience: '',
        message: '',
      });
    },
    onError: (error: any) => {
      toast.error('Error submitting profile. Please try again.');
      console.error(error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.lawyerName || !formData.email || !formData.jurisdiction) {
      toast.error('Please fill in all required fields');
      return;
    }
    submitLawyer.mutate(formData);
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
            International Legal Support
          </h1>
          <p className="text-xl text-charcoal-light leading-relaxed max-w-3xl">
            We are seeking international lawyers, legal experts, and human rights advocates to join the fight for justice against systemic failures by Canadian and Quebec governments. This is a call for legal professionals committed to accountability, Indigenous rights, and protecting vulnerable families.
          </p>
        </div>

        {/* Case Overview */}
        <Card className="mb-8 border-amber-orange/20">
          <CardHeader className="bg-forest-green text-cream">
            <CardTitle className="text-2xl">The Case: Sunday Bloody Sunday, Part Two</CardTitle>
            <CardDescription className="text-cream/80">
              Systemic institutional failures against Indigenous families in Quebec/Canada
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-forest-green mb-3 flex items-center gap-2">
                  <FileText size={20} />
                  Key Issues
                </h4>
                <ul className="space-y-2 text-sm text-charcoal-light">
                  <li>• DPJ (Youth Protection) system failures and withdrawal of services</li>
                  <li>• Violation of Jordan's Principle (First Nations child services)</li>
                  <li>• Government institutional negligence and abuse</li>
                  <li>• Breach of Canadian Charter of Rights and Freedoms</li>
                  <li>• Violation of UN Convention on Rights of the Child (UNCRC)</li>
                  <li>• Political intimidation and cease-and-desist threats</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-forest-green mb-3 flex items-center gap-2">
                  <Globe size={20} />
                  International Dimensions
                </h4>
                <ul className="space-y-2 text-sm text-charcoal-light">
                  <li>• Violations of international human rights law</li>
                  <li>• Indigenous rights under UNDRIP (UN Declaration on Rights of Indigenous Peoples)</li>
                  <li>• Systemic discrimination against First Nations families</li>
                  <li>• Government accountability for institutional abuse</li>
                  <li>• Precedent for other Indigenous communities</li>
                  <li>• International human rights tribunal potential</li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-orange/10 p-6 rounded-lg border-l-4 border-amber-orange">
              <p className="text-charcoal font-semibold mb-2">Timeline of Failures:</p>
              <ul className="text-sm text-charcoal-light space-y-1">
                <li><strong>2008:</strong> Federal apology for residential schools (Harper)</li>
                <li><strong>2021:</strong> Family seeks help after serious trauma (teen stabbed 3x)</li>
                <li><strong>2023:</strong> DPJ withdraws services without adequate follow-up</li>
                <li><strong>2023:</strong> MNA sends cease-and-desist threat instead of help</li>
                <li><strong>2024-2025:</strong> Federal and provincial silence continues</li>
                <li><strong>2026:</strong> Campaign for international legal accountability</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Why We Need International Lawyers */}
        <Card className="mb-8 border-amber-orange/20">
          <CardHeader className="bg-forest-green text-cream">
            <CardTitle className="text-2xl">Why International Legal Support?</CardTitle>
          </CardHeader>
          <CardContent className="pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-forest-green mb-2">Domestic System Failures</h4>
                  <p className="text-sm text-charcoal-light">
                    Canadian domestic courts have been slow to act. International legal pressure is needed to force accountability from governments that have ignored their own citizens.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-forest-green mb-2">Human Rights Violations</h4>
                  <p className="text-sm text-charcoal-light">
                    These cases violate international human rights treaties that Canada has signed, including the UNCRC and UNDRIP. International courts can enforce these standards.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-forest-green mb-2">Precedent & Protection</h4>
                  <p className="text-sm text-charcoal-light">
                    International legal action creates precedent that protects other Indigenous families facing similar systemic failures across Canada.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-forest-green mb-2">Government Accountability</h4>
                  <p className="text-sm text-charcoal-light">
                    International pressure forces governments and officials to face real consequences for institutional negligence, abuse, and cover-ups.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lawyer Specializations Needed */}
        <Card className="mb-8 border-amber-orange/20">
          <CardHeader className="bg-forest-green text-cream">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Users size={24} />
              Legal Expertise Needed
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-cream-dark rounded-lg">
                <h4 className="font-semibold text-forest-green mb-2">International Human Rights Law</h4>
                <p className="text-sm text-charcoal-light">Expertise in UNCRC, UNDRIP, and international human rights conventions</p>
              </div>
              <div className="p-4 bg-cream-dark rounded-lg">
                <h4 className="font-semibold text-forest-green mb-2">Indigenous Rights Law</h4>
                <p className="text-sm text-charcoal-light">Specialization in Indigenous peoples' rights and self-determination</p>
              </div>
              <div className="p-4 bg-cream-dark rounded-lg">
                <h4 className="font-semibold text-forest-green mb-2">Administrative & Constitutional Law</h4>
                <p className="text-sm text-charcoal-light">Experience challenging government institutions and constitutional violations</p>
              </div>
              <div className="p-4 bg-cream-dark rounded-lg">
                <h4 className="font-semibold text-forest-green mb-2">Child Welfare & Protection Law</h4>
                <p className="text-sm text-charcoal-light">Expertise in child protection systems and institutional accountability</p>
              </div>
              <div className="p-4 bg-cream-dark rounded-lg">
                <h4 className="font-semibold text-forest-green mb-2">International Court Litigation</h4>
                <p className="text-sm text-charcoal-light">Experience with UN bodies, regional courts, and international tribunals</p>
              </div>
              <div className="p-4 bg-cream-dark rounded-lg">
                <h4 className="font-semibold text-forest-green mb-2">Government Accountability</h4>
                <p className="text-sm text-charcoal-light">Litigation against state actors and institutional negligence cases</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lawyer Registration Form */}
        <Card className="border-amber-orange/20">
          <CardHeader className="bg-forest-green text-cream">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Mail size={24} />
              Register as a Legal Professional
            </CardTitle>
            <CardDescription className="text-cream/80">
              Submit your profile to join the international legal team fighting for justice
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
                  value={formData.lawyerName}
                  onChange={(e) => setFormData({ ...formData, lawyerName: e.target.value })}
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
                  Jurisdiction/Country *
                </label>
                <Input
                  type="text"
                  placeholder="e.g., International Court of Justice, USA, UK, EU"
                  value={formData.jurisdiction}
                  onChange={(e) => setFormData({ ...formData, jurisdiction: e.target.value })}
                  required
                  className="border-amber-orange/30"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">
                  Legal Specialization(s) *
                </label>
                <Input
                  type="text"
                  placeholder="e.g., International Human Rights, Indigenous Rights, Constitutional Law"
                  value={formData.specialization}
                  onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
                  required
                  className="border-amber-orange/30"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">
                  Years of Experience *
                </label>
                <Input
                  type="text"
                  placeholder="e.g., 15 years in international law"
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  required
                  className="border-amber-orange/30"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">
                  Message (Optional)
                </label>
                <Textarea
                  placeholder="Tell us about your interest in this case, relevant experience, or how you can help..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="border-amber-orange/30 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={submitLawyer.isPending}
                className="w-full bg-amber-orange hover:bg-amber-light text-white py-3 font-semibold"
              >
                {submitLawyer.isPending ? 'Submitting...' : 'Submit Legal Profile'}
              </Button>
            </form>

            <div className="mt-8 p-6 bg-amber-orange/10 rounded-lg border-l-4 border-amber-orange">
              <p className="text-sm text-charcoal font-semibold mb-2">
                🔒 Confidentiality & Next Steps
              </p>
              <p className="text-xs text-charcoal-light">
                Your information will be kept confidential and reviewed by our legal coordination team. We will contact qualified legal professionals to discuss case details, strategy, and collaboration opportunities. This is a volunteer effort to bring international accountability to systemic failures.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="mt-12 p-8 bg-forest-green text-cream rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Join the Fight for Justice</h3>
          <p className="mb-6 leading-relaxed max-w-2xl mx-auto">
            International lawyers: your expertise can help hold governments accountable and protect Indigenous families from systemic abuse. Together, we can create precedent that forces real change across Canada and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:justiceforbarran@gmail.com?subject=International%20Legal%20Support%20Inquiry"
              className="inline-flex items-center justify-center gap-2 bg-amber-orange hover:bg-amber-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              <Mail size={20} />
              Contact Legal Coordination
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
