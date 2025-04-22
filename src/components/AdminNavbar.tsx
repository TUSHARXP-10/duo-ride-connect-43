
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Bell, HelpCircle, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const AdminNavbar = () => {
  return (
    <nav className="sticky top-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b border-white/20 dark:border-slate-800/50 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-br from-[#0EA5E9] to-[#60A5FA] bg-clip-text text-transparent">
            DUO Admin
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/admin" className="font-medium text-gray-700 dark:text-gray-300 hover:text-[#0EA5E9] dark:hover:text-[#60A5FA]">
              Dashboard
            </Link>
            <Link to="/admin/users" className="font-medium text-gray-700 dark:text-gray-300 hover:text-[#0EA5E9] dark:hover:text-[#60A5FA]">
              Users
            </Link>
            <Link to="/admin/rides" className="font-medium text-gray-700 dark:text-gray-300 hover:text-[#0EA5E9] dark:hover:text-[#60A5FA]">
              Rides
            </Link>
            <Link to="/admin/settings" className="font-medium text-gray-700 dark:text-gray-300 hover:text-[#0EA5E9] dark:hover:text-[#60A5FA]">
              Settings
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </Button>
          
          <Button variant="ghost" size="icon">
            <HelpCircle className="h-5 w-5" />
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="border border-gray-200 dark:border-gray-700 rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Admin Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to="/admin/profile" className="w-full">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/admin/settings" className="w-full">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to="/login" className="w-full">Logout</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
