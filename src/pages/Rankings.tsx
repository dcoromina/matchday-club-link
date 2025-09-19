import { SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Medal, Target } from "lucide-react";

const Rankings = () => {
  const rankings = [
    {
      position: 1,
      team: "Senior Men",
      points: 45,
      matches: 15,
      wins: 14,
      draws: 3,
      losses: 0,
    },
    {
      position: 2,
      team: "Senior Women",
      points: 38,
      matches: 15,
      wins: 12,
      draws: 2,
      losses: 1,
    },
    {
      position: 3,
      team: "U21 Men",
      points: 32,
      matches: 14,
      wins: 10,
      draws: 2,
      losses: 2,
    },
    {
      position: 4,
      team: "U19 Women",
      points: 28,
      matches: 14,
      wins: 9,
      draws: 1,
      losses: 4,
    },
    {
      position: 5,
      team: "U17 Mixed",
      points: 24,
      matches: 13,
      wins: 7,
      draws: 3,
      losses: 3,
    },
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-green-50 h-full">
      <DashboardHeader />
      <div className="mb-6">
        <SidebarTrigger className="mb-4" />
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-500" />
            Team Rankings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Position</th>
                  <th className="text-left p-4">Team</th>
                  <th className="text-center p-4">Points</th>
                  <th className="text-center p-4">Matches</th>
                  <th className="text-center p-4">Wins</th>
                  <th className="text-center p-4">Draws</th>
                  <th className="text-center p-4">Losses</th>
                </tr>
              </thead>
              <tbody>
                {rankings.map((team) => (
                  <tr key={team.position} className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        {team.position === 1 && (
                          <Trophy className="w-4 h-4 text-yellow-500" />
                        )}
                        {team.position === 2 && (
                          <Medal className="w-4 h-4 text-gray-400" />
                        )}
                        {team.position === 3 && (
                          <Target className="w-4 h-4 text-amber-600" />
                        )}
                        <span className="font-semibold">{team.position}</span>
                      </div>
                    </td>
                    <td className="p-4 font-medium">{team.team}</td>
                    <td className="p-4 text-center font-bold">{team.points}</td>
                    <td className="p-4 text-center">{team.matches}</td>
                    <td className="p-4 text-center text-green-600">
                      {team.wins}
                    </td>
                    <td className="p-4 text-center text-yellow-600">
                      {team.draws}
                    </td>
                    <td className="p-4 text-center text-red-600">
                      {team.losses}
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
};

export default Rankings;
