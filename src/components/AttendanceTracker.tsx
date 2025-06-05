
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { UserCheck, UserX, Calendar, Users } from "lucide-react";

const sessions = [
  {
    id: 1,
    type: "Training",
    team: "Senior Men",
    date: "2024-06-05",
    time: "18:30",
    attendees: 23,
    totalPlayers: 25,
    status: "completed"
  },
  {
    id: 2,
    type: "Match",
    team: "Senior Women",
    date: "2024-06-04",
    time: "19:00",
    attendees: 20,
    totalPlayers: 22,
    status: "completed"
  },
  {
    id: 3,
    type: "Training",
    team: "U21 Men",
    date: "2024-06-06",
    time: "17:00",
    attendees: 18,
    totalPlayers: 20,
    status: "upcoming"
  },
];

const playerAttendance = [
  { name: "John Smith", team: "Senior Men", present: 18, total: 20, percentage: 90 },
  { name: "Sarah Wilson", team: "Senior Women", present: 19, total: 20, percentage: 95 },
  { name: "Mike Johnson", team: "Senior Men", present: 15, total: 20, percentage: 75 },
  { name: "Emma Davis", team: "Senior Women", present: 20, total: 20, percentage: 100 },
];

export function AttendanceTracker() {
  const getAttendanceColor = (percentage: number) => {
    if (percentage >= 90) return "text-green-600";
    if (percentage >= 75) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Attendance Tracking</h2>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <UserCheck className="w-4 h-4 mr-2" />
          Mark Attendance
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-blue-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              Recent Sessions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sessions.map((session) => (
                <div key={session.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">{session.team} - {session.type}</h4>
                      <p className="text-sm text-gray-600">{session.date} at {session.time}</p>
                    </div>
                    <Badge variant={session.status === "completed" ? "default" : "secondary"}>
                      {session.status}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 text-green-600">
                        <UserCheck className="w-4 h-4" />
                        <span className="font-medium">{session.attendees}</span>
                      </div>
                      <div className="flex items-center gap-1 text-red-600">
                        <UserX className="w-4 h-4" />
                        <span className="font-medium">{session.totalPlayers - session.attendees}</span>
                      </div>
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      {Math.round((session.attendees / session.totalPlayers) * 100)}% attendance
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              Player Attendance Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {playerAttendance.map((player, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {player.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{player.name}</div>
                      <div className="text-sm text-gray-600">{player.team}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-lg font-bold ${getAttendanceColor(player.percentage)}`}>
                      {player.percentage}%
                    </div>
                    <div className="text-sm text-gray-600">
                      {player.present}/{player.total} sessions
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
