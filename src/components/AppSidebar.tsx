import {
  Home,
  LayoutDashboard,
  Settings,
  Users,
  Calendar,
  Trophy,
  MapPin,
  UserCheck,
  Medal,
  BarChart3,
  DollarSign,
  MessageSquare,
  User,
  Shield,
  Bell,
  TrendingUp,
  Compass,
} from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";

const navigationItems = [
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
    title: "Coaches", // Added coaches
    url: "/coaches",
    icon: User,
  },
  {
    title: "Matches",
    url: "/matches",
    icon: Trophy,
  },
  {
    title: "Events",
    url: "/events",
    icon: Calendar,
  },
  {
    title: "Facilities",
    url: "/facilities",
    icon: MapPin,
  },
  {
    title: "Attendance",
    url: "/attendance",
    icon: UserCheck,
  },
  {
    title: "Rankings",
    url: "/rankings",
    icon: Medal,
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
    title: "Communications",
    url: "/communications",
    icon: MessageSquare,
  },
  {
    title: "Onboarding",
    url: "/onboarding",
    icon: Compass,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Sidebar side="left" collapsible="icon">
      <SidebarHeader className="px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-blue-600 flex items-center justify-center shadow-sm">
              <Trophy className="h-5 w-5 text-white" />
            </div>
            <div className="leading-tight">
              <div className="font-semibold text-gray-900">SportClub</div>
              <div className="text-xs text-gray-500">Pro Dashboard</div>
            </div>
          </div>
        </div>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-600">
            Main Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => {
                const isActive = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.url}>
                    <NavLink to={item.url} className="block">
                      <SidebarMenuButton
                        isActive={isActive}
                        className="justify-start rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 data-[active=true]:bg-blue-50 data-[active=true]:text-blue-700 data-[active=true]:border data-[active=true]:border-blue-200"
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </NavLink>
                  </SidebarMenuItem>
                );
              })}
              <SidebarMenuItem>
                <button
                  className="w-full text-left"
                  onClick={() => {
                    try {
                      const { signOut } = require("@/lib/auth");
                      signOut();
                    } catch (e) {}
                    navigate("/signin", { replace: true });
                  }}
                >
                  <SidebarMenuButton className="justify-start rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100">
                    <Shield className="h-4 w-4" />
                    <span>Logout</span>
                  </SidebarMenuButton>
                </button>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
