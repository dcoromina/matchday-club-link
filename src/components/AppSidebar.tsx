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
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSidebar } from "@/components/ui/sidebar";

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
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const { isOpen, onOpen, onClose } = useSidebar();
  const location = useLocation();

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <LayoutDashboard className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:w-64 border-r pr-0">
        <SheetHeader className="pl-6 pb-10 pt-8">
          <SheetTitle>SportClub Pro</SheetTitle>
          <SheetDescription>
            Manage everything related to your sports club from one place.
          </SheetDescription>
        </SheetHeader>
        <Separator />
        <div className="flex flex-col space-y-1 py-4">
          {navigationItems.map((item) => (
            <NavLink
              key={item.url}
              to={item.url}
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-2 text-sm font-medium rounded-md transition-colors hover:bg-gray-100 ${
                  isActive
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-500 hover:text-gray-900"
                }`
              }
            >
              <item.icon className="w-4 h-4" />
              {item.title}
            </NavLink>
          ))}
        </div>
        <Separator />
        <div className="mt-auto mb-4 px-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Avatar className="w-6 h-6">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
                <span className="truncate">shadcn</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" forceMount>
              <DropdownMenuItem>
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Log out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </SheetContent>
    </Sheet>
  );
}
