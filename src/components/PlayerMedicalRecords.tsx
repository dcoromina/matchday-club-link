
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Heart, AlertTriangle, FileText, Plus, Calendar } from "lucide-react";

const medicalRecords = [
  {
    playerId: 1,
    playerName: "John Smith",
    team: "Senior Men Football",
    bloodType: "O+",
    allergies: "None",
    medications: "None",
    lastCheckup: "2024-05-15",
    injuries: [
      { date: "2024-03-10", type: "Ankle Sprain", severity: "Minor", status: "Recovered" },
    ],
    emergencyContact: "Jane Smith - 555-0123",
    status: "Cleared",
  },
  {
    playerId: 2,
    playerName: "Mike Johnson",
    team: "Senior Men Football",
    bloodType: "A+",
    allergies: "Peanuts",
    medications: "Inhaler (Asthma)",
    lastCheckup: "2024-04-20",
    injuries: [
      { date: "2024-05-28", type: "Hamstring Strain", severity: "Moderate", status: "Recovering" },
    ],
    emergencyContact: "Lisa Johnson - 555-0456",
    status: "Injured",
  },
  {
    playerId: 5,
    playerName: "Sarah Wilson",
    team: "Senior Women Football",
    bloodType: "B+",
    allergies: "None",
    medications: "None",
    lastCheckup: "2024-06-01",
    injuries: [],
    emergencyContact: "Tom Wilson - 555-0789",
    status: "Cleared",
  },
];

export function PlayerMedicalRecords() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Cleared": return "bg-green-100 text-green-800";
      case "Injured": return "bg-red-100 text-red-800";
      case "Under Review": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Medical Records</h2>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Medical Record
        </Button>
      </div>

      {/* Medical Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-green-100">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Cleared Players</p>
                <p className="text-2xl font-bold text-green-600">
                  {medicalRecords.filter(r => r.status === "Cleared").length}
                </p>
              </div>
              <Heart className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-red-100">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Injured Players</p>
                <p className="text-2xl font-bold text-red-600">
                  {medicalRecords.filter(r => r.status === "Injured").length}
                </p>
              </div>
              <AlertTriangle className="w-8 h-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-yellow-100">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Due Checkups</p>
                <p className="text-2xl font-bold text-yellow-600">3</p>
              </div>
              <Calendar className="w-8 h-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-100">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Records</p>
                <p className="text-2xl font-bold text-blue-600">{medicalRecords.length}</p>
              </div>
              <FileText className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Medical Records Table */}
      <Card className="border-blue-100">
        <CardHeader>
          <CardTitle>Player Medical Records</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Player</TableHead>
                <TableHead>Blood Type</TableHead>
                <TableHead>Allergies</TableHead>
                <TableHead>Last Checkup</TableHead>
                <TableHead>Current Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {medicalRecords.map((record) => (
                <TableRow key={record.playerId}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{record.playerName}</div>
                      <div className="text-sm text-gray-600">{record.team}</div>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{record.bloodType}</TableCell>
                  <TableCell>
                    {record.allergies === "None" ? (
                      <span className="text-gray-500">None</span>
                    ) : (
                      <Badge variant="outline" className="bg-red-50 text-red-700">
                        {record.allergies}
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>{record.lastCheckup}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(record.status)}>
                      {record.status}
                    </Badge>
                    {record.injuries.length > 0 && record.status === "Injured" && (
                      <div className="text-xs text-red-600 mt-1">
                        {record.injuries[0].type}
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
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
