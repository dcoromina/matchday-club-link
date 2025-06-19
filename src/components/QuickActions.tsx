
import { Button } from "@/components/ui/button";
import { 
  Plus, 
  Calendar, 
  Users, 
  FileText,
  Settings
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

export function QuickActions() {
  return (
    <div className="flex items-center gap-3">
      {/* Quick Add Button */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            Quick Add
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48 bg-white">
          <DropdownMenuLabel>Create New</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">
            <Users className="w-4 h-4 mr-2" />
            Add Team
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Match
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <FileText className="w-4 h-4 mr-2" />
            Create Report
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Settings */}
      <Button variant="outline" size="icon" asChild>
        <Link to="/settings">
          <Settings className="w-4 h-4" />
        </Link>
      </Button>
    </div>
  );
}
