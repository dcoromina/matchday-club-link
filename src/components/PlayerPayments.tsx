
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DollarSign, CheckCircle, AlertCircle, Plus } from "lucide-react";

const paymentData = [
  { playerId: 1, playerName: "John Smith", team: "Senior Men Football", monthlyFee: 50, paid: true, dueDate: "2024-06-01", paidDate: "2024-05-28" },
  { playerId: 2, playerName: "Mike Johnson", team: "Senior Men Football", monthlyFee: 50, paid: false, dueDate: "2024-06-01", paidDate: null },
  { playerId: 3, playerName: "David Wilson", team: "Senior Men Football", monthlyFee: 50, paid: true, dueDate: "2024-06-01", paidDate: "2024-06-02" },
  { playerId: 5, playerName: "Sarah Wilson", team: "Senior Women Football", monthlyFee: 45, paid: true, dueDate: "2024-06-01", paidDate: "2024-05-30" },
  { playerId: 6, playerName: "Emma Davis", team: "Senior Women Football", monthlyFee: 45, paid: false, dueDate: "2024-06-01", paidDate: null },
];

export function PlayerPayments() {
  const totalExpected = paymentData.reduce((sum, payment) => sum + payment.monthlyFee, 0);
  const totalReceived = paymentData.filter(p => p.paid).reduce((sum, payment) => sum + payment.monthlyFee, 0);
  const pendingPayments = paymentData.filter(p => !p.paid);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Payment Management</h2>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Record Payment
        </Button>
      </div>

      {/* Payment Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-green-100">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Received</p>
                <p className="text-2xl font-bold text-green-600">${totalReceived}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-yellow-100">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">${totalExpected - totalReceived}</p>
              </div>
              <AlertCircle className="w-8 h-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-100">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Expected Total</p>
                <p className="text-2xl font-bold text-blue-600">${totalExpected}</p>
              </div>
              <DollarSign className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Payment Details Table */}
      <Card className="border-blue-100">
        <CardHeader>
          <CardTitle>Payment Details - June 2024</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Player</TableHead>
                <TableHead>Team</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paymentData.map((payment) => (
                <TableRow key={payment.playerId}>
                  <TableCell className="font-medium">{payment.playerName}</TableCell>
                  <TableCell>{payment.team}</TableCell>
                  <TableCell>${payment.monthlyFee}</TableCell>
                  <TableCell>{payment.dueDate}</TableCell>
                  <TableCell>
                    <Badge variant={payment.paid ? "default" : "destructive"}>
                      {payment.paid ? "Paid" : "Pending"}
                    </Badge>
                    {payment.paid && payment.paidDate && (
                      <div className="text-xs text-gray-500 mt-1">
                        Paid: {payment.paidDate}
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    {!payment.paid && (
                      <Button variant="outline" size="sm">
                        Mark Paid
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
