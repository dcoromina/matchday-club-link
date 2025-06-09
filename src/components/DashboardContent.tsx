
import { SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardHeader } from "./DashboardHeader";
import { StatsCards } from "./StatsCards";
import { DashboardTeamsOverview } from "./DashboardTeamsOverview";
import { RecentMatches } from "./RecentMatches";
import { UpcomingEvents } from "./UpcomingEvents";

export function DashboardContent() {
  return (
    <div className="p-6">
      <DashboardHeader />
      <div className="mb-6">
        <SidebarTrigger className="mb-4" />
      </div>
      <div className="space-y-6">
        <StatsCards />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DashboardTeamsOverview />
          <RecentMatches />
        </div>
        <UpcomingEvents />
      </div>
    </div>
  );
}
