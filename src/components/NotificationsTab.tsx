
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Calendar, Trophy, Users, AlertTriangle, CheckCircle } from "lucide-react";

export function NotificationsTab() {
  const notifications = [
    {
      id: 1,
      type: "event",
      title: "Upcoming Match Reminder",
      message: "Senior Men vs Riverside FC tomorrow at 3 PM",
      timestamp: "5 min ago",
      read: false,
      icon: Calendar,
      color: "text-blue-600"
    },
    {
      id: 2,
      type: "achievement",
      title: "Tournament Victory!",
      message: "Congratulations! U21 team won the regional championship",
      timestamp: "1 hour ago",
      read: false,
      icon: Trophy,
      color: "text-yellow-600"
    },
    {
      id: 3,
      type: "membership",
      title: "New Member Joined",
      message: "Alex Thompson has joined the Senior Men team",
      timestamp: "2 hours ago",
      read: true,
      icon: Users,
      color: "text-green-600"
    },
    {
      id: 4,
      type: "alert",
      title: "Facility Maintenance",
      message: "Swimming pool will be closed for maintenance tomorrow",
      timestamp: "3 hours ago",
      read: true,
      icon: AlertTriangle,
      color: "text-orange-600"
    },
    {
      id: 5,
      type: "system",
      title: "Payment Confirmed",
      message: "Monthly membership fee payment successful",
      timestamp: "1 day ago",
      read: true,
      icon: CheckCircle,
      color: "text-green-600"
    }
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold">Notifications</h3>
          {unreadCount > 0 && (
            <Badge className="bg-red-500 text-white">
              {unreadCount} new
            </Badge>
          )}
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Mark All Read
          </Button>
          <Button variant="outline" size="sm">
            Settings
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        {notifications.map((notification) => {
          const IconComponent = notification.icon;
          return (
            <Card
              key={notification.id}
              className={`hover:shadow-md transition-all cursor-pointer ${
                !notification.read ? 'border-blue-200 bg-blue-50/30' : ''
              }`}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-lg bg-gray-100 ${notification.color}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className={`font-medium ${!notification.read ? 'text-blue-900' : ''}`}>
                          {notification.title}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {notification.message}
                        </p>
                        <p className="text-xs text-gray-400 mt-2">
                          {notification.timestamp}
                        </p>
                      </div>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1"></div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {notifications.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <Bell className="w-12 h-12 mx-auto text-gray-400 mb-4" />
            <h3 className="font-medium text-gray-600 mb-2">No notifications</h3>
            <p className="text-sm text-gray-500">
              You're all caught up! New notifications will appear here.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
