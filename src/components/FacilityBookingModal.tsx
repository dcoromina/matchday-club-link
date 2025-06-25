
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, DollarSign } from "lucide-react";
import { format } from "date-fns";

interface FacilityBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  facility: any;
}

export function FacilityBookingModal({ isOpen, onClose, facility }: FacilityBookingModalProps) {
  const [bookingData, setBookingData] = useState({
    date: null as Date | null,
    startTime: "",
    endTime: "",
    purpose: "",
    notes: ""
  });

  const calculateCost = () => {
    if (!bookingData.startTime || !bookingData.endTime || !facility) return 0;
    
    const start = new Date(`2000-01-01T${bookingData.startTime}`);
    const end = new Date(`2000-01-01T${bookingData.endTime}`);
    const hours = (end.getTime() - start.getTime()) / (1000 * 60 * 60);
    
    return Math.max(0, hours * facility.hourlyRate);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement booking logic
    console.log("Creating booking:", { facility, ...bookingData });
    onClose();
  };

  if (!facility) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Book {facility.name}</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Facility Details</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Type:</span> {facility.type}
              </div>
              <div>
                <span className="text-gray-600">Capacity:</span> {facility.capacity} people
              </div>
              <div>
                <span className="text-gray-600">Rate:</span> ${facility.hourlyRate}/hour
              </div>
              <div>
                <span className="text-gray-600">Status:</span> {facility.status}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {bookingData.date ? format(bookingData.date, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={bookingData.date || undefined}
                    onSelect={(date) => setBookingData({ ...bookingData, date: date || null })}
                    disabled={(date) => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="startTime">Start Time</Label>
              <Input
                id="startTime"
                type="time"
                value={bookingData.startTime}
                onChange={(e) => setBookingData({ ...bookingData, startTime: e.target.value })}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="endTime">End Time</Label>
              <Input
                id="endTime"
                type="time"
                value={bookingData.endTime}
                onChange={(e) => setBookingData({ ...bookingData, endTime: e.target.value })}
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="purpose">Purpose</Label>
            <Input
              id="purpose"
              value={bookingData.purpose}
              onChange={(e) => setBookingData({ ...bookingData, purpose: e.target.value })}
              placeholder="e.g., Team Practice, Tournament, etc."
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes</Label>
            <Textarea
              id="notes"
              value={bookingData.notes}
              onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
              placeholder="Any special requirements or notes"
              rows={3}
            />
          </div>
          
          {bookingData.startTime && bookingData.endTime && (
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="font-medium">Total Cost:</span>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  <span className="text-xl font-bold">${calculateCost()}</span>
                </div>
              </div>
            </div>
          )}
          
          <div className="flex justify-end gap-3">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              Book Facility
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
