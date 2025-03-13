"use client";

import { Home, Users, CalendarDays, Newspaper, Trophy, LogOut } from 'lucide-react';
import { Button } from "@/components/ui/button";

import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem, 
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
    <Sidebar className="border-r border-blue-800">
      <SidebarHeader className="border-b border-blue-800 bg-blue-900/60 p-4">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="mb-2 h-16 w-16 overflow-hidden rounded-full border-2 p-1">
              <Image
                src="/midashboardlogo.png?height=100&width=100"
                alt="Mumbai Indians Logo"
                width={60}
                height={60}
                className="h-full w-full object-cover"
              />
            </div>
            <h2 className="text-xl font-bold text-yellow-400">Mumbai Indians</h2>
            <p className="text-xs text-blue-300">Fan Club Portal</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="p-2">
        <SidebarMenu>
          {navItems.map((item, index) => (
            <SidebarMenuItem key={index}>
              <SidebarMenuButton 
                className={item.active ? "bg-blue-700 text-white" : "hover:bg-blue-800"}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      
      <SidebarFooter className="mt-auto border-t border-blue-800 p-4">
        <Button 
          onClick={handleSignOut} 
          variant="outline" 
          className="w-full border-yellow-500 bg-transparent text-yellow-400 hover:bg-yellow-500 hover:text-blue-900"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}