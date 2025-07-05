import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { FinancialOverview } from "@/components/FinancialOverview";
import { ExpenseTracker } from "@/components/ExpenseTracker";
import { RevenueTracker } from "@/components/RevenueTracker";
import { FinancialReports } from "@/components/FinancialReports";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Financial = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-green-50 h-full">
      <DashboardHeader />
      <div className="mb-6">
        <SidebarTrigger className="mb-4" />
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Financial Management
        </h1>
        <p className="text-gray-600">
          Track expenses, revenue, and financial performance
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <FinancialOverview />
        </TabsContent>

        <TabsContent value="expenses">
          <ExpenseTracker />
        </TabsContent>

        <TabsContent value="revenue">
          <RevenueTracker />
        </TabsContent>

        <TabsContent value="reports">
          <FinancialReports />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Financial;
