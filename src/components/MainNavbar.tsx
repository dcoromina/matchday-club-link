
import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLocation } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

// Stats data for different pages
const pageStats = {
  "/": [
    { label: "5 Teams Active", sublabel: "Training today", color: "bg-green-100", dotColor: "bg-green-500" },
    { label: "3 Matches", sublabel: "This week", color: "bg-blue-100", iconColor: "text-blue-600" },
    { label: "85% Attendance", sublabel: "This month", color: "bg-green-100", iconColor: "text-green-600" },
    { label: "2 Courts", sublabel: "Under maintenance", color: "bg-orange-100", iconColor: "text-orange-600" }
  ],
  "/teams": [
    { label: "8 Active Teams", sublabel: "Across all sports", color: "bg-blue-100", dotColor: "bg-blue-500" },
    { label: "156 Players", sublabel: "Total registered", color: "bg-green-100", dotColor: "bg-green-500" },
    { label: "12 New Members", sublabel: "This month", color: "bg-purple-100", dotColor: "bg-purple-500" },
    { label: "3 Teams", sublabel: "Need attention", color: "bg-orange-100", dotColor: "bg-orange-500" }
  ],
  "/matches": [
    { label: "24 Matches", sublabel: "This month", color: "bg-blue-100", dotColor: "bg-blue-500" },
    { label: "78% Win Rate", sublabel: "Overall", color: "bg-green-100", dotColor: "bg-green-500" },
    { label: "5 Upcoming", sublabel: "Next 7 days", color: "bg-purple-100", dotColor: "bg-purple-500" },
    { label: "2 Postponed", sublabel: "Weather issues", color: "bg-orange-100", dotColor: "bg-orange-500" }
  ],
  "/events": [
    { label: "12 Events", sublabel: "This month", color: "bg-purple-100", dotColor: "bg-purple-500" },
    { label: "234 Registrations", sublabel: "Total participants", color: "bg-green-100", dotColor: "bg-green-500" },
    { label: "3 Upcoming", sublabel: "Next 3 days", color: "bg-blue-100", dotColor: "bg-blue-500" },
    { label: "89% Attendance", sublabel: "Average rate", color: "bg-green-100", dotColor: "bg-green-500" }
  ],
  "/facilities": [
    { label: "6 Facilities", sublabel: "Available", color: "bg-green-100", dotColor: "bg-green-500" },
    { label: "18 Bookings", sublabel: "Today", color: "bg-blue-100", dotColor: "bg-blue-500" },
    { label: "$1,280", sublabel: "Revenue today", color: "bg-green-100", dotColor: "bg-green-500" },
    { label: "1 Maintenance", sublabel: "Scheduled", color: "bg-orange-100", dotColor: "bg-orange-500" }
  ],
  "/communications": [
    { label: "12 Announcements", sublabel: "Active", color: "bg-blue-100", dotColor: "bg-blue-500" },
    { label: "45 Messages", sublabel: "Today", color: "bg-green-100", dotColor: "bg-green-500" },
    { label: "8 Notifications", sublabel: "Unread", color: "bg-orange-100", dotColor: "bg-orange-500" },
    { label: "156 Members", sublabel: "Can receive updates", color: "bg-purple-100", dotColor: "bg-purple-500" }
  ],
  "/rankings": [
    { label: "3 Championships", sublabel: "This season", color: "bg-yellow-100", dotColor: "bg-yellow-500" },
    { label: "Top 5", sublabel: "League position", color: "bg-green-100", dotColor: "bg-green-500" },
    { label: "85 Points", sublabel: "Total earned", color: "bg-blue-100", dotColor: "bg-blue-500" },
    { label: "12 Matches", sublabel: "Remaining", color: "bg-purple-100", dotColor: "bg-purple-500" }
  ],
  "/attendance": [
    { label: "85% Average", sublabel: "Attendance rate", color: "bg-green-100", dotColor: "bg-green-500" },
    { label: "142 Present", sublabel: "Today", color: "bg-blue-100", dotColor: "bg-blue-500" },
    { label: "14 Absent", sublabel: "Today", color: "bg-orange-100", dotColor: "bg-orange-500" },
    { label: "5 Teams", sublabel: "Perfect attendance", color: "bg-green-100", dotColor: "bg-green-500" }
  ],
  "/stats": [
    { label: "1,247 Games", sublabel: "Total played", color: "bg-blue-100", dotColor: "bg-blue-500" },
    { label: "892 Goals", sublabel: "Season total", color: "bg-green-100", dotColor: "bg-green-500" },
    { label: "78% Win Rate", sublabel: "Home games", color: "bg-purple-100", dotColor: "bg-purple-500" },
    { label: "156 Players", sublabel: "Statistical data", color: "bg-orange-100", dotColor: "bg-orange-500" }
  ],
  "/financial": [
    { label: "$12,450", sublabel: "Monthly revenue", color: "bg-green-100", dotColor: "bg-green-500" },
    { label: "$8,320", sublabel: "Expenses", color: "bg-orange-100", dotColor: "bg-orange-500" },
    { label: "$4,130", sublabel: "Net profit", color: "bg-blue-100", dotColor: "bg-blue-500" },
    { label: "5 Pending", sublabel: "Payments", color: "bg-yellow-100", dotColor: "bg-yellow-500" }
  ],
  "/settings": [
    { label: "8 Integrations", sublabel: "Active", color: "bg-blue-100", dotColor: "bg-blue-500" },
    { label: "5 Users", sublabel: "Admin access", color: "bg-green-100", dotColor: "bg-green-500" },
    { label: "12 Backups", sublabel: "Completed", color: "bg-purple-100", dotColor: "bg-purple-500" },
    { label: "2 Updates", sublabel: "Available", color: "bg-orange-100", dotColor: "bg-orange-500" }
  ]
};

export function MainNavbar() {
  const location = useLocation();
  const currentStats = pageStats[location.pathname as keyof typeof pageStats] || pageStats["/"];

  return (
    <div className="bg-white border-b border-gray-200 shadow-sm">
      {/* Search and Notifications Bar */}
      <div className="px-6 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="Search teams, players, events..." 
                className="pl-10 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative text-gray-600 hover:text-gray-900 hover:bg-gray-100">
              <Bell className="w-5 h-5" />
              <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 bg-red-500 text-white text-xs flex items-center justify-center">
                3
              </Badge>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Dynamic Stats Bar */}
      <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
          {currentStats.map((stat, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${stat.color}`}>
                <div className={`w-2 h-2 rounded-full ${stat.dotColor}`}></div>
              </div>
              <div>
                <p className="font-semibold text-gray-900">{stat.label}</p>
                <p className="text-gray-600 text-xs">{stat.sublabel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
