export type AuthUser = {
  id: string;
  name: string;
  email: string;
};

const AUTH_USER_KEY = "auth_user";
const ONBOARDING_COMPLETE_KEY = "onboarding_complete";

const DEV_EMAIL = "dev@club.test";
const DEV_PASSWORD = "password123";

export function getAuthUser(): AuthUser | null {
  try {
    const raw = localStorage.getItem(AUTH_USER_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as AuthUser;
  } catch {
    return null;
  }
}

export function isAuthenticated(): boolean {
  return getAuthUser() !== null;
}

export function signInWithCredentials(
  email: string,
  password: string
): { ok: boolean; error?: string } {
  if (email === DEV_EMAIL && password === DEV_PASSWORD) {
    const user: AuthUser = {
      id: "dev-user-1",
      name: "Developer",
      email: DEV_EMAIL,
    };
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
    if (!localStorage.getItem(ONBOARDING_COMPLETE_KEY)) {
      localStorage.setItem(ONBOARDING_COMPLETE_KEY, "false");
    }
    return { ok: true };
  }
  return { ok: false, error: "Invalid email or password" };
}

export function signOut(): void {
  localStorage.removeItem(AUTH_USER_KEY);
}

export function hasCompletedOnboarding(): boolean {
  return localStorage.getItem(ONBOARDING_COMPLETE_KEY) === "true";
}

export function setOnboardingComplete(): void {
  localStorage.setItem(ONBOARDING_COMPLETE_KEY, "true");
}

export function startFreshOnboarding(): void {
  localStorage.setItem(ONBOARDING_COMPLETE_KEY, "false");
}
