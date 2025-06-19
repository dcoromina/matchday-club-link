
import { Users, Calendar, Trophy, TrendingUp, DollarSign, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  {
    title: "Total Players",
    value: "156",
    change: "+12%",
    changeType: "increase",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    description: "Active members"
  },
  {
    title: "Active Teams",
    value: "8",
    change: "+2",
    changeType: "increase",
    icon: Users,
    color: "text-green-600",
    bgColor: "bg-green-50",
    description: "Across all sports"
  },
  {
    title: "Matches This Month",
    value: "24",
    change: "+8%",
    changeType: "increase",
    icon: Calendar,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    description: "Scheduled games"
  },
  {
    title: "Win Rate",
    value: "78%",
    change: "+5%",
    changeType: "increase",
    icon: Target,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    description: "Overall performance"
  },
  {
    title: "Revenue",
    value: "$12,450",
    change: "+15%",
    changeType: "increase",
    icon: DollarSign,
    color: "text-green-600",
    bgColor: "bg-green-50",
    description: "This month"
  },
  {
    title: "Championships",
    value: "3",
    change: "+1",
    changeType: "increase",
    icon: Trophy,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    description: "This season"
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="border-gray-200 hover:shadow-md transition-all duration-200 hover:border-gray-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <div className="space-y-1">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <p className="text-xs text-gray-500">{stat.description}</p>
            </div>
            <div className={`p-2.5 rounded-lg ${stat.bgColor}`}>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="flex items-center gap-1">
                <TrendingUp className={`w-3 h-3 ${stat.changeType === 'increase' ? 'text-green-500' : 'text-red-500'}`} />
                <span className={`text-xs font-medium ${stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change} from last month
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
