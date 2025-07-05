import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { MatchManagement } from "@/components/MatchManagement";

const Matches = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-green-50 h-full">
      <DashboardHeader />
      <div className="mb-6">
        <SidebarTrigger className="mb-4" />
      </div>
      <MatchManagement />
    </div>
  );
};

export default Matches;
