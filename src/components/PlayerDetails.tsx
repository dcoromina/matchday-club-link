
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Crown, Trophy, Target, Calendar, MapPin, Phone, Mail, User, Activity, Heart, DollarSign, Clock } from "lucide-react";

const playersData = {
  "1": {
    id: 1,
    name: "John Smith",
    position: "Forward",
    age: 25,
    status: "Available",
    attendance: 95,
    team: "Senior Men Football",
    teamId: "1",
    isCaptain: true,
    joinDate: "2022-01-15",
    contractEnd: "2025-12-31",
    nationality: "English",
    height: "183 cm",
    weight: "75 kg",
    phone: "+44 123 456 789",
    email: "john.smith@club.com",
    address: "123 Football Street, London",
    emergencyContact: "Jane Smith - +44 987 654 321",
    stats: {
      matchesPlayed: 45,
      goals: 23,
      assists: 12,
      yellowCards: 3,
      redCards: 0,
      rating: 8.5
    },
    medical: {
      bloodType: "O+",
      allergies: "None",
      currentInjuries: 0,
      lastMedical: "2024-05-15"
    },
    financial: {
      salary: 75000,
      bonuses: 12000,
      paymentStatus: "Paid",
      lastPayment: "2024-06-01"
    },
    training: {
      attendanceRate: 92,
      fitnessLevel: "Excellent",
      lastSession: "2024-06-10"
    }
  },
  "2": {
    id: 2,
    name: "Mike Johnson",
    position: "Midfielder",
    age: 23,
    status: "Injured",
    attendance: 87,
    team: "Senior Men Football",
    teamId: "1",
    isCaptain: false,
    joinDate: "2023-07-01",
    contractEnd: "2026-06-30",
    nationality: "Welsh",
    height: "178 cm",
    weight: "72 kg",
    phone: "+44 234 567 890",
    email: "mike.johnson@club.com",
    address: "456 Stadium Road, Cardiff",
    emergencyContact: "Mary Johnson - +44 876 543 210",
    stats: {
      matchesPlayed: 38,
      goals: 8,
      assists: 15,
      yellowCards: 5,
      redCards: 1,
      rating: 7.8
    },
    medical: {
      bloodType: "A+",
      allergies: "Pollen",
      currentInjuries: 1,
      lastMedical: "2024-06-05"
    },
    financial: {
      salary: 55000,
      bonuses: 8000,
      paymentStatus: "Paid",
      lastPayment: "2024-06-01"
    },
    training: {
      attendanceRate: 85,
      fitnessLevel: "Good",
      lastSession: "2024-06-08"
    }
  }
};

interface PlayerDetailsProps {
  playerId?: string;
}

export function PlayerDetails({ playerId }: PlayerDetailsProps) {
  const player = playerId ? playersData[playerId as keyof typeof playersData] : null;

  if (!player) {
    return (
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Player Not Found</h2>
        <p className="text-gray-600">The requested player could not be found.</p>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available": return "bg-green-100 text-green-800";
      case "Injured": return "bg-red-100 text-red-800";
      case "Suspended": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Player Header */}
      <Card className="border-blue-100">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="relative">
                <Avatar className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500">
                  <AvatarFallback className="text-white text-2xl font-bold">
                    {player.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                {player.isCaptain && (
                  <Crown className="w-6 h-6 text-yellow-500 absolute -top-2 -right-2" />
                )}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <CardTitle className="text-3xl">{player.name}</CardTitle>
                  {player.isCaptain && (
                    <Badge className="bg-yellow-100 text-yellow-800">Captain</Badge>
                  )}
                </div>
                <div className="flex items-center gap-4 text-gray-600">
                  <span className="font-medium">{player.position}</span>
                  <span>•</span>
                  <span>{player.team}</span>
                  <span>•</span>
                  <span>Age: {player.age}</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Badge className={getStatusColor(player.status)}>
                    {player.status}
                  </Badge>
                  <Badge variant="outline">
                    Rating: {player.stats.rating}/10
                  </Badge>
                </div>
              </div>
            </div>
            <div className="text-right">
              <Button className="mb-2 w-full">
                Edit Player
              </Button>
              <Button variant="outline" className="w-full">
                {player.isCaptain ? "Remove Captain" : "Make Captain"}
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Personal Information */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-blue-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-600">Nationality</label>
                <p className="text-gray-900">{player.nationality}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Join Date</label>
                <p className="text-gray-900">{player.joinDate}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Height</label>
                <p className="text-gray-900">{player.height}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Weight</label>
                <p className="text-gray-900">{player.weight}</p>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Contract End</label>
              <p className="text-gray-900">{player.contractEnd}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-600">Phone</label>
              <p className="text-gray-900">{player.phone}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Email</label>
              <p className="text-gray-900">{player.email}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Address</label>
              <p className="text-gray-900">{player.address}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Emergency Contact</label>
              <p className="text-gray-900">{player.emergencyContact}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Stats */}
      <Card className="border-blue-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5" />
            Performance Statistics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{player.stats.matchesPlayed}</div>
              <div className="text-sm text-gray-600">Matches</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">{player.stats.goals}</div>
              <div className="text-sm text-gray-600">Goals</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">{player.stats.assists}</div>
              <div className="text-sm text-gray-600">Assists</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">{player.stats.yellowCards}</div>
              <div className="text-sm text-gray-600">Yellow Cards</div>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <div className="text-2xl font-bold text-red-600">{player.stats.redCards}</div>
              <div className="text-sm text-gray-600">Red Cards</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">{player.stats.rating}</div>
              <div className="text-sm text-gray-600">Rating</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Information */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="border-blue-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Medical Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <label className="text-sm font-medium text-gray-600">Blood Type</label>
              <p className="text-gray-900">{player.medical.bloodType}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Allergies</label>
              <p className="text-gray-900">{player.medical.allergies}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Current Injuries</label>
              <p className="text-gray-900">{player.medical.currentInjuries}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Last Medical Check</label>
              <p className="text-gray-900">{player.medical.lastMedical}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              Financial Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <label className="text-sm font-medium text-gray-600">Annual Salary</label>
              <p className="text-gray-900">£{player.financial.salary.toLocaleString()}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Bonuses</label>
              <p className="text-gray-900">£{player.financial.bonuses.toLocaleString()}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Payment Status</label>
              <Badge className="bg-green-100 text-green-800">{player.financial.paymentStatus}</Badge>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Last Payment</label>
              <p className="text-gray-900">{player.financial.lastPayment}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Training Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <label className="text-sm font-medium text-gray-600">Attendance Rate</label>
              <p className="text-gray-900">{player.training.attendanceRate}%</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Fitness Level</label>
              <p className="text-gray-900">{player.training.fitnessLevel}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Last Session</label>
              <p className="text-gray-900">{player.training.lastSession}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
