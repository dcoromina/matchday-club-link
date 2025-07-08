
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { PageLayout } from "@/components/PageLayout";
import { CoachesOverview } from "@/components/CoachesOverview";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import { useState } from "react";
import { CoachRegistrationModal } from "@/components/CoachRegistrationModal";

const Coaches = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1 overflow-auto min-w-0">
          <PageLayout
            title="Coaches"
            subtitle="Manage coaches, assign teams, and track performance"
            actions={
              <Button 
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <UserPlus className="w-4 h-4 mr-2" />
                Add Coach
              </Button>
            }
          >
            <CoachesOverview />
            <CoachRegistrationModal 
              isOpen={isModalOpen} 
              onClose={() => setIsModalOpen(false)} 
            />
          </PageLayout>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Coaches;
