
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, Trophy, Calendar, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const coaches = [
  {
    id: 1,
    name: "John Martinez",
    email: "john.martinez@club.com",
    phone: "+1 (555) 123-4567",
    specialization: "Football",
    experience: "8 years",
    teams: ["Senior Men", "U21 Men"],
    certifications: ["UEFA B", "First Aid"],
    status: "active"
  },
  {
    id: 2,
    name: "Sarah Williams",
    email: "sarah.williams@club.com",
    phone: "+1 (555) 234-5678",
    specialization: "Basketball",
    experience: "5 years",
    teams: ["Senior Women", "U18 Boys"],
    certifications: ["Level 3 Coaching", "Sports Psychology"],
    status: "active"
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike.johnson@club.com",
    phone: "+1 (555) 345-6789",
    specialization: "Tennis",
    experience: "12 years",
    teams: ["Mixed Doubles", "Singles"],
    certifications: ["ITF Level 2", "Fitness Training"],
    status: "active"
  },
  {
    id: 4,
    name: "Emma Davis",
    email: "emma.davis@club.com",
    phone: "+1 (555) 456-7890",
    specialization: "Football",
    experience: "3 years",
    teams: ["Senior Women", "U16 Girls"],
    certifications: ["UEFA C", "Youth Development"],
    status: "inactive"
  }
];

export function CoachesOverview() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">12</p>
                <p className="text-sm text-gray-600">Total Coaches</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-50 rounded-lg">
                <Trophy className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">8</p>
                <p className="text-sm text-gray-600">Active Coaches</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-50 rounded-lg">
                <Calendar className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">24</p>
                <p className="text-sm text-gray-600">Training Sessions</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-50 rounded-lg">
                <Trophy className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">15</p>
                <p className="text-sm text-gray-600">Teams Assigned</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Coaches List */}
      <Card>
        <CardHeader>
          <CardTitle>All Coaches</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {coaches.map((coach) => (
              <div key={coach.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${coach.name}`} />
                      <AvatarFallback>{coach.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{coach.name}</h3>
                      <p className="text-sm text-gray-600">{coach.email}</p>
                      <p className="text-sm text-gray-600">{coach.specialization} • {coach.experience}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                    <div className="flex flex-wrap gap-2">
                      {coach.teams.map((team) => (
                        <Badge key={team} variant="secondary" className="text-xs">
                          {team}
                        </Badge>
                      ))}
                    </div>
                    <Badge 
                      variant={coach.status === "active" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {coach.status}
                    </Badge>
                    <Link to={`/coaches/${coach.id}`}>
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        View Profile
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
