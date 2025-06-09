
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar, MapPin, Users, Target, FileText, Clock } from "lucide-react";

const matchDetails = {
  id: 1,
  team: "Senior Men Football",
  opponent: "Riverside FC",
  date: "2024-06-08",
  time: "15:00",
  venue: "Home Stadium",
  status: "completed",
  score: { home: 3, away: 2 },
  lineup: [
    { position: "GK", player: "Tom Brown", number: 1, goals: 0, yellowCards: 0, redCards: 0 },
    { position: "CB", player: "David Wilson", number: 4, goals: 0, yellowCards: 1, redCards: 0 },
    { position: "CB", player: "Mark Davis", number: 5, goals: 0, yellowCards: 0, redCards: 0 },
    { position: "LB", player: "Chris Lee", number: 3, goals: 0, yellowCards: 0, redCards: 0 },
    { position: "RB", player: "Paul White", number: 2, goals: 0, yellowCards: 0, redCards: 0 },
    { position: "CM", player: "Mike Johnson", number: 8, goals: 1, yellowCards: 0, redCards: 0 },
    { position: "CM", player: "Steve Taylor", number: 6, goals: 0, yellowCards: 0, redCards: 0 },
    { position: "LW", player: "Alex Green", number: 11, goals: 1, yellowCards: 0, redCards: 0 },
    { position: "RW", player: "Ryan Black", number: 7, goals: 0, yellowCards: 1, redCards: 0 },
    { position: "ST", player: "John Smith", number: 9, goals: 1, yellowCards: 0, redCards: 0 },
    { position: "ST", player: "Danny Blue", number: 10, goals: 0, yellowCards: 0, redCards: 0 },
  ],
  substitutions: [
    { minute: 65, playerOut: "Danny Blue", playerIn: "James Red", reason: "Tactical" },
    { minute: 78, playerOut: "Alex Green", playerIn: "Matt Silver", reason: "Injury" },
  ],
  events: [
    { minute: 23, type: "goal", player: "John Smith", description: "Header from corner kick" },
    { minute: 34, type: "yellow", player: "David Wilson", description: "Foul on opponent striker" },
    { minute: 45, type: "goal", player: "Opponent Player", description: "Long range shot" },
    { minute: 67, type: "goal", player: "Mike Johnson", description: "Penalty kick" },
    { minute: 72, type: "goal", player: "Opponent Player", description: "Cross from right wing" },
    { minute: 89, type: "goal", player: "Alex Green", description: "Counter attack finish" },
  ],
};

export function MatchDetails() {
  return (
    <div className="space-y-6">
      {/* Match Header */}
      <Card className="border-blue-100">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl">{matchDetails.team} vs {matchDetails.opponent}</CardTitle>
              <div className="flex items-center gap-4 mt-2 text-gray-600">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{matchDetails.date} at {matchDetails.time}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{matchDetails.venue}</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900">
                {matchDetails.score.home} - {matchDetails.score.away}
              </div>
              <Badge variant="default" className="mt-2">Final Score</Badge>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Match Events Timeline */}
      <Card className="border-blue-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Match Events
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {matchDetails.events.map((event, index) => (
              <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-12 text-center font-bold text-blue-600">
                  {event.minute}'
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    {event.type === "goal" && <Target className="w-4 h-4 text-green-600" />}
                    {event.type === "yellow" && <div className="w-4 h-3 bg-yellow-400 rounded-sm" />}
                    <span className="font-medium">{event.player}</span>
                  </div>
                  <div className="text-sm text-gray-600">{event.description}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Starting Lineup */}
      <Card className="border-blue-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            Starting Lineup
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Position</TableHead>
                <TableHead>Player</TableHead>
                <TableHead>Number</TableHead>
                <TableHead>Goals</TableHead>
                <TableHead>Cards</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {matchDetails.lineup.map((player, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{player.position}</TableCell>
                  <TableCell>{player.player}</TableCell>
                  <TableCell>{player.number}</TableCell>
                  <TableCell>
                    {player.goals > 0 && (
                      <Badge variant="default" className="bg-green-100 text-green-800">
                        {player.goals}
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      {Array.from({ length: player.yellowCards }).map((_, i) => (
                        <div key={i} className="w-3 h-4 bg-yellow-400 rounded-sm" />
                      ))}
                      {Array.from({ length: player.redCards }).map((_, i) => (
                        <div key={i} className="w-3 h-4 bg-red-500 rounded-sm" />
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Substitutions */}
      <Card className="border-blue-100">
        <CardHeader>
          <CardTitle>Substitutions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {matchDetails.substitutions.map((sub, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 text-center font-bold text-blue-600">
                    {sub.minute}'
                  </div>
                  <div>
                    <div className="font-medium text-red-600">OUT: {sub.playerOut}</div>
                    <div className="font-medium text-green-600">IN: {sub.playerIn}</div>
                  </div>
                </div>
                <Badge variant="outline">{sub.reason}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Match Report */}
      <Card className="border-blue-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Match Report
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-gray-700">
              An exciting match that saw both teams create numerous chances. Our team started strong with John Smith's header from a corner kick in the 23rd minute. 
              Riverside FC equalized just before halftime with a spectacular long-range effort.
            </p>
            <p className="text-gray-700">
              The second half was intense with Mike Johnson converting a penalty to put us ahead again. Despite Riverside's quick response, 
              Alex Green's late counter-attack goal secured all three points for us.
            </p>
            <div className="flex gap-3 mt-4">
              <Button variant="outline" size="sm">
                Edit Report
              </Button>
              <Button variant="outline" size="sm">
                Export PDF
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
