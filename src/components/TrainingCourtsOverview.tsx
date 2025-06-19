
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Building, Clock, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const courts = [
  { 
    id: "court-a", 
    name: "Training Ground A", 
    type: "Football", 
    capacity: 30,
    nextPractice: {
      team: "Senior Men Football",
      time: "18:00 - 19:30",
      coach: "John Doe",
      date: "2024-06-19"
    }
  },
  { 
    id: "court-b", 
    name: "Training Ground B", 
    type: "Football", 
    capacity: 25,
    nextPractice: {
      team: "Senior Women Football",
      time: "19:30 - 21:00",
      coach: "Sarah Connor",
      date: "2024-06-19"
    }
  },
  { 
    id: "court-c", 
    name: "Basketball Court 1", 
    type: "Basketball", 
    capacity: 20,
    nextPractice: null
  },
  { 
    id: "court-d", 
    name: "Basketball Court 2", 
    type: "Basketball", 
    capacity: 20,
    nextPractice: {
      team: "Youth Basketball",
      time: "16:00 - 17:30",
      coach: "Alex Johnson",
      date: "2024-06-20"
    }
  },
  { 
    id: "court-e", 
    name: "Multi-Purpose Court", 
    type: "Multi-Sport", 
    capacity: 35,
    nextPractice: {
      team: "U21 Men Football",
      time: "17:00 - 18:15",
      coach: "Mike Smith",
      date: "2024-06-19"
    }
  },
];

// Mock schedule data for the modal
const scheduleData = {
  "2024-06-19": {
    "court-a": [
      { team: "Youth Training", time: "16:00 - 17:00", coach: "Tom Wilson" },
      { team: "Senior Men Football", time: "18:00 - 19:30", coach: "John Doe" },
    ],
    "court-b": [
      { team: "Women's Training", time: "17:00 - 18:30", coach: "Lisa Brown" },
      { team: "Senior Women Football", time: "19:30 - 21:00", coach: "Sarah Connor" },
    ],
    "court-e": [
      { team: "U21 Men Football", time: "17:00 - 18:15", coach: "Mike Smith" },
      { team: "Mixed Training", time: "19:00 - 20:30", coach: "David Lee" },
    ],
  },
  "2024-06-20": {
    "court-d": [
      { team: "Youth Basketball", time: "16:00 - 17:30", coach: "Alex Johnson" },
      { team: "Senior Basketball", time: "18:00 - 19:30", coach: "Mark Davis" },
    ],
    "court-a": [
      { team: "Morning Training", time: "09:00 - 10:30", coach: "John Doe" },
    ],
  },
  "2024-06-21": {
    "court-b": [
      { team: "Weekend Practice", time: "10:00 - 11:30", coach: "Sarah Connor" },
    ],
  },
};

function CourtScheduleModal({ court }: { court: typeof courts[0] }) {
  const [selectedDate, setSelectedDate] = useState("2024-06-19");
  
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const navigateDate = (direction: 'prev' | 'next') => {
    const currentDate = new Date(selectedDate);
    currentDate.setDate(currentDate.getDate() + (direction === 'next' ? 1 : -1));
    setSelectedDate(currentDate.toISOString().split('T')[0]);
  };

  const daySchedule = scheduleData[selectedDate]?.[court.id] || [];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="w-full mt-2">
          View Full Schedule
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Building className="w-5 h-5" />
            {court.name} Schedule
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {/* Date Navigation */}
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigateDate('prev')}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <div className="text-center">
              <div className="font-medium">{formatDate(selectedDate)}</div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigateDate('next')}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Schedule for the day */}
          <div className="space-y-3">
            {daySchedule.length > 0 ? (
              daySchedule.map((session, index) => (
                <div key={index} className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="font-medium text-gray-900">{session.team}</div>
                  <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                    <Clock className="w-3 h-3" />
                    <span>{session.time}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    Coach: {session.coach}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-6 text-gray-500">
                No practices scheduled for this day
              </div>
            )}
          </div>

          {/* Court Info */}
          <div className="pt-3 border-t border-gray-200">
            <div className="text-sm text-gray-600">
              <div><strong>Type:</strong> {court.type}</div>
              <div><strong>Capacity:</strong> {court.capacity} players</div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function TrainingCourtsOverview() {
  const courtsWithPractice = courts.filter(court => court.nextPractice);
  const availableCourts = courts.filter(court => !court.nextPractice);

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
          {/* Courts with Next Practice */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Next Practices</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {courtsWithPractice.map((court) => (
                <div key={court.id} className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium text-gray-900">{court.name}</h4>
                      <p className="text-sm text-gray-600">{court.type}</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Next Practice</Badge>
                  </div>
                  {court.nextPractice && (
                    <div className="space-y-1 text-sm mb-3">
                      <div className="flex items-center gap-1 text-blue-600">
                        <Users className="w-3 h-3" />
                        <span>{court.nextPractice.team}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <Clock className="w-3 h-3" />
                        <span>{court.nextPractice.time}</span>
                      </div>
                      <div className="text-gray-600">
                        Coach: {court.nextPractice.coach}
                      </div>
                    </div>
                  )}
                  <CourtScheduleModal court={court} />
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
                  <div className="text-sm text-gray-600 mb-3">
                    Capacity: {court.capacity} players
                  </div>
                  <CourtScheduleModal court={court} />
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
              <div className="text-2xl font-bold text-green-600">{courtsWithPractice.length}</div>
              <div className="text-sm text-gray-600">With Next Practice</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-600">{availableCourts.length}</div>
              <div className="text-sm text-gray-600">Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {Math.round((courtsWithPractice.length / courts.length) * 100)}%
              </div>
              <div className="text-sm text-gray-600">Utilization</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
