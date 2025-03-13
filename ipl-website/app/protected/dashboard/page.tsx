"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import { User } from "@supabase/supabase-js";
import { Home, Users, CalendarDays, Newspaper, Trophy, ChevronRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  SidebarProvider, 
  SidebarTrigger 
} from "@/components/ui/sidebar";

import { AppSidebar } from "@/components/AppSidebar"; 

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error || !user) {
        router.push("/get-started");
      } else {
        setUser(user);
      }
      setLoading(false);
    };
    fetchUser();
  }, [router]);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) router.push("/get-started");
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gradient-to-br from-indigo-950 to-blue-900">
        <div className="flex flex-col items-center gap-4">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-500"></div>
          <p className="text-xl font-medium text-white">Loading...</p>
        </div>
      </div>
    );
  }

  const navItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: Users, label: "Team Info" },
    { icon: CalendarDays, label: "Match Schedule" },
    { icon: Newspaper, label: "News & Updates" },
    { icon: Trophy, label: "Achievements" },
  ];

  const upcomingMatches = [
    {
      opponent: "Chennai Super Kings",
      date: "12th April 2025",
      venue: "Wankhede Stadium, Mumbai",
      time: "7:30 PM IST",
      status: "Home"
    },
    {
      opponent: "Royal Challengers Bangalore",
      date: "18th April 2025",
      venue: "M. Chinnaswamy Stadium, Bangalore",
      time: "7:30 PM IST",
      status: "Away"
    }
  ];

  const recentNews = [
    {
      title: "Rohit Sharma to lead Mumbai Indians in IPL 2025",
      date: "March 15, 2025"
    },
    {
      title: "Mumbai Indians announce new signing ahead of IPL 2025",
      date: "March 10, 2025"
    }
  ];

  return (
    <SidebarProvider>
      <div className="flex h-screen bg-gradient-to-br from-indigo-950 to-blue-900 text-white">

        <AppSidebar navItems={navItems} handleSignOut={handleSignOut} />
        
      
        <div className="flex-1 overflow-auto">
          <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-blue-800 bg-indigo-950/80 px-4 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="lg:hidden" />
              <h1 className="text-xl font-bold text-white">Mumbai Indians Fan Club</h1>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="border-blue-500 bg-blue-950/50 text-blue-300">
                Premium Member
              </Badge>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback className="bg-blue-700 text-white">
                  {user?.email?.charAt(0).toUpperCase() || "U"}
                </AvatarFallback>
              </Avatar>
            </div>
          </header>

          <main className="container mx-auto p-6">
            <div className="mb-8">
              <h2 className="mb-2 text-2xl font-bold text-white">
                Welcome, {user?.email?.split('@')[0] || "Fan"}
              </h2>
              <p className="text-blue-200">
                Stay updated with the latest Mumbai Indians news and matches
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
       
              <Card className="col-span-full border-blue-800 bg-blue-900/40 text-white backdrop-blur-sm md:col-span-2">
                <CardHeader className="border-b border-blue-800 bg-blue-900/60">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <CalendarDays className="h-5 w-5 text-blue-300" />
                    Upcoming Matches
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  {upcomingMatches.map((match, index) => (
                    <div 
                      key={index} 
                      className="flex flex-col border-b border-blue-800 p-4 last:border-0 md:flex-row md:items-center md:justify-between"
                    >
                      <div className="mb-2 md:mb-0">
                        <h3 className="font-bold text-blue-100">MI vs {match.opponent}</h3>
                        <p className="text-sm text-blue-300">{match.date} • {match.time}</p>
                        <p className="text-sm text-blue-300">{match.venue}</p>
                      </div>
                      <Badge 
                        className={match.status === "Home" 
                          ? "bg-blue-600 hover:bg-blue-700" 
                          : "bg-indigo-700 hover:bg-indigo-800"
                        }
                      >
                        {match.status}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

         
              <Card className="border-blue-800 bg-blue-900/40 text-white backdrop-blur-sm">
                <CardHeader className="border-b border-blue-800 bg-blue-900/60">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Newspaper className="h-5 w-5 text-blue-300" />
                    Latest News
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  {recentNews.map((news, index) => (
                    <div key={index} className="flex items-center justify-between border-b border-blue-800 p-4 last:border-0">
                      <div>
                        <h3 className="font-medium text-blue-100">{news.title}</h3>
                        <p className="text-sm text-blue-300">{news.date}</p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-blue-400" />
                    </div>
                  ))}
                </CardContent>
              </Card>

            
              <Card className="col-span-full border-blue-800 bg-blue-900/40 text-white backdrop-blur-sm md:col-span-2 lg:col-span-3">
                <CardHeader className="border-b border-blue-800 bg-blue-900/60">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Trophy className="h-5 w-5 text-blue-300" />
                    Team Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
                    {[2013, 2015, 2017, 2019, 2020].map((year) => (
                      <div key={year} className="flex flex-col items-center rounded-lg border border-blue-700 bg-blue-800/50 p-4">
                        <Trophy className="mb-2 h-8 w-8 text-yellow-400" />
                        <p className="text-lg font-bold text-yellow-400">IPL Champions</p>
                        <p className="text-blue-200">{year}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}