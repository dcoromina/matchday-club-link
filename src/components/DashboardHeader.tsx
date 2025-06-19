
import { Bell, Search, Calendar, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export function DashboardHeader() {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200/50 overflow-hidden">
      {/* Main Header */}
      <div className="px-8 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold">Welcome back to SportClub Pro</h1>
              <Badge className="bg-white/20 text-white border-white/30">
                Premium
              </Badge>
            </div>
            <p className="text-blue-100 text-lg">
              Manage your teams, track performance, and organize events all in one place
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="Search teams, players, events..." 
                className="pl-10 w-80 bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:bg-white focus:text-gray-900 focus:placeholder:text-gray-500"
              />
            </div>
            <Button variant="ghost" size="icon" className="relative text-white hover:bg-white/20">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-bold">3</span>
              </span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Quick Stats Bar */}
      <div className="px-8 py-4 bg-gray-50 border-t border-gray-200">
        <div className="flex flex-wrap items-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-600">5 teams training today</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-blue-600" />
            <span className="text-gray-600">3 matches this week</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-green-600" />
            <span className="text-gray-600">85% attendance rate</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span className="text-gray-600">2 facilities under maintenance</span>
          </div>
        </div>
      </div>
    </div>
  );
}
