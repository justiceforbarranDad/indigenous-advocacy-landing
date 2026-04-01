import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AlertCircle, FileText, Users, Target } from "lucide-react";

export default function PoliceAccountability() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Police Accountability & Systemic Profiling
          </h1>
          <p className="text-xl text-muted-foreground">
            Documenting systemic discrimination against Indigenous youth
          </p>
        </div>

        {/* The Problem */}
        <Card className="bg-card text-card-foreground p-8 mb-8 border-l-4 border-red-600">
          <div className="flex gap-4">
            <AlertCircle className="h-8 w-8 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-4">The Reality: Systemic Profiling</h2>
              <p className="text-lg mb-4">
                Barran is a secondary driver on his family's insurance file. Everything is documented. Everything is legal. Yet he gets pulled over by police regularly - for no reason, no crime, no suspicion.
              </p>
              <p className="text-lg mb-4">
                This is not an isolated incident. This is systemic racism. This is police profiling of Indigenous youth.
              </p>
              <ul className="space-y-2 text-lg">
                <li>✗ Pulled over regularly at night</li>
                <li>✗ No crime committed</li>
                <li>✗ Fully documented and legal driver</li>
                <li>✗ Treated as suspect despite following all rules</li>
                <li>✗ Compounding trauma from stabbing attack</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* The Evidence */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="bg-card text-card-foreground p-8">
            <div className="flex gap-4 mb-4">
              <FileText className="h-8 w-8 text-blue-600 flex-shrink-0" />
              <h3 className="text-2xl font-bold">Documentation</h3>
            </div>
            <ul className="space-y-3 text-lg">
              <li>✓ Secondary driver on insurance file</li>
              <li>✓ Legally authorized to drive</li>
              <li>✓ Police can verify in system</li>
              <li>✓ All paperwork in order</li>
              <li>✓ No violations or infractions</li>
            </ul>
          </Card>

          <Card className="bg-card text-card-foreground p-8">
            <div className="flex gap-4 mb-4">
              <Target className="h-8 w-8 text-orange-600 flex-shrink-0" />
              <h3 className="text-2xl font-bold">Pattern of Profiling</h3>
            </div>
            <ul className="space-y-3 text-lg">
              <li>• Multiple stops at night</li>
              <li>• No legitimate reason given</li>
              <li>• Targeted for being Indigenous</li>
              <li>• Targeted for being young</li>
              <li>• Compounding trauma and injustice</li>
            </ul>
          </Card>
        </div>

        {/* Police Chief Meeting */}
        <Card className="bg-accent text-accent-foreground p-8 mb-8">
          <div className="flex gap-4 mb-4">
            <Users className="h-8 w-8 flex-shrink-0" />
            <h2 className="text-2xl font-bold">Police Chief Accountability Meeting</h2>
          </div>
          <p className="text-lg mb-4">
            We are planning a meeting with the police chief to address systemic profiling of Indigenous youth. We will be bringing legal representation to ensure accountability and demand policy changes.
          </p>
          <div className="bg-accent/20 p-6 rounded-lg mb-4">
            <h3 className="font-bold mb-3">Meeting Objectives:</h3>
            <ul className="space-y-2 text-lg">
              <li>1. Document systemic profiling patterns</li>
              <li>2. Demand investigation into discriminatory practices</li>
              <li>3. Require policy changes to prevent future profiling</li>
              <li>4. Ensure training on implicit bias and Indigenous rights</li>
              <li>5. Establish accountability mechanisms</li>
            </ul>
          </div>
          <p className="text-lg font-semibold">
            Status: Meeting being scheduled with legal representation
          </p>
        </Card>

        {/* What Needs to Change */}
        <Card className="bg-card text-card-foreground p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">What Needs to Change</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-3">Immediate Actions:</h3>
              <ul className="space-y-2 text-lg">
                <li>• Stop profiling Indigenous youth</li>
                <li>• Investigate discriminatory practices</li>
                <li>• Retrain officers on bias</li>
                <li>• Establish complaint mechanisms</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Long-term Reform:</h3>
              <ul className="space-y-2 text-lg">
                <li>• Systemic police reform</li>
                <li>• Accountability for discrimination</li>
                <li>• Indigenous oversight boards</li>
                <li>• Community-based alternatives</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Call to Action */}
        <Card className="bg-card text-card-foreground p-8 border-l-4 border-green-600">
          <h2 className="text-2xl font-bold mb-4">Support This Accountability Effort</h2>
          <p className="text-lg mb-6">
            Help us hold police accountable for systemic discrimination against Indigenous youth. Your support funds legal representation and advocacy efforts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => window.location.href = '/easy-donate'}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-lg"
            >
              💰 Support Legal Action
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.location.href = '/contact'}
              className="px-6 py-3 text-lg"
            >
              📧 Get Involved
            </Button>
          </div>
        </Card>

        {/* Resources */}
        <Card className="bg-card text-card-foreground p-8">
          <h2 className="text-2xl font-bold mb-6">Resources & Support</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-3">If You've Been Profiled:</h3>
              <ul className="space-y-2 text-lg">
                <li>• Document the incident (date, time, location)</li>
                <li>• Get badge numbers if possible</li>
                <li>• File a complaint with police</li>
                <li>• Contact legal aid organizations</li>
                <li>• Report to Indigenous advocacy groups</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Organizations:</h3>
              <ul className="space-y-2 text-lg">
                <li>• Assembly of First Nations</li>
                <li>• Canadian Civil Liberties Association</li>
                <li>• Indigenous Legal Services</li>
                <li>• Community Legal Clinics</li>
                <li>• Human Rights Organizations</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
