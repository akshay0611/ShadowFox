"use client";

import { Home, Users, CalendarDays, Newspaper, Trophy, LogOut, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton, 
} from "@/components/ui/sidebar";
import Image from "next/image";

export function AppSidebar({ handleSignOut }: { handleSignOut: () => Promise<void> }) {
  // Define navItems directly inside the component
  const navItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: Users, label: "Team Info" },
    { icon: CalendarDays, label: "Match Schedule" },
    { icon: Newspaper, label: "News & Updates" },
    { icon: Trophy, label: "Achievements" },
  ];

  return (
    <Sidebar className="border-r border-blue-800 bg-gradient-to-b from-blue-950 to-blue-900">
      <SidebarHeader className="border-b border-blue-800/50 bg-blue-900/60 p-6">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="relative mb-3 h-20 w-20 overflow-hidden rounded-full border-2 border-yellow-400 p-1 shadow-lg shadow-blue-950/50">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-blue-600"></div>
              <Image
                src="/midashboardlogo.png?height=100&width=100"
                alt="Mumbai Indians Logo"
                width={72}
                height={72}
                className="relative h-full w-full object-cover"
              />
              <div className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 text-blue-900">
                <Star className="h-4 w-4" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-yellow-400 drop-shadow-md">Mumbai Indians</h2>
            <div className="mt-1 flex items-center">
              <div className="h-1 w-8 rounded-full bg-blue-600"></div>
              <p className="mx-2 text-sm font-medium text-blue-200">Fan Club Portal</p>
              <div className="h-1 w-8 rounded-full bg-blue-600"></div>
            </div>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="p-4">
        <SidebarMenu className="space-y-2">
          {navItems.map((item, index) => (
            <SidebarMenuItem key={index}>
              <SidebarMenuButton 
                className={cn(
                  "group flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-200",
                  item.active 
                    ? "bg-gradient-to-r from-blue-700 to-blue-600 text-white shadow-md" 
                    : "text-blue-100 hover:bg-blue-800/70"
                )}
              >
                <item.icon className={cn(
                  "h-5 w-5 transition-all",
                  item.active 
                    ? "text-yellow-400" 
                    : "text-blue-300 "
                )} />
              <span className="font-medium text-black ">{item.label}</span>
                {item.active && (
                  <div className="ml-auto h-2 w-2 rounded-full bg-yellow-400"></div>
                )}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      
      <SidebarFooter className="mt-auto border-t border-blue-800/50 p-6">
        <Button 
          onClick={handleSignOut} 
          variant="outline" 
          className="w-full rounded-lg border-2 border-yellow-500 bg-transparent px-4 py-2 text-sm font-semibold text-yellow-400 shadow-md transition-all duration-200 hover:bg-yellow-500 hover:text-blue-900"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </Button>
        <div className="mt-4 flex items-center justify-center">
          <p className="text-xs text-blue-400">© 2025 Mumbai Indians Fan Club</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}