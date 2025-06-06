
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Settings as SettingsIcon, Bell, Shield, User } from "lucide-react";

const Settings = () => {
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
                      <Input id="clubAddress" defaultValue="123 Sports Street" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="clubEmail">Email</Label>
                      <Input id="clubEmail" type="email" defaultValue="info@sportclubpro.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="clubPhone">Phone</Label>
                      <Input id="clubPhone" defaultValue="+1 234 567 8900" />
                    </div>
                  </div>
                  <Button>Save Changes</Button>
                </CardContent>
              </Card>

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
                      <p className="text-sm text-gray-600">Receive match updates via email</p>
                    </div>
                    <Switch id="emailNotifs" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="smsNotifs">SMS Notifications</Label>
                      <p className="text-sm text-gray-600">Receive urgent updates via SMS</p>
                    </div>
                    <Switch id="smsNotifs" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="attendanceAlerts">Attendance Alerts</Label>
                      <p className="text-sm text-gray-600">Get notified about low attendance</p>
                    </div>
                    <Switch id="attendanceAlerts" defaultChecked />
                  </div>
                </CardContent>
              </Card>

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
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                  <Button variant="outline">Update Password</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Settings;
