
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Users, MapPin, Plus, CheckCircle, Building } from "lucide-react";
import { useState } from "react";

const courts = [
  { id: "court-a", name: "Training Ground A", type: "Football", capacity: 30 },
  { id: "court-b", name: "Training Ground B", type: "Football", capacity: 25 },
  { id: "court-c", name: "Basketball Court 1", type: "Basketball", capacity: 20 },
  { id: "court-d", name: "Basketball Court 2", type: "Basketball", capacity: 20 },
  { id: "court-e", name: "Multi-Purpose Court", type: "Multi-Sport", capacity: 35 },
];

const trainingSessions = [
  {
    id: 1,
    team: "Senior Men Football",
    date: "2024-06-10",
    time: "18:00",
    duration: "90 min",
    venue: "Training Ground A",
    courtId: "court-a",
    type: "Fitness & Tactics",
    coach: "John Doe",
    attendance: 18,
    totalPlayers: 25,
    status: "scheduled",
  },
  {
    id: 2,
    team: "Senior Women Football",
    date: "2024-06-10",
    time: "19:30",
    duration: "90 min",
    venue: "Training Ground B",
    courtId: "court-b",
    type: "Technical Skills",
    coach: "Sarah Connor",
    attendance: 20,
    totalPlayers: 22,
    status: "completed",
  },
  {
    id: 3,
    team: "U21 Men Football",
    date: "2024-06-11",
    time: "17:00",
    duration: "75 min",
    venue: "Training Ground A",
    courtId: "court-a",
    type: "Match Preparation",
    coach: "Mike Smith",
    attendance: 0,
    totalPlayers: 20,
    status: "scheduled",
  },
];

export function TrainingManagement() {
  const [selectedCourt, setSelectedCourt] = useState<string>("");
  const [editingSession, setEditingSession] = useState<number | null>(null);

  const handleCourtChange = (sessionId: number, courtId: string) => {
    console.log(`Assigning session ${sessionId} to court ${courtId}`);
    setEditingSession(null);
  };

  const getCourtById = (courtId: string) => {
    return courts.find(court => court.id === courtId);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Training Sessions</h2>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Schedule Session
        </Button>
      </div>

      {/* Court Overview */}
      <Card className="border-blue-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building className="w-5 h-5 text-blue-600" />
            Available Courts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {courts.map((court) => (
              <div key={court.id} className="p-3 bg-gray-50 rounded-lg text-center">
                <div className="font-medium text-gray-900">{court.name}</div>
                <div className="text-sm text-gray-600">{court.type}</div>
                <div className="text-xs text-gray-500">Capacity: {court.capacity}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Training Sessions List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {trainingSessions.map((session) => {
          const assignedCourt = getCourtById(session.courtId);
          return (
            <Card key={session.id} className="border-blue-100 hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{session.team}</CardTitle>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{session.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{session.time} ({session.duration})</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant={session.status === "completed" ? "default" : "secondary"}>
                    {session.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <Building className="w-3 h-3" />
                        <span>Court Assignment</span>
                      </div>
                      {editingSession === session.id ? (
                        <Select 
                          value={session.courtId} 
                          onValueChange={(value) => handleCourtChange(session.id, value)}
                        >
                          <SelectTrigger className="w-full mt-1">
                            <SelectValue placeholder="Select a court" />
                          </SelectTrigger>
                          <SelectContent>
                            {courts.map((court) => (
                              <SelectItem key={court.id} value={court.id}>
                                {court.name} ({court.type})
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      ) : (
                        <div className="font-medium">
                          {assignedCourt ? assignedCourt.name : "Not assigned"}
                          {assignedCourt && (
                            <div className="text-xs text-gray-500">
                              {assignedCourt.type} • Capacity: {assignedCourt.capacity}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <MapPin className="w-3 h-3" />
                        <span>Venue</span>
                      </div>
                      <div className="font-medium">{session.venue}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Training Type</div>
                      <div className="font-medium">{session.type}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Coach</div>
                      <div className="font-medium">{session.coach}</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <Users className="w-3 h-3" />
                        <span>Attendance</span>
                      </div>
                      <div className="font-medium">
                        {session.attendance}/{session.totalPlayers}
                        {session.status === "completed" && (
                          <span className="ml-2 text-green-600">
                            ({Math.round((session.attendance / session.totalPlayers) * 100)}%)
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    {session.status === "scheduled" ? (
                      <>
                        <Button variant="outline" size="sm">
                          Take Attendance
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setEditingSession(editingSession === session.id ? null : session.id)}
                        >
                          {editingSession === session.id ? "Cancel" : "Change Court"}
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button variant="outline" size="sm">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          View Report
                        </Button>
                        <Button variant="outline" size="sm">
                          View Attendance
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Training Statistics */}
      <Card className="border-blue-100">
        <CardHeader>
          <CardTitle>Training Statistics - This Week</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">8</div>
              <div className="text-sm text-gray-600">Total Sessions</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">6</div>
              <div className="text-sm text-gray-600">Completed</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">85%</div>
              <div className="text-sm text-gray-600">Avg Attendance</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">12</div>
              <div className="text-sm text-gray-600">Hours Trained</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
