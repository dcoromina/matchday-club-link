import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Settings as SettingsIcon,
  Bell,
  Shield,
  User,
  Building,
} from "lucide-react";
import ClubProfile from "@/components/ClubProfile";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-blue-50 to-green-50">
        <AppSidebar />
        <SidebarInset>
          <div className="p-6">
            <DashboardHeader />
            <div className="mb-6">
              <SidebarTrigger className="mb-4" />
            </div>
            <div className="mb-6 flex items-center justify-end">
              <Button onClick={() => navigate("/onboarding")}>
                Open Onboarding
              </Button>
            </div>

            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger
                  value="profile"
                  className="flex items-center gap-2"
                >
                  <Building className="w-4 h-4" />
                  Club Profile
                </TabsTrigger>
                <TabsTrigger
                  value="club-info"
                  className="flex items-center gap-2"
                >
                  <User className="w-4 h-4" />
                  Club Information
                </TabsTrigger>
                <TabsTrigger
                  value="notifications"
                  className="flex items-center gap-2"
                >
                  <Bell className="w-4 h-4" />
                  Notifications
                </TabsTrigger>
                <TabsTrigger
                  value="security"
                  className="flex items-center gap-2"
                >
                  <Shield className="w-4 h-4" />
                  Security
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger
                  value="profile"
                  className="flex items-center gap-2"
                >
                  <Building className="w-4 h-4" />
                  Club Profile
                </TabsTrigger>
                <TabsTrigger
                  value="club-info"
                  className="flex items-center gap-2"
                >
                  <User className="w-4 h-4" />
                  Club Information
                </TabsTrigger>
                <TabsTrigger
                  value="notifications"
                  className="flex items-center gap-2"
                >
                  <Bell className="w-4 h-4" />
                  Notifications
                </TabsTrigger>
                <TabsTrigger
                  value="security"
                  className="flex items-center gap-2"
                >
                  <Shield className="w-4 h-4" />
                  Security
                </TabsTrigger>
              </TabsList>

              <TabsContent value="club-info">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="w-5 h-5 text-blue-600" />
                      Club Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="clubName">Club Name</Label>
                        <Input id="clubName" defaultValue="SportClub Pro" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="clubAddress">Address</Label>
                        <Input
                          id="clubAddress"
                          defaultValue="123 Sports Street"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="clubEmail">Email</Label>
                        <Input
                          id="clubEmail"
                          type="email"
                          defaultValue="info@sportclubpro.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="clubPhone">Phone</Label>
                        <Input id="clubPhone" defaultValue="+1 234 567 8900" />
                      </div>
                    </div>
                    <Button>Save Changes</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notifications">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bell className="w-5 h-5 text-yellow-600" />
                      Notifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="emailNotifs">Email Notifications</Label>
                        <p className="text-sm text-gray-600">
                          Receive match updates via email
                        </p>
                      </div>
                      <Switch id="emailNotifs" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="smsNotifs">SMS Notifications</Label>
                        <p className="text-sm text-gray-600">
                          Receive urgent updates via SMS
                        </p>
                      </div>
                      <Switch id="smsNotifs" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="attendanceAlerts">
                          Attendance Alerts
                        </Label>
                        <p className="text-sm text-gray-600">
                          Get notified about low attendance
                        </p>
                      </div>
                      <Switch id="attendanceAlerts" defaultChecked />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-green-600" />
                      Security
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <Input id="currentPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input id="newPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">
                        Confirm New Password
                      </Label>
                      <Input id="confirmPassword" type="password" />
                    </div>
                    <Button variant="outline">Update Password</Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Settings;
