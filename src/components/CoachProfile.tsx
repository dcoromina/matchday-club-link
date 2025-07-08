
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlaybookManagement } from "@/components/PlaybookManagement";
import { Phone, Mail, Trophy, Users, Calendar, Star } from "lucide-react";

interface CoachProfileProps {
  coachId?: string;
}

const coachData = {
  id: 1,
  name: "John Martinez",
  email: "john.martinez@club.com",
  phone: "+1 (555) 123-4567",
  specialization: "Football",
  experience: "8 years",
  teams: ["Senior Men", "U21 Men"],
  certifications: ["UEFA B", "First Aid", "Sports Psychology"],
  status: "active",
  joinDate: "January 2020",
  bio: "Experienced football coach with a passion for developing young talent. Specializes in tactical formations and player development.",
  achievements: [
    "Led Senior Men to Division Championship 2023",
    "Developed 5 players who joined professional clubs",
    "Youth Coach of the Year 2022"
  ],
  stats: {
    matchesCoached: 156,
    winRate: 78,
    playersCoached: 45,
    seasonsActive: 4
  }
};

export function CoachProfile({ coachId }: CoachProfileProps) {
  return (
    <div className="space-y-6">
      {/* Coach Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <Avatar className="w-24 h-24 mx-auto md:mx-0">
              <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${coachData.name}`} />
              <AvatarFallback className="text-2xl">{coachData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-3 mb-3">
                <h1 className="text-2xl font-bold text-gray-900">{coachData.name}</h1>
                <Badge variant={coachData.status === "active" ? "default" : "secondary"}>
                  {coachData.status}
                </Badge>
              </div>
              
              <p className="text-gray-600 mb-4">{coachData.bio}</p>
              
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  {coachData.email}
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  {coachData.phone}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Joined {coachData.joinDate}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Trophy className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{coachData.stats.matchesCoached}</p>
                <p className="text-sm text-gray-600">Matches Coached</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-50 rounded-lg">
                <Star className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{coachData.stats.winRate}%</p>
                <p className="text-sm text-gray-600">Win Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-50 rounded-lg">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{coachData.stats.playersCoached}</p>
                <p className="text-sm text-gray-600">Players Coached</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-50 rounded-lg">
                <Calendar className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{coachData.stats.seasonsActive}</p>
                <p className="text-sm text-gray-600">Seasons Active</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Information */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="teams">Teams</TabsTrigger>
          <TabsTrigger value="playbook">Playbook</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>General Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="font-medium text-gray-700">Specialization</label>
                  <p className="text-gray-600">{coachData.specialization}</p>
                </div>
                <div>
                  <label className="font-medium text-gray-700">Experience</label>
                  <p className="text-gray-600">{coachData.experience}</p>
                </div>
                <div>
                  <label className="font-medium text-gray-700">Status</label>
                  <Badge variant={coachData.status === "active" ? "default" : "secondary"} className="ml-2">
                    {coachData.status}
                  </Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {coachData.certifications.map((cert) => (
                    <Badge key={cert} variant="outline">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="teams">
          <Card>
            <CardHeader>
              <CardTitle>Assigned Teams</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {coachData.teams.map((team) => (
                  <div key={team} className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-semibold text-gray-900">{team}</h3>
                    <p className="text-sm text-gray-600">Active team assignment</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="playbook">
          <PlaybookManagement />
        </TabsContent>
        
        <TabsContent value="achievements">
          <Card>
            <CardHeader>
              <CardTitle>Achievements & Recognition</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {coachData.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                    <Trophy className="w-5 h-5 text-yellow-600 mt-1" />
                    <p className="text-gray-900">{achievement}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
