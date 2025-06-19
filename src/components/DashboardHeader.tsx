
import { Bell, Search, Calendar, TrendingUp, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export function DashboardHeader() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Main Header */}
      <div className="px-8 py-6 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold">SportClub Pro</h1>
              <Badge className="bg-white/20 text-white border-white/30 px-3 py-1">
                Premium
              </Badge>
            </div>
            <p className="text-blue-100 text-lg leading-relaxed">
              Comprehensive sports management platform for teams, events, and performance tracking
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="Search teams, players, events..." 
                className="pl-10 w-80 bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:bg-white focus:text-gray-900 focus:placeholder:text-gray-500 focus:border-white"
              />
            </div>
            <Button variant="ghost" size="icon" className="relative text-white hover:bg-white/20">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-bold">3</span>
              </span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Stats Bar */}
      <div className="px-8 py-5 bg-gradient-to-r from-gray-50 to-blue-50 border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            <div>
              <p className="font-semibold text-gray-900">5 Teams Active</p>
              <p className="text-gray-600 text-xs">Training today</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Calendar className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">3 Matches</p>
              <p className="text-gray-600 text-xs">This week</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <TrendingUp className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">85% Attendance</p>
              <p className="text-gray-600 text-xs">This month</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-100 rounded-lg">
              <MapPin className="w-4 h-4 text-orange-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">2 Courts</p>
              <p className="text-gray-600 text-xs">Under maintenance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
