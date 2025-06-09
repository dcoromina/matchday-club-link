
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, UserCheck, AlertCircle, Edit, Trophy, MapPin } from "lucide-react";

const teamsData = {
  "1": {
    name: "Senior Men Football",
    sport: "Football",
    league: "Premier Division",
    status: "active",
    coach: "John Doe",
    founded: "2010",
    players: [
      { id: 1, name: "John Smith", position: "Forward", age: 25, status: "Available", injuries: 0, attendance: 95 },
      { id: 2, name: "Mike Johnson", position: "Midfielder", age: 23, status: "Injured", injuries: 1, attendance: 87 },
      { id: 3, name: "David Wilson", position: "Defender", age: 24, status: "Available", injuries: 0, attendance: 92 },
      { id: 4, name: "Tom Brown", position: "Goalkeeper", age: 26, status: "Available", injuries: 0, attendance: 98 },
    ]
  },
  "2": {
    name: "Senior Women Football",
    sport: "Football",
    league: "Division 1",
    status: "active",
    coach: "Sarah Connor",
    founded: "2012",
    players: [
      { id: 5, name: "Sarah Wilson", position: "Defender", age: 21, status: "Available", injuries: 0, attendance: 98 },
      { id: 6, name: "Emma Davis", position: "Goalkeeper", age: 24, status: "Available", injuries: 0, attendance: 100 },
      { id: 7, name: "Lisa Martinez", position: "Forward", age: 22, status: "Available", injuries: 0, attendance: 94 },
      { id: 8, name: "Anna Thompson", position: "Midfielder", age: 23, status: "Suspended", injuries: 0, attendance: 89 },
    ]
  },
  "6": {
    name: "Senior Men Basketball",
    sport: "Basketball",
    league: "National League",
    status: "active",
    coach: "Michael Jordan",
    founded: "2015",
    players: [
      { id: 9, name: "Alex Johnson", position: "Point Guard", age: 24, status: "Available", injuries: 0, attendance: 96 },
      { id: 10, name: "Chris Williams", position: "Center", age: 27, status: "Available", injuries: 0, attendance: 93 },
      { id: 11, name: "Ryan Davis", position: "Forward", age: 25, status: "Injured", injuries: 1, attendance: 85 },
    ]
  }
};

interface TeamDetailsProps {
  teamId?: string;
}

export function TeamDetails({ teamId }: TeamDetailsProps) {
  const team = teamId ? teamsData[teamId as keyof typeof teamsData] : null;

  if (!team) {
    return (
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Team Not Found</h2>
        <p className="text-gray-600">The requested team could not be found.</p>
      </div>
    );
  }

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
      {/* Team Information Header */}
      <Card className="border-blue-100">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl">{team.name}</CardTitle>
                <div className="flex items-center gap-4 mt-2 text-gray-600">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{team.league}</span>
                  </div>
                  <Badge variant={team.status === "active" ? "default" : "secondary"}>
                    {team.status}
                  </Badge>
                </div>
              </div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Users className="w-4 h-4 mr-2" />
              Add Player
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{team.players.length}</div>
              <div className="text-sm text-gray-600">Total Players</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">{team.coach}</div>
              <div className="text-sm text-gray-600">Head Coach</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-900">{team.founded}</div>
              <div className="text-sm text-gray-600">Founded</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Player Roster */}
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
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Position</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Attendance</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {team.players.map((player) => (
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
