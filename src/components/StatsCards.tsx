
import { Users, Calendar, Trophy, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  {
    title: "Total Players",
    value: "156",
    change: "+12%",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Active Teams",
    value: "8",
    change: "+2",
    icon: Users,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Matches This Month",
    value: "24",
    change: "+8%",
    icon: Calendar,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    title: "Championships Won",
    value: "3",
    change: "+1",
    icon: Trophy,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="border-blue-100 hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              {stat.title}
            </CardTitle>
            <div className={`p-2 rounded-lg ${stat.bgColor}`}>
              <stat.icon className={`w-4 h-4 ${stat.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <div className="flex items-center gap-1 mt-1">
              <TrendingUp className="w-3 h-3 text-green-500" />
              <span className="text-xs text-green-600">{stat.change} from last month</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
