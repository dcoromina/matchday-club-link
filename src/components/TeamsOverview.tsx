
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, MapPin } from "lucide-react";

const teams = [
  { name: "Senior Men", players: 25, league: "Premier Division", status: "active" },
  { name: "Senior Women", players: 22, league: "Division 1", status: "active" },
  { name: "U21 Men", players: 20, league: "Youth League", status: "active" },
  { name: "U18 Boys", players: 18, league: "Junior League", status: "active" },
  { name: "U16 Girls", players: 16, league: "Youth Division", status: "inactive" },
];

export function TeamsOverview() {
  return (
    <Card className="border-blue-100">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="w-5 h-5 text-blue-600" />
          Teams Overview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {teams.map((team, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3">
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
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">{team.players} players</div>
                <Badge variant={team.status === "active" ? "default" : "secondary"} className="mt-1">
                  {team.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
