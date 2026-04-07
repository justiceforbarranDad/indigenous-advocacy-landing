import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";
import { Loader2, Download, RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";

export default function AdminDonationDashboard() {
  const { user, isAuthenticated } = useAuth();
  const [donations, setDonations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalRaised, setTotalRaised] = useState(0);

  // Check if user is admin
  if (!isAuthenticated || user?.role !== "admin") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Access Denied</CardTitle>
            <CardDescription>You do not have permission to access this dashboard.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Only administrators can view the donation dashboard.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Fetch donations data
  useEffect(() => {
    const fetchDonations = async () => {
      try {
        setLoading(true);
        // This would call a new tRPC endpoint to fetch all donations
        // For now, we'll set up the structure
        setDonations([]);
        setTotalRaised(0);
      } catch (error) {
        console.error("Error fetching donations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDonations();
  }, []);

  const handleExportCSV = () => {
    // Export donations as CSV
    const headers = ["Date", "Donor Name", "Amount (CAD)", "Method", "Message", "Status"];
    const rows = donations.map(d => [
      new Date(d.createdAt).toLocaleDateString(),
      d.isAnonymous === "yes" ? "Anonymous" : d.donorName,
      `$${(d.amount / 100).toFixed(2)}`,
      d.method,
      d.message || "",
      d.status,
    ]);

    const csv = [headers, ...rows].map(row => row.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `donations-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Donation Dashboard</h1>
          <p className="text-muted-foreground">
            Track and manage all donations to Justice for Barran
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Donations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{donations.length}</div>
              <p className="text-xs text-muted-foreground mt-2">
                Donation records in system
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Raised
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                ${(totalRaised / 100).toFixed(2)}
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                CAD (excluding fees)
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Confirmed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {donations.filter(d => d.status === "confirmed").length}
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Verified donations
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Donations Table */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Donations</CardTitle>
              <CardDescription>
                All donations submitted through the platform
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.location.reload()}
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleExportCSV}
              >
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
              </div>
            ) : donations.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">
                  No donations yet. Check back soon!
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">Date</th>
                      <th className="text-left py-3 px-4 font-medium">Donor</th>
                      <th className="text-left py-3 px-4 font-medium">Amount</th>
                      <th className="text-left py-3 px-4 font-medium">Method</th>
                      <th className="text-left py-3 px-4 font-medium">Status</th>
                      <th className="text-left py-3 px-4 font-medium">Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    {donations.map((donation) => (
                      <tr key={donation.id} className="border-b hover:bg-muted/50">
                        <td className="py-3 px-4">
                          {new Date(donation.createdAt).toLocaleDateString()}
                        </td>
                        <td className="py-3 px-4">
                          {donation.isAnonymous === "yes" ? (
                            <span className="text-muted-foreground italic">Anonymous</span>
                          ) : (
                            donation.donorName
                          )}
                        </td>
                        <td className="py-3 px-4 font-semibold">
                          ${(donation.amount / 100).toFixed(2)}
                        </td>
                        <td className="py-3 px-4">
                          <span className="capitalize text-xs bg-muted px-2 py-1 rounded">
                            {donation.method}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={`text-xs px-2 py-1 rounded ${
                              donation.status === "confirmed"
                                ? "bg-green-100 text-green-800"
                                : donation.status === "pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {donation.status.charAt(0).toUpperCase() +
                              donation.status.slice(1)}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-muted-foreground">
                          {donation.message ? donation.message.substring(0, 30) + "..." : "-"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Admin Notes */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Admin Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                • This dashboard shows all donations submitted through the website
              </p>
              <p>
                • e-Transfer donations should be manually verified and marked as confirmed
              </p>
              <p>
                • Stripe donations are automatically confirmed upon successful payment
              </p>
              <p>
                • Anonymous donors' names are not displayed for privacy
              </p>
              <p>
                • Export donations as CSV for accounting and reporting purposes
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
