import { useState } from "react";
import {
  AlignJustify,
  Bell,
  Calendar,
  DollarSign,
  Home,
  ListChecks,
  MapPin,
  MessageSquare,
  Search,
  Settings,
  Shield,
  Target,
  TrendingUp,
  Trophy,
  User,
  UserCheck,
  Users,
  BarChart3,
  Medal,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLocation } from "react-router-dom";

const getPageStats = (pathname: string) => {
  switch (pathname) {
    case "/":
      return [
        { label: "Active Teams", value: "8", icon: Users },
        { label: "Total Players", value: "156", icon: UserCheck },
        { label: "This Month Matches", value: "24", icon: Trophy },
        { label: "Win Rate", value: "78%", icon: Target },
      ];
    case "/teams":
      return [
        { label: "Active Teams", value: "8", icon: Users },
        { label: "Total Players", value: "156", icon: UserCheck },
        { label: "Training Sessions", value: "32", icon: Calendar },
        { label: "Avg Performance", value: "85%", icon: TrendingUp },
      ];
    case "/coaches": // Added coach stats
      return [
        { label: "Total Coaches", value: "12", icon: Users },
        { label: "Active Coaches", value: "8", icon: UserCheck },
        { label: "Training Sessions", value: "24", icon: Calendar },
        { label: "Teams Assigned", value: "15", icon: Trophy },
      ];
    case "/matches":
      return [
        { label: "This Month", value: "24", icon: Calendar },
        { label: "Win Rate", value: "78%", icon: Trophy },
        { label: "Goals Scored", value: "142", icon: Target },
        { label: "Clean Sheets", value: "8", icon: Shield },
      ];
    case "/events":
      return [
        { label: "Upcoming Events", value: "12", icon: Calendar },
        { label: "This Month", value: "8", icon: Trophy },
        { label: "Registered", value: "156", icon: Users },
        { label: "Attendance Rate", value: "89%", icon: TrendingUp },
      ];
    case "/facilities":
      return [
        { label: "Total Facilities", value: "6", icon: MapPin },
        { label: "Active Bookings", value: "24", icon: Calendar },
        { label: "Utilization Rate", value: "78%", icon: TrendingUp },
        { label: "Revenue", value: "$2.4K", icon: DollarSign },
      ];
    case "/communications":
      return [
        { label: "Active Members", value: "156", icon: Users },
        { label: "Announcements", value: "8", icon: Bell },
        { label: "Messages", value: "24", icon: MessageSquare },
        { label: "Engagement", value: "92%", icon: TrendingUp },
      ];
    default:
      return [
        { label: "Active Teams", value: "8", icon: Users },
        { label: "Total Players", value: "156", icon: UserCheck },
        { label: "This Month Matches", value: "24", icon: Trophy },
        { label: "Win Rate", value: "78%", icon: Target },
      ];
  }
};

export function MainNavbar() {
  const location = useLocation();
  const pathname = location.pathname || "/";
  const stats = getPageStats(pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          {/* Left side: Logo & Navigation */}
          <div className="flex items-center">
            <button
              className="text-gray-500 mr-4 lg:hidden"
              aria-label="Open menu"
            >
              <AlignJustify className="w-6 h-6" />
            </button>
            <a className="text-xl font-bold text-gray-900" href="/">
              SportClub Pro
            </a>
          </div>

          {/* Search Bar (always visible) */}
          <div className="hidden md:flex md:items-center md:w-auto md:ml-6">
            <div className="relative w-full sm:max-w-xs">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <Input
                className="block w-full bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 pl-10 p-2.5"
                placeholder="Search..."
              />
            </div>
          </div>

          {/* Right side: Stats & User info */}
          <div className="flex items-center ml-auto">
            {/* Dynamic Stats */}
            <div className="hidden lg:flex items-center gap-4 mr-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-1">
                  <stat.icon className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium text-gray-700">
                    {stat.value} {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* User Dropdown */}
            <div className="relative ml-3">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="Your Avatar"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-64">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-9 w-9">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="Your Avatar"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span className="font-semibold">John Doe</span>
                  </div>
                  <div className="py-4">
                    <Button variant="ghost" className="w-full justify-start">
                      Profile
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      Settings
                    </Button>
                  </div>
                  <Button variant="outline" className="w-full justify-center">
                    Logout
                  </Button>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
