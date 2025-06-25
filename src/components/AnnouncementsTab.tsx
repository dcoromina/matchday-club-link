
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { AlertTriangle, Calendar, Edit, Eye, Plus, Trash } from "lucide-react";

export function AnnouncementsTab() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [announcements] = useState([
    {
      id: 1,
      title: "Season Opening Ceremony",
      content: "Join us for the official opening ceremony of the new season on March 15th at 6 PM.",
      priority: "high",
      author: "Admin",
      createdAt: "2024-03-01",
      views: 45,
      status: "published"
    },
    {
      id: 2,
      title: "New Training Schedule",
      content: "Updated training schedules are now available. Please check your team's new timing.",
      priority: "medium",
      author: "Coach Johnson",
      createdAt: "2024-02-28",
      views: 32,
      status: "published"
    },
    {
      id: 3,
      title: "Facility Maintenance Notice",
      content: "Pool will be closed for maintenance from March 5-7. Alternative arrangements available.",
      priority: "high",
      author: "Facilities Team",
      createdAt: "2024-02-25",
      views: 67,
      status: "published"
    }
  ]);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      case "low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityIcon = (priority: string) => {
    if (priority === "high") return <AlertTriangle className="w-4 h-4" />;
    return <Calendar className="w-4 h-4" />;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Recent Announcements</h3>
        <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              New Announcement
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Announcement</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Announcement title" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea id="content" placeholder="Announcement content" rows={4} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="priority">Priority</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="audience">Audience</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select audience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Members</SelectItem>
                      <SelectItem value="players">Players Only</SelectItem>
                      <SelectItem value="coaches">Coaches Only</SelectItem>
                      <SelectItem value="staff">Staff Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsCreateModalOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setIsCreateModalOpen(false)}>
                  Publish
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {announcements.map((announcement) => (
          <Card key={announcement.id} className="hover:shadow-md transition-all">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {getPriorityIcon(announcement.priority)}
                    <CardTitle className="text-lg">{announcement.title}</CardTitle>
                    <Badge className={getPriorityColor(announcement.priority)}>
                      {announcement.priority}
                    </Badge>
                  </div>
                  <p className="text-gray-600">{announcement.content}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  <span>By {announcement.author} • {announcement.createdAt}</span>
                  <span className="ml-4 flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {announcement.views} views
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Edit className="w-3 h-3" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Trash className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
