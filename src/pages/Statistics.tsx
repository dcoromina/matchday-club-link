
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { BarChart3, TrendingUp, Users, Target } from "lucide-react";

const Statistics = () => {
  const matchData = [
    { month: "Jan", wins: 8, losses: 2, draws: 1 },
    { month: "Feb", wins: 6, losses: 3, draws: 2 },
    { month: "Mar", wins: 9, losses: 1, draws: 1 },
    { month: "Apr", wins: 7, losses: 2, draws: 3 },
    { month: "May", wins: 10, losses: 1, draws: 0 },
  ];

  const attendanceData = [
    { team: "Senior Men", attendance: 95 },
    { team: "Senior Women", attendance: 87 },
    { team: "U21", attendance: 78 },
    { team: "U19", attendance: 82 },
    { team: "U17", attendance: 69 },
  ];

  const pieData = [
    { name: "Wins", value: 40, color: "#22c55e" },
    { name: "Draws", value: 7, color: "#eab308" },
    { name: "Losses", value: 9, color: "#ef4444" },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-blue-50 to-green-50">
        <AppSidebar />
        <main className="flex-1 overflow-auto">
          <div className="p-6">
            <DashboardHeader />
            <div className="mb-6">
              <SidebarTrigger className="mb-4" />
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-blue-600" />
                      Monthly Performance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={matchData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="wins" fill="#22c55e" />
                        <Bar dataKey="draws" fill="#eab308" />
                        <Bar dataKey="losses" fill="#ef4444" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-green-600" />
                      Win/Loss Distribution
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          dataKey="value"
                          label={({ name, value }) => `${name}: ${value}`}
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-purple-600" />
                    Team Attendance Rates
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={attendanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="team" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="attendance" stroke="#8b5cf6" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Statistics;
