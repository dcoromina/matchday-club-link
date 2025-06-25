
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
        <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="min-w-0">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 truncate">{title}</h1>
              {subtitle && <p className="text-gray-600 mt-1 text-sm sm:text-base">{subtitle}</p>}
            </div>
            {actions && (
              <div className="flex-shrink-0">
                {actions}
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Page Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {children}
      </div>
    </div>
  );
}
