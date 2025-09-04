import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, MessageSquare, Plus, Send, Users } from "lucide-react";
import { AnnouncementsTab } from "@/components/AnnouncementsTab";
import { MessagingTab } from "@/components/MessagingTab";
import { NotificationsTab } from "@/components/NotificationsTab";

const Communications = () => {
  return (
    <>
      <PageLayout
        title="Communications"
        subtitle="Manage announcements, messages, and notifications"
        actions={
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Users className="w-4 h-4 mr-2" />
              Broadcast
            </Button>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              New Message
            </Button>
          </div>
        }
      >
        <div className="space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-blue-600">12</div>
                <p className="text-sm text-gray-600">Active Announcements</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-green-600">45</div>
                <p className="text-sm text-gray-600">Messages Today</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-orange-600">8</div>
                <p className="text-sm text-gray-600">Unread Notifications</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-purple-600">156</div>
                <p className="text-sm text-gray-600">Total Members</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="announcements" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger
                value="announcements"
                className="flex items-center gap-2"
              >
                <Bell className="w-4 h-4" />
                Announcements
              </TabsTrigger>
              <TabsTrigger value="messages" className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Messages
              </TabsTrigger>
              <TabsTrigger
                value="notifications"
                className="flex items-center gap-2"
              >
                <Bell className="w-4 h-4" />
                Notifications
              </TabsTrigger>
            </TabsList>

            <TabsContent value="announcements">
              <AnnouncementsTab />
            </TabsContent>

            <TabsContent value="messages">
              <MessagingTab />
            </TabsContent>

            <TabsContent value="notifications">
              <NotificationsTab />
            </TabsContent>
          </Tabs>
        </div>
      </PageLayout>
    </>
  );
};

export default Communications;
