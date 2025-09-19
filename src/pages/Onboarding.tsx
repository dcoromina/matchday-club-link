import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuthUser,
  hasCompletedOnboarding,
  setOnboardingComplete,
  isAuthenticated,
} from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Check, ChevronLeft, ChevronRight, PartyPopper } from "lucide-react";

const SPORTS_OPTIONS = [
  { value: "soccer", label: "Football / Soccer" },
  { value: "basketball", label: "Basketball" },
  { value: "tennis", label: "Tennis" },
  { value: "rugby", label: "Rugby" },
  { value: "cricket", label: "Cricket" },
  { value: "hockey", label: "Hockey" },
  { value: "volleyball", label: "Volleyball" },
  { value: "multi", label: "Multi-sport" },
];

const Onboarding = () => {
  const navigate = useNavigate();
  const user = getAuthUser();

  const [clubName, setClubName] = useState("");
  const [sports, setSports] = useState<string[]>([]);
  const [role, setRole] = useState("");
  const [clubLevel, setClubLevel] = useState("");
  const [finished, setFinished] = useState(false);

  // Steps config
  const steps = useMemo(
    () => [
      { key: "club", title: "Club details" },
      { key: "sports", title: "Sports played" },
      { key: "role", title: "Your role" },
      { key: "finish", title: "Finish" },
    ],
    []
  );
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = steps.length;
  const progressPct = Math.round(((currentStep + 1) / totalSteps) * 100);

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/signin", { replace: true });
      return;
    }
    // Do NOT redirect away if onboarding is already complete; allow revisiting.
    // Keep completed values as hints if present.
    try {
      const savedClub = localStorage.getItem("club_name") || "";
      const savedRole = localStorage.getItem("user_role") || "";
      const savedLevel = localStorage.getItem("club_level") || "";
      const savedSports = JSON.parse(
        localStorage.getItem("club_sports") || "[]"
      );
      if (savedClub) setClubName(savedClub);
      if (savedRole) setRole(savedRole);
      if (savedLevel) setClubLevel(savedLevel);
      if (Array.isArray(savedSports)) setSports(savedSports);
    } catch {}
  }, [navigate]);

  const canProceed = useMemo(() => {
    if (steps[currentStep]?.key === "club") return clubName.trim().length > 1;
    if (steps[currentStep]?.key === "sports") return sports.length > 0;
    if (steps[currentStep]?.key === "role") return role.trim().length > 0;
    return true;
  }, [currentStep, steps, clubName, sports, role]);

  const toggleSport = (value: string) => {
    setSports((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const goNext = () => {
    if (!canProceed) return;
    if (currentStep < totalSteps - 1) {
      setCurrentStep((s) => s + 1);
    } else {
      // Complete onboarding WITHOUT redirecting away
      try {
        localStorage.setItem("club_name", clubName);
        localStorage.setItem("club_sports", JSON.stringify(sports));
        localStorage.setItem("user_role", role);
        localStorage.setItem("club_level", clubLevel);
      } catch {}
      setOnboardingComplete();
      setFinished(true);
    }
  };

  const goBack = () => {
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Vibrant gradient background with layered blurs */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 via-fuchsia-200 to-emerald-200" />
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-500/30 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-emerald-400/30 blur-3xl" />
      <div className="absolute top-1/3 -right-12 h-72 w-72 rounded-full bg-fuchsia-400/30 blur-3xl" />
      <div className="absolute bottom-1/3 -left-12 h-72 w-72 rounded-full bg-sky-400/30 blur-3xl" />

      <div className="relative z-10 flex">
        {/* Left: content */}
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="w-full max-w-xl">
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-semibold bg-gradient-to-r from-indigo-700 via-fuchsia-700 to-emerald-700 bg-clip-text text-transparent">
                    Welcome{user ? `, ${user.name}` : ""}
                  </h1>
                  <p className="text-sm text-gray-700">
                    Let’s personalize your club setup.
                  </p>
                </div>
                <Badge variant="secondary">
                  Step {currentStep + 1} of {totalSteps}
                </Badge>
              </div>
              <div className="mt-4 h-2 w-full rounded-full bg-white/60 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-emerald-500 transition-all"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>

            <div className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/50 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] p-6">
              {!finished && steps[currentStep]?.key === "club" && (
                <div className="space-y-5">
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
                      Club level
                    </label>
                    <Select value={clubLevel} onValueChange={setClubLevel}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="youth">Youth / Academy</SelectItem>
                        <SelectItem value="amateur">Amateur</SelectItem>
                        <SelectItem value="semi-pro">Semi-pro</SelectItem>
                        <SelectItem value="professional">
                          Professional
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {!finished && steps[currentStep]?.key === "sports" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Sports played in the club
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {SPORTS_OPTIONS.map((opt) => {
                        const active = sports.includes(opt.value);
                        return (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => toggleSport(opt.value)}
                            className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                              active
                                ? "bg-indigo-600 text-white border-indigo-600"
                                : "bg-white/80 text-gray-800 border-gray-300 hover:border-indigo-400"
                            }`}
                          >
                            <span className="inline-flex items-center gap-1">
                              {active && <Check className="w-3.5 h-3.5" />}
                              {opt.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Select all that apply.
                    </p>
                  </div>
                </div>
              )}

              {!finished && steps[currentStep]?.key === "role" && (
                <div className="space-y-5">
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
                      This helps tailor actions and access.
                    </p>
                  </div>
                </div>
              )}

              {!finished && steps[currentStep]?.key === "finish" && (
                <div className="space-y-4">
                  <h2 className="text-lg font-medium">Review</h2>
                  <div className="text-sm text-gray-700 space-y-1">
                    <div>
                      <span className="font-medium">Club:</span>{" "}
                      {clubName || "—"}
                    </div>
                    <div>
                      <span className="font-medium">Level:</span>{" "}
                      {clubLevel || "—"}
                    </div>
                    <div>
                      <span className="font-medium">Sports:</span>{" "}
                      {sports.length
                        ? sports
                            .map(
                              (s) =>
                                SPORTS_OPTIONS.find((o) => o.value === s)
                                  ?.label || s
                            )
                            .join(", ")
                        : "—"}
                    </div>
                    <div>
                      <span className="font-medium">Role:</span> {role || "—"}
                    </div>
                  </div>
                  <Separator className="my-2" />
                  <p className="text-xs text-muted-foreground">
                    You can change these later in Settings.
                  </p>
                </div>
              )}

              {finished && (
                <div className="text-center space-y-4 py-6">
                  <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-emerald-500 text-white flex items-center justify-center shadow-lg">
                    <PartyPopper className="w-7 h-7" />
                  </div>
                  <h2 className="text-xl font-semibold">Onboarding complete</h2>
                  <p className="text-sm text-muted-foreground">
                    Your preferences were saved. You can revisit this page any
                    time.
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <Button
                      variant="outline"
                      onClick={() => setFinished(false)}
                    >
                      Edit answers
                    </Button>
                    <Button onClick={() => navigate("/")}>
                      Go to Dashboard
                    </Button>
                  </div>
                </div>
              )}

              {!finished && (
                <div className="mt-6 flex items-center justify-between">
                  <Button
                    variant="outline"
                    onClick={goBack}
                    disabled={currentStep === 0}
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" /> Back
                  </Button>
                  <Button onClick={goNext} disabled={!canProceed}>
                    {currentStep === totalSteps - 1 ? (
                      <>Finish setup</>
                    ) : (
                      <>
                        Next <ChevronRight className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </Button>
                </div>
              )}
            </div>

            {/* bottom progress helper for mobile */}
            <div className="mt-4 flex items-center justify-between text-xs text-gray-700">
              <span>{finished ? "Completed" : steps[currentStep]?.title}</span>
              <span>
                {finished ? "100% complete" : `${progressPct}% complete`}
              </span>
            </div>
          </div>
        </div>

        {/* Right: wallpaper */}
        <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.35),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.35),transparent_35%),radial-gradient(circle_at_40%_80%,rgba(236,72,153,0.35),transparent_35%)]" />
          <img
            src="/placeholder.svg"
            alt="Onboarding wallpaper"
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
          />
          <div className="absolute inset-0 backdrop-blur-2xl" />
          <div className="absolute top-10 left-10 h-24 w-24 rounded-3xl bg-white/20 blur-xl" />
          <div className="absolute bottom-16 right-20 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
