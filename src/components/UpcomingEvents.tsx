
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

const events = [
  {
    type: "Match",
    title: "Senior Men vs Riverside FC",
    date: "2024-06-08",
    time: "15:00",
    venue: "Home Stadium",
    attendees: 25,
  },
  {
    type: "Training",
    title: "U21 Training Session",
    date: "2024-06-06",
    time: "18:30",
    venue: "Training Ground",
    attendees: 20,
  },
  {
    type: "Match",
    title: "Senior Women vs Athletic Club",
    date: "2024-06-09",
    time: "14:00",
    venue: "Away",
    attendees: 22,
  },
];

export function UpcomingEvents() {
  return (
    <Card className="border-blue-100">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-blue-600" />
          Upcoming Events
        </CardTitle>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {events.map((event, index) => (
            <div key={index} className="p-4 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg border border-blue-100 hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-3">
                <Badge variant="outline" className="text-blue-700 border-blue-300">
                  {event.type}
                </Badge>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <Users className="w-3 h-3" />
                  <span>{event.attendees}</span>
                </div>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{event.title}</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3 h-3" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3 h-3" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3 h-3" />
                  <span>{event.venue}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
