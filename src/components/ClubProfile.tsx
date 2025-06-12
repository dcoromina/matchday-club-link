
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Building, Mail, Phone, MapPin, Calendar, Users, Trophy, Edit, Save, X } from "lucide-react";
import { useState } from "react";

const ClubProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [clubData, setClubData] = useState({
    name: "SportClub Pro",
    founded: "1995",
    address: "123 Sports Street, Athletic City, AC 12345",
    email: "info@sportclubpro.com",
    phone: "+1 234 567 8900",
    website: "www.sportclubpro.com",
    description: "A professional sports club dedicated to excellence in athletics and community development.",
    totalMembers: 145,
    activeTeams: 8,
    championships: 12,
    clubColors: "Blue & Green"
  });

  const handleSave = () => {
    // Here you would typically save to a database
    setIsEditing(false);
    console.log("Club data saved:", clubData);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset any changes if needed
  };

  return (
    <div className="space-y-6">
      {/* Club Overview */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Building className="w-5 h-5 text-blue-600" />
            Club Profile
          </CardTitle>
          {!isEditing ? (
            <Button onClick={() => setIsEditing(true)} variant="outline" size="sm">
              <Edit className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button onClick={handleSave} size="sm">
                <Save className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button onClick={handleCancel} variant="outline" size="sm">
                <X className="w-4 h-4 mr-2" />
                Cancel
              </Button>
            </div>
          )}
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="clubName">Club Name</Label>
                {isEditing ? (
                  <Input
                    id="clubName"
                    value={clubData.name}
                    onChange={(e) => setClubData({ ...clubData, name: e.target.value })}
                  />
                ) : (
                  <p className="text-lg font-semibold">{clubData.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="founded">Founded</Label>
                {isEditing ? (
                  <Input
                    id="founded"
                    value={clubData.founded}
                    onChange={(e) => setClubData({ ...clubData, founded: e.target.value })}
                  />
                ) : (
                  <p className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    {clubData.founded}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="clubColors">Club Colors</Label>
                {isEditing ? (
                  <Input
                    id="clubColors"
                    value={clubData.clubColors}
                    onChange={(e) => setClubData({ ...clubData, clubColors: e.target.value })}
                  />
                ) : (
                  <Badge variant="outline">{clubData.clubColors}</Badge>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                {isEditing ? (
                  <Input
                    id="email"
                    type="email"
                    value={clubData.email}
                    onChange={(e) => setClubData({ ...clubData, email: e.target.value })}
                  />
                ) : (
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-500" />
                    {clubData.email}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                {isEditing ? (
                  <Input
                    id="phone"
                    value={clubData.phone}
                    onChange={(e) => setClubData({ ...clubData, phone: e.target.value })}
                  />
                ) : (
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-500" />
                    {clubData.phone}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                {isEditing ? (
                  <Input
                    id="website"
                    value={clubData.website}
                    onChange={(e) => setClubData({ ...clubData, website: e.target.value })}
                  />
                ) : (
                  <p className="text-blue-600 hover:underline cursor-pointer">{clubData.website}</p>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            {isEditing ? (
              <Input
                id="address"
                value={clubData.address}
                onChange={(e) => setClubData({ ...clubData, address: e.target.value })}
              />
            ) : (
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-500" />
                {clubData.address}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            {isEditing ? (
              <Textarea
                id="description"
                value={clubData.description}
                onChange={(e) => setClubData({ ...clubData, description: e.target.value })}
                rows={3}
              />
            ) : (
              <p className="text-gray-700">{clubData.description}</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Club Statistics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-600" />
            Club Statistics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-600">{clubData.totalMembers}</div>
              <div className="text-sm text-gray-600">Total Members</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-600">{clubData.activeTeams}</div>
              <div className="text-sm text-gray-600">Active Teams</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <Trophy className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-yellow-600">{clubData.championships}</div>
              <div className="text-sm text-gray-600">Championships Won</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClubProfile;
