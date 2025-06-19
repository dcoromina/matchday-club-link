
import { SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardHeader } from "./DashboardHeader";
import { StatsCards } from "./StatsCards";
import { DashboardTeamsOverview } from "./DashboardTeamsOverview";
import { RecentMatches } from "./RecentMatches";
import { UpcomingEvents } from "./UpcomingEvents";
import { TrainingCourtsOverview } from "./TrainingCourtsOverview";

export function DashboardContent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-200/50 shadow-sm">
        <div className="px-6 py-4">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="text-gray-600 hover:text-gray-900" />
            <div className="h-6 w-px bg-gray-300" />
            <h1 className="text-xl font-semibold text-gray-900">Dashboard Overview</h1>
          </div>
        </div>
      </div>
      
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header Section */}
          <div className="mb-8">
            <DashboardHeader />
          </div>

          {/* Key Metrics */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Key Metrics</h2>
              <div className="text-sm text-gray-500">Real-time updates</div>
            </div>
            <StatsCards />
          </section>

          {/* Training Courts Section */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Training Facilities</h2>
              <div className="text-sm text-gray-500">Live status</div>
            </div>
            <TrainingCourtsOverview />
          </section>

          {/* Teams and Matches Grid */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Teams & Performance</h2>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700">Team Overview</h3>
                <DashboardTeamsOverview />
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700">Recent Results</h3>
                <RecentMatches />
              </div>
            </div>
          </section>

          {/* Upcoming Events Section */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Upcoming Events</h2>
              <div className="text-sm text-gray-500">Next 7 days</div>
            </div>
            <UpcomingEvents />
          </section>
        </div>
      </div>
    </div>
  );
}
