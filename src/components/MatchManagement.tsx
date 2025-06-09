import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Plus, Users, MapPin, FileText, Target } from "lucide-react";
import { MatchDetails } from "./MatchDetails";
import { useState } from "react";

const matches = [
  {
    id: 1,
    team: "Senior Men",
    opponent: "Riverside FC",
    date: "2024-06-08",
    time: "15:00",
    venue: "Home Stadium",
    status: "completed",
    lineupSet: true,
    score: { home: 3, away: 2 },
  },
  {
    id: 2,
    team: "Senior Women",
    opponent: "Athletic Club",
    date: "2024-06-09",
    time: "14:00",
    venue: "Away",
    status: "upcoming",
    lineupSet: false,
  },
  {
    id: 3,
    team: "U21 Men",
    opponent: "Youth Academy",
    date: "2024-06-10",
    time: "16:30",
    venue: "Training Ground",
    status: "upcoming",
    lineupSet: false,
  },
];

export function MatchManagement() {
  const [selectedMatch, setSelectedMatch] = useState<number | null>(null);

  if (selectedMatch) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            onClick={() => setSelectedMatch(null)}
          >
            ← Back to Matches
          </Button>
          <h2 className="text-2xl font-bold text-gray-900">Match Details</h2>
        </div>
        <MatchDetails />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Match Management</h2>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Schedule Match
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {matches.map((match) => (
          <Card key={match.id} className="border-blue-100 hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{match.team} vs {match.opponent}</CardTitle>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{match.date} at {match.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{match.venue}</span>
                    </div>
                  </div>
                  {match.score && (
                    <div className="mt-2">
                      <span className="text-lg font-bold text-blue-600">
                        {match.score.home} - {match.score.away}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <Badge variant={match.status === "completed" ? "default" : "secondary"}>
                    {match.status}
                  </Badge>
                  <Badge variant={match.lineupSet ? "default" : "secondary"}>
                    {match.lineupSet ? "Lineup Set" : "Pending"}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span className="font-medium">Starting Lineup</span>
                  </div>
                  <Button 
                    variant={match.lineupSet ? "outline" : "default"} 
                    size="sm"
                  >
                    {match.lineupSet ? "Edit Lineup" : "Set Lineup"}
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => setSelectedMatch(match.id)}
                  >
                    <FileText className="w-3 h-3 mr-1" />
                    {match.status === "completed" ? "Match Report" : "Match Details"}
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                    <Target className="w-3 h-3 mr-1" />
                    {match.status === "completed" ? "Statistics" : "Predictions"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Results */}
      <Card className="border-blue-100">
        <CardHeader>
          <CardTitle>Recent Results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
              <div>
                <div className="font-semibold text-gray-900">Senior Men vs City United</div>
                <div className="text-sm text-gray-600">June 2, 2024 • Home Stadium</div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-green-700">3-2</div>
                <Badge className="bg-green-100 text-green-800">WON</Badge>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div>
                <div className="font-semibold text-gray-900">Senior Women vs Valley FC</div>
                <div className="text-sm text-gray-600">June 1, 2024 • Away</div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-yellow-700">1-1</div>
                <Badge className="bg-yellow-100 text-yellow-800">DRAW</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
