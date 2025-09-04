import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithCredentials, isAuthenticated } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Mail, Shield, ChevronRight } from "lucide-react";

/* const GoogleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="16"
    height="16"
    className="mr-2"
  >
    <path
      fill="#EA4335"
      d="M12 10.2v3.9h5.4c-.2 1.2-1.6 3.6-5.4 3.6-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.2.8 3.9 1.5l2.6-2.5C16.8 3.2 14.6 2 12 2 6.9 2 2.7 6.2 2.7 11.3S6.9 20.7 12 20.7c6.9 0 9.6-4.9 9.6-7.4 0-.5 0-1-.1-1.4H12z"
    />
  </svg>
); */

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const res = signInWithCredentials(email, password);
    setLoading(false);
    if (res.ok) {
      navigate("/onboarding", { replace: true });
    } else if (res.error) {
      setError(res.error);
    }
  };

  const mockSocial = (provider: string) => {
    setError(
      `Social login via ${provider} is not configured in dev. Use dev credentials below.`
    );
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <Card className="shadow-2xl border-slate-700 bg-slate-900/70 backdrop-blur">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-blue-600/20 flex items-center justify-center">
              <Shield className="h-6 w-6 text-blue-400" />
            </div>
            <CardTitle className="text-2xl text-white">
              Welcome to Matchday Club Link
            </CardTitle>
            <CardDescription>Sign in to continue</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <Button
                variant="outline"
                className="bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700"
                onClick={() => mockSocial("Google")}
              >
                <ChevronRight /> Google
              </Button>
              <Button
                variant="outline"
                className="bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700"
                onClick={() => mockSocial("GitHub")}
              >
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Button>
            </div>
            <div className="text-center text-xs text-slate-400 mb-3">
              or continue with email
            </div>
            <form onSubmit={handleSignIn} className="space-y-3">
              <div>
                <label className="block text-sm mb-1 text-slate-300">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="dev@club.test"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-slate-300">
                  Password
                </label>
                <Input
                  type="password"
                  placeholder="password123"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <div className="text-sm text-red-400">{error}</div>}
              <Button type="submit" className="w-full" disabled={loading}>
                <Mail className="mr-2 h-4 w-4" />
                {loading ? "Signing in..." : "Sign In"}
              </Button>
              <div className="text-xs text-slate-400 text-center">
                Dev login: dev@club.test / password123
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignIn;
