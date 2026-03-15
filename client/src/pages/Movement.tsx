import { Heart, Users, Zap, Shield, Target, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'wouter';

export default function Movement() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-white text-charcoal">
      {/* Hero Section */}
      <section className="bg-forest-green text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Justice for All
          </h1>
          <h2 className="text-3xl md:text-4xl font-serif italic mb-6 text-amber-orange">
            Breaking the Cycle of Systemic Failure
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
            A movement for Indigenous children's rights. Not just Barran's story. Not just one family's fight. 
            A call for systemic accountability and real reconciliation for every Indigenous child in Canada.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-amber-orange hover:bg-amber-light text-white font-semibold px-8 py-3">
              Join the Movement
            </Button>
            <Link href="/contact-accountability">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-forest-green font-semibold px-8 py-3">
                Take Action
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* The Problem */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-forest-green mb-8">The Problem: Broken Promises</h2>
          <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-lg mb-8">
            <p className="text-lg text-red-800 leading-relaxed">
              In 2008, Prime Minister Stephen Harper apologized for residential schools and cultural genocide. 
              "We are sorry," he said. But 18 years later, Indigenous children are still being failed by the same systems. 
              DPJ (child protection) continues to harm. Politicians ghost families seeking help. Lawyers ignore cases. 
              The system that was supposed to protect them has become another weapon of oppression.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-white border-2 border-red-200">
              <div className="text-4xl font-bold text-red-600 mb-3">1.7M+</div>
              <p className="text-charcoal-light">Indigenous people in Canada still waiting for real reconciliation</p>
            </Card>
            <Card className="p-6 bg-white border-2 border-red-200">
              <div className="text-4xl font-bold text-red-600 mb-3">13 Years</div>
              <p className="text-charcoal-light">Barran's family has been fighting for justice with no systemic support</p>
            </Card>
            <Card className="p-6 bg-white border-2 border-red-200">
              <div className="text-4xl font-bold text-red-600 mb-3">∞</div>
              <p className="text-charcoal-light">Countless other families facing identical systemic failures</p>
            </Card>
          </div>
        </section>

        {/* Our Vision */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-forest-green mb-8">Our Vision</h2>
          <p className="text-lg text-charcoal mb-6 leading-relaxed">
            We envision a Canada where Indigenous children are truly protected—not by systems designed to assimilate them, 
            but by systems designed to honor their rights, their cultures, and their futures. Where politicians respond to 
            constituents. Where lawyers uphold their oath. Where child protection actually protects. Where reconciliation 
            means action, not apologies.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-forest-green/5 border-2 border-forest-green/20">
              <Target className="w-8 h-8 text-amber-orange mb-4" />
              <h3 className="text-2xl font-bold text-forest-green mb-4">Real Accountability</h3>
              <p className="text-charcoal-light">
                Officials who fail Indigenous families face consequences. Systemic failures are investigated. 
                Pensions are stripped from those who enabled abuse. Justice is not negotiable.
              </p>
            </Card>
            <Card className="p-8 bg-forest-green/5 border-2 border-forest-green/20">
              <Shield className="w-8 h-8 text-amber-orange mb-4" />
              <h3 className="text-2xl font-bold text-forest-green mb-4">True Protection</h3>
              <p className="text-charcoal-light">
                Jordan's Principle is applied without delay. DPJ is reformed with Indigenous oversight. 
                Child protection means protecting, not harming.
              </p>
            </Card>
            <Card className="p-8 bg-forest-green/5 border-2 border-forest-green/20">
              <Users className="w-8 h-8 text-amber-orange mb-4" />
              <h3 className="text-2xl font-bold text-forest-green mb-4">Community Power</h3>
              <p className="text-charcoal-light">
                Indigenous communities lead their own child welfare. External systems serve, not control. 
                Cultural continuity is protected, not criminalized.
              </p>
            </Card>
            <Card className="p-8 bg-forest-green/5 border-2 border-forest-green/20">
              <Heart className="w-8 h-8 text-amber-orange mb-4" />
              <h3 className="text-2xl font-bold text-forest-green mb-4">Healing & Justice</h3>
              <p className="text-charcoal-light">
                Survivors receive reparations and support. Families are reunited. The cycle of systemic trauma is broken.
              </p>
            </Card>
          </div>
        </section>

        {/* Our Mission */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-forest-green mb-8">Our Mission</h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg border-l-4 border-amber-orange">
              <h3 className="text-2xl font-bold text-forest-green mb-3">1. Document Systemic Failures</h3>
              <p className="text-charcoal-light">
                Collect evidence of DPJ failures, political ghosting, lawyer negligence, and institutional abuse. 
                Build a public record that cannot be denied or erased.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border-l-4 border-amber-orange">
              <h3 className="text-2xl font-bold text-forest-green mb-3">2. Demand Public Accountability</h3>
              <p className="text-charcoal-light">
                Call out officials by name. Tag them on social media. Demand responses. Make silence impossible. 
                Use public pressure as a tool for change.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border-l-4 border-amber-orange">
              <h3 className="text-2xl font-bold text-forest-green mb-3">3. Support Survivors</h3>
              <p className="text-charcoal-light">
                Provide resources, legal support, and community for families fighting systemic failures. 
                No family should fight alone.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border-l-4 border-amber-orange">
              <h3 className="text-2xl font-bold text-forest-green mb-3">4. Drive Policy Change</h3>
              <p className="text-charcoal-light">
                Push for DPJ reform, Jordan's Principle enforcement, and systemic accountability. 
                Turn public pressure into legislative action.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border-l-4 border-amber-orange">
              <h3 className="text-2xl font-bold text-forest-green mb-3">5. Build a Movement</h3>
              <p className="text-charcoal-light">
                Connect families. Amplify voices. Create a network of Indigenous advocates demanding justice. 
                One family's fight becomes a movement for all.
              </p>
            </div>
          </div>
        </section>

        {/* The Manifesto */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-forest-green mb-8">The Manifesto</h2>
          <div className="bg-forest-green text-white p-12 rounded-lg">
            <p className="text-lg leading-relaxed mb-6">
              <strong>We believe that reconciliation without accountability is colonialism with a smile.</strong>
            </p>
            <p className="text-lg leading-relaxed mb-6">
              We believe that Indigenous children deserve more than apologies. They deserve protection, respect, 
              and a future free from systemic violence.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              We believe that politicians who ghost constituents should face consequences. That lawyers who break 
              their oath should lose their licenses. That systems that harm children should be dismantled and rebuilt.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              We believe that silence is complicity. That public pressure creates change. That one family's fight 
              can become a movement for millions.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              We believe that justice delayed is justice denied. That the time for empty words is over. 
              That the time for action is now.
            </p>
            <p className="text-lg leading-relaxed font-bold">
              This is not a request. This is a demand. Justice for All. Breaking the Cycle. Now.
            </p>
          </div>
        </section>

        {/* How to Join */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-forest-green mb-8">How to Join the Movement</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-white border-2 border-forest-green/20">
              <Zap className="w-8 h-8 text-amber-orange mb-4" />
              <h3 className="text-2xl font-bold text-forest-green mb-4">Share Your Story</h3>
              <p className="text-charcoal-light mb-6">
                If you've been ghosted by a politician or failed by child protection, share your story. 
                Your voice matters. Your experience matters.
              </p>
              <Link href="/share-story">
                <Button className="w-full bg-amber-orange hover:bg-amber-light text-white font-semibold">
                  Share Your Story
                </Button>
              </Link>
            </Card>
            <Card className="p-8 bg-white border-2 border-forest-green/20">
              <Globe className="w-8 h-8 text-amber-orange mb-4" />
              <h3 className="text-2xl font-bold text-forest-green mb-4">Amplify the Message</h3>
              <p className="text-charcoal-light mb-6">
                Share this campaign on social media. Tag officials. Demand accountability. 
                Make noise. Make them listen.
              </p>
              <Link href="/contact-accountability">
                <Button className="w-full bg-amber-orange hover:bg-amber-light text-white font-semibold">
                  Contact Officials
                </Button>
              </Link>
            </Card>
            <Card className="p-8 bg-white border-2 border-forest-green/20">
              <Heart className="w-8 h-8 text-amber-orange mb-4" />
              <h3 className="text-2xl font-bold text-forest-green mb-4">Support the Cause</h3>
              <p className="text-charcoal-light mb-6">
                Donate to support legal action, awareness campaigns, and survivor support. 
                Every contribution fuels justice.
              </p>
              <Link href="/donate-comprehensive">
                <Button className="w-full bg-amber-orange hover:bg-amber-light text-white font-semibold">
                  Donate Now
                </Button>
              </Link>
            </Card>
            <Card className="p-8 bg-white border-2 border-forest-green/20">
              <Users className="w-8 h-8 text-amber-orange mb-4" />
              <h3 className="text-2xl font-bold text-forest-green mb-4">Organize Locally</h3>
              <p className="text-charcoal-light mb-6">
                Start a local chapter. Connect with other families. Build community power. 
                Movements are built from the ground up.
              </p>
              <Button variant="outline" className="w-full border-forest-green text-forest-green hover:bg-forest-green hover:text-white font-semibold">
                Contact Us
              </Button>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-amber-orange/10 p-12 rounded-lg border-2 border-amber-orange">
          <h2 className="text-3xl font-bold text-forest-green mb-6">The Time for Action is Now</h2>
          <p className="text-lg text-charcoal mb-8 max-w-3xl mx-auto">
            Reconciliation is not a destination. It's a process. And that process requires accountability, 
            action, and the courage to demand better. Join us. Share your story. Demand justice. 
            Together, we can break the cycle.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact-accountability">
              <Button className="bg-forest-green hover:bg-forest-green/80 text-white font-semibold px-8 py-3">
                Demand Accountability Now
              </Button>
            </Link>
            <Link href="/donate-comprehensive">
              <Button className="bg-amber-orange hover:bg-amber-light text-white font-semibold px-8 py-3">
                Support the Movement
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
