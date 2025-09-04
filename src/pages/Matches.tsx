import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { MatchManagement } from "@/components/MatchManagement";

const Matches = () => {
  return (
<<<<<<< HEAD
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-blue-50 to-green-50">
        <AppSidebar />
        <SidebarInset>
          <div className="p-6">
            <DashboardHeader />
            <div className="mb-6">
              <SidebarTrigger className="mb-4" />
            </div>
            <MatchManagement />
          </div>
        </SidebarInset>
=======
    <div className="p-6 bg-gradient-to-br from-blue-50 to-green-50 h-full">
      <DashboardHeader />
      <div className="mb-6">
        <SidebarTrigger className="mb-4" />
>>>>>>> ba7426074f0dc1d0d06aed7cb63608a7c0f3d87e
      </div>
      <MatchManagement />
    </div>
  );
};

export default Matches;
