
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const matches = [
  {
    team: "Senior Men",
    opponent: "City United",
    date: "2024-06-02",
    result: "3-2",
    status: "won",
    venue: "Home"
  },
  {
    team: "Senior Women",
    opponent: "Valley FC",
    date: "2024-06-01",
    result: "1-1",
    status: "draw",
    venue: "Away"
  },
  {
    team: "U21 Men",
    opponent: "Youth Stars",
    date: "2024-05-30",
    result: "0-2",
    status: "lost",
    venue: "Home"
  },
  {
    team: "U18 Boys",
    opponent: "Junior Eagles",
    date: "2024-05-29",
    result: "4-1",
    status: "won",
    venue: "Away"
  },
];

export function RecentMatches() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "won": return "bg-green-100 text-green-800";
      case "lost": return "bg-red-100 text-red-800";
      case "draw": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="border-blue-100">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-blue-600" />
          Recent Matches
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {matches.map((match, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div>
                <h4 className="font-semibold text-gray-900">{match.team} vs {match.opponent}</h4>
                <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                  <Calendar className="w-3 h-3" />
                  <span>{match.date}</span>
                  <MapPin className="w-3 h-3 ml-2" />
                  <span>{match.venue}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-gray-900">{match.result}</div>
                <Badge className={getStatusColor(match.status)}>
                  {match.status.toUpperCase()}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
