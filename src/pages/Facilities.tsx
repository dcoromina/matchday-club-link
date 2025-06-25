
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, DollarSign, MapPin, Plus, Users } from "lucide-react";
import { useState } from "react";
import { FacilityBookingModal } from "@/components/FacilityBookingModal";

const Facilities = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedFacility, setSelectedFacility] = useState<any>(null);

  // Mock facilities data
  const facilities = [
    {
      id: 1,
      name: "Main Football Field",
      type: "Football",
      capacity: 22,
      hourlyRate: 50,
      status: "available",
      amenities: ["Floodlights", "Changing Rooms", "Parking"],
      nextAvailable: "09:00 AM"
    },
    {
      id: 2,
      name: "Basketball Court A",
      type: "Basketball",
      capacity: 10,
      hourlyRate: 30,
      status: "occupied",
      amenities: ["Indoor", "Air Conditioning", "Sound System"],
      nextAvailable: "02:00 PM"
    },
    {
      id: 3,
      name: "Tennis Court 1",
      type: "Tennis",
      capacity: 4,
      hourlyRate: 25,
      status: "available",
      amenities: ["Clay Surface", "Night Lighting", "Equipment Storage"],
      nextAvailable: "Now"
    },
    {
      id: 4,
      name: "Swimming Pool",
      type: "Swimming",
      capacity: 30,
      hourlyRate: 40,
      status: "maintenance",
      amenities: ["Heated", "Diving Board", "Lifeguard"],
      nextAvailable: "Tomorrow 08:00 AM"
    },
    {
      id: 5,
      name: "Gym & Fitness Center",
      type: "Fitness",
      capacity: 20,
      hourlyRate: 20,
      status: "available",
      amenities: ["Modern Equipment", "Personal Trainers", "Locker Rooms"],
      nextAvailable: "Now"
    },
    {
      id: 6,
      name: "Multi-Purpose Hall",
      type: "Multi-Sport",
      capacity: 50,
      hourlyRate: 60,
      status: "available",
      amenities: ["Flexible Layout", "Event Setup", "Catering Facilities"],
      nextAvailable: "10:00 AM"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available": return "bg-green-100 text-green-800";
      case "occupied": return "bg-red-100 text-red-800";
      case "maintenance": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const handleBookFacility = (facility: any) => {
    setSelectedFacility(facility);
    setIsBookingModalOpen(true);
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1 overflow-auto">
          <PageLayout
            title="Facility Booking"
            subtitle="Book and manage club facilities and equipment"
            actions={
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  View Calendar
                </Button>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Facility
                </Button>
              </div>
            }
          >
            <div className="space-y-6">
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-green-600">4</div>
                    <p className="text-sm text-gray-600">Available Now</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-red-600">1</div>
                    <p className="text-sm text-gray-600">Currently Occupied</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-yellow-600">1</div>
                    <p className="text-sm text-gray-600">Under Maintenance</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-blue-600">$1,280</div>
                    <p className="text-sm text-gray-600">Today's Revenue</p>
                  </CardContent>
                </Card>
              </div>

              {/* Facilities Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {facilities.map((facility) => (
                  <Card key={facility.id} className="hover:shadow-md transition-all">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{facility.name}</CardTitle>
                          <p className="text-sm text-gray-600">{facility.type}</p>
                        </div>
                        <Badge className={getStatusColor(facility.status)}>
                          {facility.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Users className="w-4 h-4" />
                          <span>Capacity: {facility.capacity} people</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <DollarSign className="w-4 h-4" />
                          <span>${facility.hourlyRate}/hour</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span>Next available: {facility.nextAvailable}</span>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium mb-2">Amenities:</p>
                        <div className="flex flex-wrap gap-1">
                          {facility.amenities.map((amenity, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {amenity}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          className="flex-1"
                          onClick={() => handleBookFacility(facility)}
                          disabled={facility.status === "maintenance"}
                        >
                          {facility.status === "available" ? "Book Now" : "View Schedule"}
                        </Button>
                        <Button size="sm" variant="outline">
                          Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </PageLayout>
          
          <FacilityBookingModal 
            isOpen={isBookingModalOpen} 
            onClose={() => setIsBookingModalOpen(false)}
            facility={selectedFacility}
          />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Facilities;
