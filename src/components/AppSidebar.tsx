
import { Users, Calendar, Trophy, BarChart3, UserCheck, Settings, Home, DollarSign } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Teams",
    url: "/teams",
    icon: Users,
  },
  {
    title: "Matches",
    url: "/matches",
    icon: Calendar,
  },
  {
    title: "Rankings",
    url: "/rankings",
    icon: Trophy,
  },
  {
    title: "Attendance",
    url: "/attendance",
    icon: UserCheck,
  },
  {
    title: "Statistics",
    url: "/stats",
    icon: BarChart3,
  },
  {
    title: "Financial",
    url: "/financial",
    icon: DollarSign,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar className="border-r border-gray-200 bg-white">
      <SidebarHeader className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <div className="group-data-[collapsible=icon]:hidden">
              <h2 className="text-xl font-bold text-gray-900">SportClub</h2>
              <p className="text-sm text-gray-600">Pro Dashboard</p>
            </div>
          </div>
          <SidebarTrigger className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg p-1.5" />
        </div>
      </SidebarHeader>
      <SidebarContent className="px-4 py-6">
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-700 font-semibold mb-3 px-3">Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className={`rounded-lg transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0 ${
                      location.pathname === item.url 
                        ? 'bg-blue-100 text-blue-700 shadow-sm border border-blue-200' 
                        : 'text-gray-700 hover:shadow-sm'
                    }`}
                    tooltip={item.title}
                  >
                    <Link to={item.url} className="flex items-center gap-3 px-3 py-2.5 group-data-[collapsible=icon]:px-2 group-data-[collapsible=icon]:justify-center">
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      <span className="font-medium group-data-[collapsible=icon]:hidden">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
