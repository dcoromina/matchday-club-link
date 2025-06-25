
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface Event {
  id: number;
  title: string;
  type: string;
  date: string;
  time: string;
  location: string;
  capacity: number;
  registered: number;
  status: string;
}

interface EventCalendarProps {
  events: Event[];
}

export function EventCalendar({ events }: EventCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  // Get events for selected date
  const getEventsForDate = (date: Date) => {
    const dateString = date.toISOString().split('T')[0];
    return events.filter(event => event.date === dateString);
  };

  const selectedDateEvents = selectedDate ? getEventsForDate(selectedDate) : [];

  // Mark dates that have events
  const eventDates = events.map(event => new Date(event.date));

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "match": return "bg-blue-100 text-blue-800";
      case "tournament": return "bg-purple-100 text-purple-800";
      case "training": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Event Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              modifiers={{
                hasEvent: eventDates
              }}
              modifiersStyles={{
                hasEvent: { 
                  backgroundColor: '#dbeafe', 
                  color: '#1e40af',
                  fontWeight: 'bold'
                }
              }}
              className="rounded-md border"
            />
          </CardContent>
        </Card>
      </div>
      
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>
              Events for {selectedDate ? selectedDate.toLocaleDateString() : 'Selected Date'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {selectedDateEvents.length > 0 ? (
              <div className="space-y-3">
                {selectedDateEvents.map((event) => (
                  <div key={event.id} className="p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium">{event.title}</h4>
                      <Badge className={getEventTypeColor(event.type)}>
                        {event.type}
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>⏰ {event.time}</p>
                      <p>📍 {event.location}</p>
                      <p>👥 {event.registered}/{event.capacity} registered</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-4">
                No events scheduled for this date
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
