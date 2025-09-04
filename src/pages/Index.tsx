<<<<<<< HEAD
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
=======
>>>>>>> ba7426074f0dc1d0d06aed7cb63608a7c0f3d87e
import { DashboardContent } from "@/components/DashboardContent";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";

const Index = () => {
  return (
<<<<<<< HEAD
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <SidebarInset>
          <div className="p-6">
            <div className="mb-4">
              <SidebarTrigger />
            </div>
            <DashboardContent />
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
=======
    <div className="bg-gray-50">
      <DashboardContent />
    </div>
>>>>>>> ba7426074f0dc1d0d06aed7cb63608a7c0f3d87e
  );
};

export default Index;
