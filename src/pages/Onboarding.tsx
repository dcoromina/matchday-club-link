import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuthUser,
  hasCompletedOnboarding,
  setOnboardingComplete,
  isAuthenticated,
} from "@/lib/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Trophy } from "lucide-react";

const Onboarding = () => {
  const navigate = useNavigate();
  const user = getAuthUser();

  const [clubName, setClubName] = useState("");
  const [role, setRole] = useState("");
  const [clubType, setClubType] = useState("");

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/signin", { replace: true });
      return;
    }
    if (hasCompletedOnboarding()) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  const handleComplete = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clubType) {
      alert("Please select your club type.");
      return;
    }
    try {
      localStorage.setItem("club_type", clubType);
      localStorage.setItem("club_name", clubName);
      localStorage.setItem("user_role", role);
    } catch {}
    setOnboardingComplete();
    navigate("/", { replace: true });
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-50 to-teal-50 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl">
        <Card className="shadow-2xl">
          <CardHeader>
            <div className="flex items-start justify-between gap-4">
              <div>
                <CardTitle className="text-2xl">
                  Welcome{user ? `, ${user.name}` : ""}
                </CardTitle>
                <CardDescription>
                  Let’s personalize your club setup.
                </CardDescription>
                <div className="mt-3 flex items-center gap-2">
                  <Badge variant="secondary">Step 1 of 1</Badge>
                  <span className="text-xs text-muted-foreground">
                    Takes less than a minute
                  </span>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-indigo-600/90">
                <Users className="w-5 h-5" />
                <Trophy className="w-5 h-5" />
                <Building2 className="w-5 h-5" />
              </div>
            </div>
          </CardHeader>
          <Separator />
          <CardContent className="pt-6">
            <form className="space-y-6" onSubmit={handleComplete}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Club name
                  </label>
                  <Input
                    value={clubName}
                    onChange={(e) => setClubName(e.target.value)}
                    placeholder="e.g. Northside FC"
                    required
                  />
                  <p className="mt-1 text-xs text-muted-foreground">
                    Use your official or common club name.
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Your role
                  </label>
                  <Input
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="e.g. Coach, Manager"
                    required
                  />
                  <p className="mt-1 text-xs text-muted-foreground">
                    This helps us tailor management actions.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1">
                    Club type
                  </label>
                  <Select value={clubType} onValueChange={setClubType}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a club type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="soccer">
                        Football / Soccer Club
                      </SelectItem>
                      <SelectItem value="basketball">
                        Basketball Club
                      </SelectItem>
                      <SelectItem value="tennis">Tennis Club</SelectItem>
                      <SelectItem value="rugby">Rugby Club</SelectItem>
                      <SelectItem value="multi">Multi-sport Club</SelectItem>
                      <SelectItem value="youth">Youth Academy</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Choose the primary sport or organization type.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="text-xs text-muted-foreground">
                  You can change these later in Settings.
                </div>
                <Button type="submit">Finish setup</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Onboarding;
