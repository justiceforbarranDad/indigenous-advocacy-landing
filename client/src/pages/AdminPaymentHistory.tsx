import { useState, useMemo } from 'react';
import { useAuth } from '@/_core/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Download, Filter, TrendingUp } from 'lucide-react';
import { trpc } from '@/lib/trpc';

interface PaymentRecord {
  id: number;
  donorName: string;
  donorEmail: string;
  amount: number;
  method: string;
  status: string;
  stripePaymentIntentId: string | null;
  message: string | null;
  createdAt: Date;
}

export default function AdminPaymentHistory() {
  const { user, isAuthenticated } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterMethod, setFilterMethod] = useState<string>('all');

  // Check if user is admin
  if (!isAuthenticated || user?.role !== 'admin') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h1>
            <p className="text-gray-600">You must be an admin to view payment history.</p>
          </Card>
        </div>
      </div>
    );
  }

  // Mock data - in production, fetch from tRPC
  const payments: PaymentRecord[] = [
    {
      id: 1,
      donorName: 'John Smith',
      donorEmail: 'john@example.com',
      amount: 5000,
      method: 'stripe',
      status: 'confirmed',
      stripePaymentIntentId: 'pi_1234567890',
      message: 'Supporting justice for Barran',
      createdAt: new Date('2026-03-30'),
    },
    {
      id: 2,
      donorName: 'Sarah Johnson',
      donorEmail: 'sarah@example.com',
      amount: 2500,
      method: 'etransfer',
      status: 'confirmed',
      stripePaymentIntentId: null,
      message: null,
      createdAt: new Date('2026-03-29'),
    },
    {
      id: 3,
      donorName: 'Anonymous Supporter',
      donorEmail: 'anon@example.com',
      amount: 1000,
      method: 'stripe',
      status: 'confirmed',
      stripePaymentIntentId: 'pi_0987654321',
      message: 'Keep fighting for Indigenous rights',
      createdAt: new Date('2026-03-28'),
    },
  ];

  // Filter and search
  const filteredPayments = useMemo(() => {
    return payments.filter((payment) => {
      const matchesSearch =
        payment.donorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        payment.donorEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
        payment.stripePaymentIntentId?.includes(searchTerm);

      const matchesStatus = filterStatus === 'all' || payment.status === filterStatus;
      const matchesMethod = filterMethod === 'all' || payment.method === filterMethod;

      return matchesSearch && matchesStatus && matchesMethod;
    });
  }, [searchTerm, filterStatus, filterMethod]);

  // Calculate totals
  const totalDonations = filteredPayments.reduce((sum, p) => sum + p.amount, 0);
  const totalCount = filteredPayments.length;
  const averageDonation = totalCount > 0 ? totalDonations / totalCount : 0;

  const handleExportCSV = () => {
    const headers = ['Date', 'Donor Name', 'Email', 'Amount (CAD)', 'Method', 'Status', 'Message'];
    const rows = filteredPayments.map((p) => [
      new Date(p.createdAt).toLocaleDateString(),
      p.donorName,
      p.donorEmail,
      (p.amount / 100).toFixed(2),
      p.method,
      p.status,
      p.message || '',
    ]);

    const csv = [headers, ...rows].map((row) => row.map((cell) => `"${cell}"`).join(',')).join('\n');

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv));
    element.setAttribute('download', `payment-history-${new Date().getTime()}.csv`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Payment History</h1>
          <p className="text-gray-600">Manage and track all donations to Justice for Barran</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Donations</p>
                <p className="text-3xl font-bold text-gray-900">
                  ${(totalDonations / 100).toFixed(2)}
                </p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Number of Donations</p>
                <p className="text-3xl font-bold text-gray-900">{totalCount}</p>
              </div>
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">{totalCount}</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Average Donation</p>
                <p className="text-3xl font-bold text-gray-900">
                  ${(averageDonation / 100).toFixed(2)}
                </p>
              </div>
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold">Ø</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Filters */}
        <Card className="p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <Input
                placeholder="Donor name, email, or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Status</option>
                <option value="confirmed">Confirmed</option>
                <option value="pending">Pending</option>
                <option value="failed">Failed</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Method</label>
              <select
                value={filterMethod}
                onChange={(e) => setFilterMethod(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Methods</option>
                <option value="stripe">Stripe</option>
                <option value="etransfer">E-Transfer</option>
                <option value="gofundme">GoFundMe</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex items-end">
              <Button
                onClick={handleExportCSV}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2"
              >
                <Download size={18} />
                Export CSV
              </Button>
            </div>
          </div>
        </Card>

        {/* Payments Table */}
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Donor Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Message</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPayments.length > 0 ? (
                  filteredPayments.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell>{new Date(payment.createdAt).toLocaleDateString()}</TableCell>
                      <TableCell className="font-medium">{payment.donorName}</TableCell>
                      <TableCell className="text-sm">{payment.donorEmail}</TableCell>
                      <TableCell className="font-semibold text-green-600">
                        ${(payment.amount / 100).toFixed(2)}
                      </TableCell>
                      <TableCell className="capitalize">{payment.method}</TableCell>
                      <TableCell>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            payment.status === 'confirmed'
                              ? 'bg-green-100 text-green-800'
                              : payment.status === 'pending'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                        </span>
                      </TableCell>
                      <TableCell className="text-sm text-gray-600 max-w-xs truncate">
                        {payment.message || '—'}
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-8 text-gray-500">
                      No payments found matching your filters.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </Card>

        {/* Footer Info */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>Showing {filteredPayments.length} of {payments.length} payments</p>
        </div>
      </div>
    </div>
  );
}
