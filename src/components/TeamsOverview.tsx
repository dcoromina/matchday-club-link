
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, MapPin, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const teamsBySport = {
  "Football": [
    { id: 1, name: "Senior Men", players: 25, league: "Premier Division", status: "active" },
    { id: 2, name: "Senior Women", players: 22, league: "Division 1", status: "active" },
    { id: 3, name: "U21 Men", players: 20, league: "Youth League", status: "active" },
    { id: 4, name: "U18 Boys", players: 18, league: "Junior League", status: "active" },
    { id: 5, name: "U16 Girls", players: 16, league: "Youth Division", status: "inactive" },
  ],
  "Basketball": [
    { id: 6, name: "Senior Men", players: 15, league: "National League", status: "active" },
    { id: 7, name: "Senior Women", players: 14, league: "Regional League", status: "active" },
    { id: 8, name: "U18 Boys", players: 12, league: "Youth League", status: "active" },
  ],
  "Tennis": [
    { id: 9, name: "Mixed Doubles", players: 8, league: "Club League", status: "active" },
    { id: 10, name: "Singles", players: 12, league: "Regional Circuit", status: "active" },
  ]
};

export function TeamsOverview() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Teams by Sport</h2>
      </div>

      {Object.entries(teamsBySport).map(([sport, teams]) => (
        <Card key={sport} className="border-blue-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-blue-600" />
              {sport}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {teams.map((team) => (
                <Link 
                  key={team.id} 
                  to={`/teams/${team.id}`}
                  className="block"
                >
                  <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer border hover:border-blue-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{team.name}</h4>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin className="w-3 h-3" />
                          <span>{team.league}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm font-medium text-gray-900">{team.players} players</div>
                      <Badge variant={team.status === "active" ? "default" : "secondary"}>
                        {team.status}
                      </Badge>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
