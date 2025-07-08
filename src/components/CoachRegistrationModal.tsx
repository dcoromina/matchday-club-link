
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

interface CoachRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const teams = [
  "Senior Men", "Senior Women", "U21 Men", "U18 Boys", "U16 Girls",
  "Senior Men Basketball", "Senior Women Basketball", "U18 Boys Basketball",
  "Mixed Doubles Tennis", "Singles Tennis"
];

export function CoachRegistrationModal({ isOpen, onClose }: CoachRegistrationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialization: "",
    experience: "",
    certifications: "",
    assignedTeams: [] as string[]
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Coach Registered",
        description: `${formData.name} has been successfully registered as a coach.`,
      });
      onClose();
      setFormData({
        name: "",
        email: "",
        phone: "",
        specialization: "",
        experience: "",
        certifications: "",
        assignedTeams: []
      });
    }, 1000);
  };

  const handleTeamToggle = (team: string) => {
    setFormData(prev => ({
      ...prev,
      assignedTeams: prev.assignedTeams.includes(team)
        ? prev.assignedTeams.filter(t => t !== team)
        : [...prev.assignedTeams, team]
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Register New Coach</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="specialization">Specialization *</Label>
              <Select onValueChange={(value) => setFormData(prev => ({ ...prev, specialization: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select sport specialization" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="football">Football</SelectItem>
                  <SelectItem value="basketball">Basketball</SelectItem>
                  <SelectItem value="tennis">Tennis</SelectItem>
                  <SelectItem value="volleyball">Volleyball</SelectItem>
                  <SelectItem value="athletics">Athletics</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="experience">Years of Experience *</Label>
              <Input
                id="experience"
                value={formData.experience}
                onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                placeholder="e.g., 5 years"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="certifications">Certifications</Label>
              <Input
                id="certifications"
                value={formData.certifications}
                onChange={(e) => setFormData(prev => ({ ...prev, certifications: e.target.value }))}
                placeholder="e.g., UEFA B, First Aid"
              />
            </div>
          </div>

          <div className="space-y-3">
            <Label>Assign to Teams</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-40 overflow-y-auto border rounded-lg p-3">
              {teams.map((team) => (
                <div key={team} className="flex items-center space-x-2">
                  <Checkbox
                    id={team}
                    checked={formData.assignedTeams.includes(team)}
                    onCheckedChange={() => handleTeamToggle(team)}
                  />
                  <Label htmlFor={team} className="text-sm font-normal cursor-pointer">
                    {team}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading} className="flex-1">
              {isLoading ? "Registering..." : "Register Coach"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
