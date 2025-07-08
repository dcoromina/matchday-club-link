
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { PageLayout } from "@/components/PageLayout";
import { CoachProfile } from "@/components/CoachProfile";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const CoachDetail = () => {
  const { coachId } = useParams();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1 overflow-auto min-w-0">
          <PageLayout
            title="Coach Profile"
            subtitle="View and manage coach details and playbook"
            actions={
              <Link to="/coaches">
                <Button variant="outline">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Coaches
                </Button>
              </Link>
            }
          >
            <CoachProfile coachId={coachId} />
          </PageLayout>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default CoachDetail;
