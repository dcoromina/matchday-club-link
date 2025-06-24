
import { ReactNode } from "react";
import { MainNavbar } from "./MainNavbar";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  actions?: ReactNode;
}

export function PageLayout({ children, title, subtitle, actions }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Navbar with Search, Notifications, and Dynamic Stats */}
      <MainNavbar />
      
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
              {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
            </div>
            {actions}
          </div>
        </div>
      </div>
      
      {/* Page Content */}
      <div className="px-8 py-8">
        {children}
      </div>
    </div>
  );
}
