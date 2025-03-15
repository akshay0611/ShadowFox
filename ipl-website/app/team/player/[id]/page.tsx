"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LucideLoader } from "lucide-react";
import ProfileHeader from "./ProfileHeader";
import { ProfileOverview } from "./ProfileOverview";
import { ProfileBio } from "./ProfileBio";
import { Person } from "./types";

export default function ProfilePage() {
  const { id: personId } = useParams();
  const [person, setPerson] = useState<Person | null>(null);
  const [loading, setLoading] = useState(true);
  const [isStaff, setIsStaff] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("teams")
        .select("*")
        .eq("id", personId as string)
        .single();
  
      if (error) {
        console.error("Error fetching data:", error);
      } else {
        const isStaffMember = data.category === "staff";
        setIsStaff(isStaffMember);
        setPerson(enhancePersonData(data as Partial<Person>, isStaffMember));
      }
      setLoading(false);
    };
  
    fetchData();
  }, [personId]);

  if (loading) return <LoadingState />;
  if (!person) return <NotFoundState />;

  const getProfileColor = () => {
    if (isStaff) return "bg-gray-700";
    return person.team_type === "male" ? "bg-blue-600" : "bg-pink-600";
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-12 bg-gray-50 dark:bg-gray-900">
        <ProfileHeader person={person} isStaff={isStaff} profileColor={getProfileColor()} />
        
        <div className="container px-4 md:px-6 mx-auto">
          <Tabs defaultValue="overview" className="mb-8">
            <TabsList className={`w-full max-w-md mx-auto grid ${isStaff ? "grid-cols-2" : "grid-cols-3"} mb-8`}>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="bio">Bio</TabsTrigger>
              {!isStaff && <TabsTrigger value="stats">Stats</TabsTrigger>}
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <ProfileOverview person={person} isStaff={isStaff} />
            </TabsContent>
            
            <TabsContent value="bio" className="space-y-6">
  <ProfileBio person={person} isStaff={isStaff} />
</TabsContent>
          </Tabs>
          
          <div className="flex justify-center mt-8">
            <Button asChild variant="outline">
              <Link href="/team">Back to Team</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function enhancePersonData(data: Partial<Person>, isStaffMember: boolean): Person {
    if (isStaffMember) {
      return {
        ...data,
        id: data.id || '',
        name: data.name || '',
        image: data.image || '',
        role: data.role || '',
        country: data.country || '',
        category: data.category || '',
        team_type: data.team_type || '',
        experience: data.experience || Math.floor(Math.random() * 20) + 5,
        previous_teams: data.previous_teams || "Various international teams",
        joined_year: data.joined_year || (new Date().getFullYear() - Math.floor(Math.random() * 10)),
        specialization: data.specialization || getDefaultSpecialization(data.role)
      } as Person;
    } 
    
    return {
      ...data,
      id: data.id || '',
      name: data.name || '',
      image: data.image || '',
      role: data.role || '',
      country: data.country || '',
      category: data.category || '',
      team_type: data.team_type || '',
      batting_style: data.batting_style || (data.role?.includes("Batsman") ? "Right-handed" : ""),
      bowling_style: data.bowling_style || (data.role?.includes("Bowler") ? "Right-arm medium" : ""),
      matches_played: data.matches_played || Math.floor(Math.random() * 100) + 50,
      runs: data.runs || Math.floor(Math.random() * 3000) + 500,
      wickets: data.wickets || (data.role?.includes("Bowler") ? Math.floor(Math.random() * 100) + 20 : 0),
      average: data.average || (Math.random() * 40 + 15).toFixed(2),
      strike_rate: data.strike_rate || (Math.random() * 100 + 70).toFixed(2),
    } as Person;
  }

function getDefaultSpecialization(role?: string): string {
  if (!role) return "Team development";
  
  if (role.includes("Coach")) return "Technical development and strategy";
  if (role.includes("Analyst")) return "Performance analysis and opposition research";
  if (role.includes("Physio")) return "Injury prevention and recovery";
  
  return "Team development";
}

function LoadingState() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 flex items-center justify-center py-24">
        <div className="text-center">
          <LucideLoader className="h-12 w-12 animate-spin mx-auto text-blue-600" />
          <p className="mt-4 text-xl font-medium">Loading profile...</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function NotFoundState() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center max-w-md p-8 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Profile Not Found</h2>
          <p className="mb-6">The profile you&apos;re looking for doesn&apos;t exist or has been removed.</p>
          <Button asChild>
            <Link href="/team">Back to Team</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}