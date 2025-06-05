
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, UserCheck, AlertCircle, Edit } from "lucide-react";

const players = [
  {
    id: 1,
    name: "John Smith",
    position: "Forward",
    age: 25,
    status: "Available",
    injuries: 0,
    attendance: 95,
    team: "Senior Men"
  },
  {
    id: 2,
    name: "Mike Johnson",
    position: "Midfielder",
    age: 23,
    status: "Injured",
    injuries: 1,
    attendance: 87,
    team: "Senior Men"
  },
  {
    id: 3,
    name: "Sarah Wilson",
    position: "Defender",
    age: 21,
    status: "Available",
    injuries: 0,
    attendance: 98,
    team: "Senior Women"
  },
  {
    id: 4,
    name: "Emma Davis",
    position: "Goalkeeper",
    age: 24,
    status: "Available",
    injuries: 0,
    attendance: 100,
    team: "Senior Women"
  },
];

export function TeamDetails() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available": return "bg-green-100 text-green-800";
      case "Injured": return "bg-red-100 text-red-800";
      case "Suspended": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Team Management</h2>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Users className="w-4 h-4 mr-2" />
          Add Player
        </Button>
      </div>

      <Card className="border-blue-100">
        <CardHeader>
          <CardTitle>Player Roster</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Player</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Team</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Position</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Attendance</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {players.map((player) => (
                  <tr key={player.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                          {player.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{player.name}</div>
                          <div className="text-sm text-gray-600">Age: {player.age}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-900">{player.team}</td>
                    <td className="py-4 px-4 text-gray-900">{player.position}</td>
                    <td className="py-4 px-4">
                      <Badge className={getStatusColor(player.status)}>
                        {player.status}
                      </Badge>
                      {player.injuries > 0 && (
                        <div className="flex items-center gap-1 mt-1 text-red-600">
                          <AlertCircle className="w-3 h-3" />
                          <span className="text-xs">{player.injuries} injury</span>
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <UserCheck className="w-4 h-4 text-green-600" />
                        <span className="font-medium">{player.attendance}%</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <Button variant="outline" size="sm">
                        <Edit className="w-3 h-3 mr-1" />
                        Edit
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
