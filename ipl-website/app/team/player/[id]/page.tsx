"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams } from "next/navigation";
import { LucideFlag, LucideUser, LucideAward, LucideLoader, LucideBriefcase } from "lucide-react";

interface Person {
  id: string;
  name: string;
  image: string;
  role: string;
  country: string;
  category: string;
  team_type: string;
  bio?: string;

  batting_style?: string;
  bowling_style?: string;
  matches_played?: number;
  runs?: number;
  wickets?: number;
  average?: number;
  strike_rate?: number;

  experience?: number;
  previous_teams?: string;
  joined_year?: number;
  specialization?: string;
}

export default function ProfilePage() {
  const params = useParams();
  const personId = params.id as string;
  const [person, setPerson] = useState<Person | null>(null);
  const [loading, setLoading] = useState(true);
  const [isStaff, setIsStaff] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("teams")
        .select("*")
        .eq("id", personId)
        .single();

      if (error) {
        console.error("Error fetching data:", error);
      } else {
      
        const isStaffMember = data.category === "staff";
        setIsStaff(isStaffMember);
        
      
        let enhancedData;
        
        if (isStaffMember) {
         
          enhancedData = {
            ...data,
            experience: data.experience || Math.floor(Math.random() * 20) + 5,
            previous_teams: data.previous_teams || "Various international teams",
            joined_year: data.joined_year || (new Date().getFullYear() - Math.floor(Math.random() * 10)),
            specialization: data.specialization || 
              (data.role?.includes("Coach") ? "Technical development and strategy" : 
               data.role?.includes("Analyst") ? "Performance analysis and opposition research" :
               data.role?.includes("Physio") ? "Injury prevention and recovery" : 
               "Team development")
          };
        } else {
          
          enhancedData = {
            ...data,
            batting_style: data.batting_style || (data.role?.includes("Batsman") ? "Right-handed" : ""),
            bowling_style: data.bowling_style || (data.role?.includes("Bowler") ? "Right-arm medium" : ""),
            matches_played: data.matches_played || Math.floor(Math.random() * 100) + 50,
            runs: data.runs || Math.floor(Math.random() * 3000) + 500,
            wickets: data.wickets || (data.role?.includes("Bowler") ? Math.floor(Math.random() * 100) + 20 : 0),
            average: data.average || (Math.random() * 40 + 15).toFixed(2),
            strike_rate: data.strike_rate || (Math.random() * 100 + 70).toFixed(2),
          };
        }
        
        setPerson(enhancedData);
      }
      setLoading(false);
    };

    fetchData();
  }, [personId]);

  if (loading) {
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

  if (!person) {
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

  const getProfileColor = () => {
    if (isStaff) {
      return "bg-gray-700";
    }
    return person.team_type === "male" ? "bg-blue-600" : "bg-pink-600";
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-12 bg-gray-50 dark:bg-gray-900">
       
        <div className={`w-full ${getProfileColor()} text-white py-8 mb-8`}>
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src={person.image || "/placeholder.svg"}
                  alt={person.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <Badge className="mb-2 bg-white text-blue-800">
                  {isStaff ? "Staff" : person.team_type === "male" ? "Male Team" : "Female Team"}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{person.name}</h1>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center">
                    {isStaff ? (
                      <LucideBriefcase className="mr-2 h-5 w-5" />
                    ) : (
                      <LucideUser className="mr-2 h-5 w-5" />
                    )}
                    <span>{person.role}</span>
                  </div>
                  <div className="flex items-center">
                    <LucideFlag className="mr-2 h-5 w-5" />
                    <span>{person.country}</span>
                  </div>
                  <div className="flex items-center">
                    <LucideAward className="mr-2 h-5 w-5" />
                    <span>{isStaff ? "Coaching Staff" : person.category}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

     
        <div className="container px-4 md:px-6 mx-auto">
          <Tabs defaultValue="overview" className="mb-8">
            <TabsList className={`w-full max-w-md mx-auto grid ${isStaff ? "grid-cols-2" : "grid-cols-3"} mb-8`}>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="bio">Bio</TabsTrigger>
              {!isStaff && (
                <TabsTrigger value="stats">Stats</TabsTrigger>
              )}
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  {isStaff ? (
                   
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Background</h3>
                        <div className="grid grid-cols-1 gap-4">
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Role</p>
                            <p className="font-medium">{person.role}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Specialization</p>
                            <p className="font-medium">{person.specialization}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Nationality</p>
                            <p className="font-medium">{person.country}</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Experience</h3>
                        <div className="grid grid-cols-1 gap-4">
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Years of Experience</p>
                            <p className="font-medium">{person.experience} years</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Joined Mumbai Indians</p>
                            <p className="font-medium">{person.joined_year}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Previous Teams</p>
                            <p className="font-medium">{person.previous_teams}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                   
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Playing Style</h3>
                        <div className="grid grid-cols-1 gap-4">
                          {person.batting_style && (
                            <div>
                              <p className="text-sm text-gray-500 dark:text-gray-400">Batting Style</p>
                              <p className="font-medium">{person.batting_style}</p>
                            </div>
                          )}
                          {person.bowling_style && (
                            <div>
                              <p className="text-sm text-gray-500 dark:text-gray-400">Bowling Style</p>
                              <p className="font-medium">{person.bowling_style}</p>
                            </div>
                          )}
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Role</p>
                            <p className="font-medium">{person.role}</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Career Highlights</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Matches</p>
                            <p className="font-medium">{person.matches_played}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Runs</p>
                            <p className="font-medium">{person.runs}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Wickets</p>
                            <p className="font-medium">{person.wickets}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Average</p>
                            <p className="font-medium">{person.average}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="bio" className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  {person.bio ? (
                    <div className="prose dark:prose-invert max-w-none">
                      <p>{person.bio}</p>
                    </div>
                  ) : (
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        {person.name} is a talented {person.role.toLowerCase()} from {person.country}. 
                        With a passion for cricket from a young age, {person.name.split(' ')[0]} has 
                        established {person.team_type === 'male' ? 'himself' : 'herself'} as a key player in the 
                        Mumbai Indians squad.
                      </p>
                      <p>
                        Known for {person.role.includes('Batsman') ? 'powerful batting and consistent run-scoring' : 
                          person.role.includes('Bowler') ? 'precise bowling and wicket-taking abilities' : 
                          person.role.includes('All-rounder') ? 'versatility and match-winning performances' : 
                          'exceptional skills'}, {person.name.split(' ')[0]} continues to be a fan favorite 
                        and a crucial member of the team&apos;s success.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
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