import { useState } from 'react';
import { useAuth } from '@/_core/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, FileText, Heart, Briefcase, LogOut, Menu, X, CheckCircle, XCircle, Clock } from 'lucide-react';
import { trpc } from '@/lib/trpc';

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Redirect if not admin
  if (!user || user.role !== 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="p-8 text-center max-w-md">
          <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
          <p className="text-foreground/70 mb-6">You do not have permission to access this dashboard.</p>
          <a href="/" className="inline-block">
            <Button>Return to Home</Button>
          </a>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-forest-green text-cream transition-all duration-300 flex flex-col fixed h-screen`}>
        <div className="p-4 flex items-center justify-between border-b border-amber-orange">
          {sidebarOpen && <h2 className="font-bold text-lg">Admin Panel</h2>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-amber-orange/20 rounded">
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {[
            { id: 'overview', label: 'Overview', icon: FileText },
            { id: 'parents', label: 'Parent Profiles', icon: Users },
            { id: 'stories', label: 'Survivor Stories', icon: FileText },
            { id: 'donations', label: 'Donations', icon: Heart },
            { id: 'lawyers', label: 'Legal Professionals', icon: Briefcase },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`w-full flex items-center gap-3 px-4 py-2 rounded transition-colors ${
                activeTab === id
                  ? 'bg-amber-orange text-white'
                  : 'hover:bg-amber-orange/20'
              }`}
            >
              <Icon size={20} />
              {sidebarOpen && <span className="text-sm">{label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-amber-orange">
          <button
            onClick={() => logout()}
            className="w-full flex items-center gap-3 px-4 py-2 rounded hover:bg-amber-orange/20 transition-colors"
          >
            <LogOut size={20} />
            {sidebarOpen && <span className="text-sm">Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className={`${sidebarOpen ? 'ml-64' : 'ml-20'} flex-1 p-8 overflow-auto transition-all duration-300`}>
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-forest-green mb-2">Admin Dashboard</h1>
          <p className="text-foreground/70">Welcome back, {user.name}</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="parents">Parents</TabsTrigger>
            <TabsTrigger value="stories">Stories</TabsTrigger>
            <TabsTrigger value="donations">Donations</TabsTrigger>
            <TabsTrigger value="lawyers">Lawyers</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <OverviewSection />
          </TabsContent>

          <TabsContent value="parents">
            <ParentProfilesSection />
          </TabsContent>

          <TabsContent value="stories">
            <StoriesSection />
          </TabsContent>

          <TabsContent value="donations">
            <DonationsSection />
          </TabsContent>

          <TabsContent value="lawyers">
            <LawyersSection />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function OverviewSection() {
  const { data: totalDonations } = trpc.donations.getTotal.useQuery();
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6">
          <h3 className="text-sm font-semibold text-foreground/70 mb-2">Total Donations</h3>
          <p className="text-3xl font-bold text-amber-orange">${totalDonations?.totalCAD || '0.00'}</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-sm font-semibold text-foreground/70 mb-2">Pending Stories</h3>
          <p className="text-3xl font-bold text-amber-orange">—</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-sm font-semibold text-foreground/70 mb-2">Parent Members</h3>
          <p className="text-3xl font-bold text-amber-orange">—</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-sm font-semibold text-foreground/70 mb-2">Lawyers Interested</h3>
          <p className="text-3xl font-bold text-amber-orange">—</p>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4">Dashboard Overview</h2>
        <p className="text-foreground/70">Use the tabs above to manage submissions and track movement growth.</p>
      </Card>
    </div>
  );
}

function ParentProfilesSection() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold mb-4">Parent Profiles</h2>
      <div className="space-y-4">
        <div className="flex gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search parent profiles..."
              className="w-full px-4 py-2 border border-border rounded-lg"
            />
          </div>
        </div>
        <p className="text-foreground/70">No parent profiles submitted yet.</p>
      </div>
    </Card>
  );
}

function StoriesSection() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold mb-4">Survivor Stories</h2>
      <div className="space-y-4">
        <div className="flex gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search stories..."
              className="w-full px-4 py-2 border border-border rounded-lg"
            />
          </div>
          <select className="px-4 py-2 border border-border rounded-lg">
            <option>All Categories</option>
            <option>Child Victim</option>
            <option>Adult Victim</option>
            <option>Family Member</option>
            <option>Advocate</option>
          </select>
          <select className="px-4 py-2 border border-border rounded-lg">
            <option>All Status</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>
        </div>
        <p className="text-foreground/70">No stories submitted yet.</p>
      </div>
    </Card>
  );
}

function DonationsSection() {
  const { data: totalDonations } = trpc.donations.getTotal.useQuery();
  
  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold mb-4">Donations Management</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-amber-orange/10 rounded-lg">
            <p className="text-sm text-foreground/70">Total Raised</p>
            <p className="text-2xl font-bold text-amber-orange">${totalDonations?.totalCAD || '0.00'}</p>
          </div>
          <div className="p-4 bg-amber-orange/10 rounded-lg">
            <p className="text-sm text-foreground/70">e-Transfer</p>
            <p className="text-2xl font-bold text-amber-orange">—</p>
          </div>
          <div className="p-4 bg-amber-orange/10 rounded-lg">
            <p className="text-sm text-foreground/70">Other Methods</p>
            <p className="text-2xl font-bold text-amber-orange">—</p>
          </div>
        </div>
        <p className="text-foreground/70">No donations recorded yet.</p>
      </div>
    </Card>
  );
}

function LawyersSection() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold mb-4">Legal Professionals</h2>
      <div className="space-y-4">
        <div className="flex gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search lawyers..."
              className="w-full px-4 py-2 border border-border rounded-lg"
            />
          </div>
          <select className="px-4 py-2 border border-border rounded-lg">
            <option>All Jurisdictions</option>
            <option>Canada</option>
            <option>Quebec</option>
            <option>International</option>
          </select>
        </div>
        <p className="text-foreground/70">No lawyer profiles submitted yet.</p>
      </div>
    </Card>
  );
}
