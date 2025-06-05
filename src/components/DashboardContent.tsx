
import { useState } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardHeader } from "./DashboardHeader";
import { StatsCards } from "./StatsCards";
import { TeamsOverview } from "./TeamsOverview";
import { RecentMatches } from "./RecentMatches";
import { UpcomingEvents } from "./UpcomingEvents";
import { TeamDetails } from "./TeamDetails";
import { MatchManagement } from "./MatchManagement";
import { AttendanceTracker } from "./AttendanceTracker";

export function DashboardContent() {
  const [activeSection, setActiveSection] = useState("dashboard");

  const renderContent = () => {
    switch (activeSection) {
      case "teams":
        return <TeamDetails />;
      case "matches":
        return <MatchManagement />;
      case "attendance":
        return <AttendanceTracker />;
      default:
        return (
          <div className="space-y-6">
            <StatsCards />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <TeamsOverview />
              <RecentMatches />
            </div>
            <UpcomingEvents />
          </div>
        );
    }
  };

  return (
    <div className="p-6">
      <DashboardHeader />
      <div className="mb-6">
        <SidebarTrigger className="mb-4" />
      </div>
      {renderContent()}
    </div>
  );
}
