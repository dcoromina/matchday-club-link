
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, MapPin, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const allTeams = [
  { id: 1, name: "Senior Men", sport: "Football", players: 25, league: "Premier Division", status: "active" },
  { id: 2, name: "Senior Women", sport: "Football", players: 22, league: "Division 1", status: "active" },
  { id: 3, name: "U21 Men", sport: "Football", players: 20, league: "Youth League", status: "active" },
  { id: 4, name: "U18 Boys", sport: "Football", players: 18, league: "Junior League", status: "active" },
  { id: 5, name: "U16 Girls", sport: "Football", players: 16, league: "Youth Division", status: "inactive" },
  { id: 6, name: "Senior Men", sport: "Basketball", players: 15, league: "National League", status: "active" },
  { id: 7, name: "Senior Women", sport: "Basketball", players: 14, league: "Regional League", status: "active" },
  { id: 8, name: "U18 Boys", sport: "Basketball", players: 12, league: "Youth League", status: "active" },
  { id: 9, name: "Mixed Doubles", sport: "Tennis", players: 8, league: "Club League", status: "active" },
  { id: 10, name: "Singles", sport: "Tennis", players: 12, league: "Regional Circuit", status: "active" },
];

export function DashboardTeamsOverview() {
  // Show only first 6 teams on dashboard
  const displayTeams = allTeams.slice(0, 6);

  return (
    <Card className="border-blue-100">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-blue-600" />
            Teams
          </CardTitle>
          <Link to="/teams" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            View All
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-3">
          {displayTeams.map((team) => (
            <Link 
              key={team.id} 
              to={`/teams/${team.id}`}
              className="block"
            >
              <div className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer border hover:border-blue-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{team.name}</h4>
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <span>{team.sport}</span>
                        <span>•</span>
                        <span>{team.players} players</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant={team.status === "active" ? "default" : "secondary"} className="text-xs">
                    {team.status}
                  </Badge>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
