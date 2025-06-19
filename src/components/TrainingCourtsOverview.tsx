
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Clock, Users } from "lucide-react";

const courts = [
  { 
    id: "court-a", 
    name: "Training Ground A", 
    type: "Football", 
    capacity: 30,
    currentSession: {
      team: "Senior Men Football",
      time: "18:00 - 19:30",
      coach: "John Doe"
    }
  },
  { 
    id: "court-b", 
    name: "Training Ground B", 
    type: "Football", 
    capacity: 25,
    currentSession: {
      team: "Senior Women Football",
      time: "19:30 - 21:00",
      coach: "Sarah Connor"
    }
  },
  { 
    id: "court-c", 
    name: "Basketball Court 1", 
    type: "Basketball", 
    capacity: 20,
    currentSession: null
  },
  { 
    id: "court-d", 
    name: "Basketball Court 2", 
    type: "Basketball", 
    capacity: 20,
    currentSession: null
  },
  { 
    id: "court-e", 
    name: "Multi-Purpose Court", 
    type: "Multi-Sport", 
    capacity: 35,
    currentSession: {
      team: "U21 Men Football",
      time: "17:00 - 18:15",
      coach: "Mike Smith"
    }
  },
];

export function TrainingCourtsOverview() {
  const activeCourts = courts.filter(court => court.currentSession);
  const availableCourts = courts.filter(court => !court.currentSession);

  return (
    <Card className="border-blue-100">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Building className="w-5 h-5 text-blue-600" />
          Training Courts Overview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Active Courts */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Currently In Use</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {activeCourts.map((court) => (
                <div key={court.id} className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium text-gray-900">{court.name}</h4>
                      <p className="text-sm text-gray-600">{court.type}</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">In Use</Badge>
                  </div>
                  {court.currentSession && (
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center gap-1 text-blue-600">
                        <Users className="w-3 h-3" />
                        <span>{court.currentSession.team}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <Clock className="w-3 h-3" />
                        <span>{court.currentSession.time}</span>
                      </div>
                      <div className="text-gray-600">
                        Coach: {court.currentSession.coach}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Available Courts */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Available Courts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {availableCourts.map((court) => (
                <div key={court.id} className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium text-gray-900">{court.name}</h4>
                      <p className="text-sm text-gray-600">{court.type}</p>
                    </div>
                    <Badge variant="secondary">Available</Badge>
                  </div>
                  <div className="text-sm text-gray-600">
                    Capacity: {court.capacity} players
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{courts.length}</div>
              <div className="text-sm text-gray-600">Total Courts</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{activeCourts.length}</div>
              <div className="text-sm text-gray-600">In Use</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-600">{availableCourts.length}</div>
              <div className="text-sm text-gray-600">Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {Math.round((activeCourts.length / courts.length) * 100)}%
              </div>
              <div className="text-sm text-gray-600">Utilization</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
