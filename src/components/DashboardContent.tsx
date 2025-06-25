
import { DashboardHeader } from "./DashboardHeader";
import { StatsCards } from "./StatsCards";
import { DashboardTeamsOverview } from "./DashboardTeamsOverview";
import { RecentMatches } from "./RecentMatches";
import { UpcomingEvents } from "./UpcomingEvents";
import { TrainingCourtsOverview } from "./TrainingCourtsOverview";
import { QuickActions } from "./QuickActions";
import { ActivityFeed } from "./ActivityFeed";
import { MainNavbar } from "./MainNavbar";

export function DashboardContent() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Navbar with Search, Notifications, and Dynamic Stats */}
      <MainNavbar />
      
      {/* Header with Quick Actions */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="min-w-0">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600 mt-1 text-sm sm:text-base">Welcome back! Here's what's happening with your sports club.</p>
            </div>
            <div className="flex-shrink-0">
              <QuickActions />
            </div>
          </div>
        </div>
      </div>
      
      <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
          {/* Welcome Section */}
          <div className="mb-6 sm:mb-8">
            <DashboardHeader />
          </div>

          {/* Key Metrics with improved layout */}
          <section>
            <div className="mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Overview</h2>
              <p className="text-gray-600 text-sm">Key performance indicators for your club</p>
            </div>
            <StatsCards />
          </section>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8">
            {/* Left Column */}
            <div className="xl:col-span-2 space-y-6 sm:space-y-8">
              {/* Training Facilities */}
              <section>
                <div className="mb-4 sm:mb-6">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Training Facilities</h2>
                  <p className="text-gray-600 text-sm">Current status of all training courts</p>
                </div>
                <TrainingCourtsOverview />
              </section>

              {/* Teams and Performance */}
              <section>
                <div className="mb-4 sm:mb-6">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Teams & Performance</h2>
                  <p className="text-gray-600 text-sm">Team overview and recent match results</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  <DashboardTeamsOverview />
                  <RecentMatches />
                </div>
              </section>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6 sm:space-y-8">
              {/* Upcoming Events */}
              <section>
                <div className="mb-4">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">Upcoming Events</h3>
                  <p className="text-gray-600 text-sm">Next 7 days</p>
                </div>
                <UpcomingEvents />
              </section>

              {/* Activity Feed */}
              <section>
                <div className="mb-4">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">Recent Activity</h3>
                  <p className="text-gray-600 text-sm">Latest updates and notifications</p>
                </div>
                <ActivityFeed />
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
