
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, 
  Users, 
  Calendar, 
  AlertCircle,
  CheckCircle,
  Clock
} from "lucide-react";

const activities = [
  {
    id: 1,
    type: "match",
    title: "Senior Men won against City United",
    description: "Final score: 3-2",
    time: "2 hours ago",
    icon: Trophy,
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    id: 2,
    type: "training",
    title: "U21 Training completed",
    description: "20 players attended",
    time: "4 hours ago",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    id: 3,
    type: "event",
    title: "New match scheduled",
    description: "vs Athletic Club on June 9th",
    time: "6 hours ago",
    icon: Calendar,
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    id: 4,
    type: "maintenance",
    title: "Court 2 maintenance completed",
    description: "Now available for training",
    time: "1 day ago",
    icon: CheckCircle,
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    id: 5,
    type: "alert",
    title: "Low attendance alert",
    description: "U16 Girls team needs attention",
    time: "2 days ago",
    icon: AlertCircle,
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  }
];

export function ActivityFeed() {
  return (
    <Card className="border-gray-200">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Clock className="w-5 h-5 text-gray-600" />
          Activity Feed
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div className={`p-2 rounded-lg ${activity.bgColor}`}>
                <activity.icon className={`w-4 h-4 ${activity.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm text-gray-900 leading-tight">
                  {activity.title}
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  {activity.description}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
