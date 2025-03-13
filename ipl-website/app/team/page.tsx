"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabaseClient";

// Define proper interfaces for your data
interface Player {
  id: string;
  name: string;
  image: string;
  role: string;
  country: string;
  category: 'batsmen' | 'bowlers' | 'all-rounders' | 'staff';
  team_type: 'male' | 'female';
}

interface TeamData {
  batsmen: Player[];
  bowlers: Player[];
  "all-rounders": Player[];
  staff: Player[];
}

export default function TeamPage() {
  const [teamType, setTeamType] = useState<"male" | "female">("male");
  const [teamData, setTeamData] = useState<TeamData>({
    batsmen: [],
    bowlers: [],
    "all-rounders": [],
    staff: [],
  });
  const [loading, setLoading] = useState(true);

  // Fetch team data from Supabase
  useEffect(() => {
    const fetchTeamData = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("teams")
        .select("*")
        .eq("team_type", teamType);

      if (error) {
        console.error("Error fetching team data:", error);
      } else {
        // Organize data by category
        const organizedData: TeamData = {
          batsmen: data.filter((player: Player) => player.category === "batsmen"),
          bowlers: data.filter((player: Player) => player.category === "bowlers"),
          "all-rounders": data.filter((player: Player) => player.category === "all-rounders"),
          staff: data.filter((player: Player) => player.category === "staff"),
        };
        setTeamData(organizedData);
      }
      setLoading(false);
    };

    fetchTeamData();
  }, [teamType]);

  const teamCategories = [
    { id: "batsmen", name: "Batsmen" },
    { id: "bowlers", name: "Bowlers" },
    { id: "all-rounders", name: "All-Rounders" },
    { id: "staff", name: "Coaching Staff" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Gradient Header Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white flex justify-center items-center">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Team</h1>
            <p className="mx-auto max-w-[700px] mt-4 text-gray-200 md:text-xl">
              Get to know the champions who represent Mumbai Indians on the field.
            </p>
            {/* Toggle for Male/Female Teams */}
            <div className="mt-6">
              <button
                onClick={() => setTeamType("male")}
                className={`px-6 py-2 rounded-l-full ${
                  teamType === "male" ? "bg-amber-500 text-white" : "bg-gray-300 text-gray-700"
                }`}
              >
                Male
              </button>
              <button
                onClick={() => setTeamType("female")}
                className={`px-6 py-2 rounded-r-full ${
                  teamType === "female" ? "bg-amber-500 text-white" : "bg-gray-300 text-gray-700"
                }`}
              >
                Female
              </button>
            </div>
          </div>
        </section>

        {/* Team Tabs Section */}
        <section className="w-full py-12 flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="batsmen" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="h-auto p-0 bg-transparent">
                  {teamCategories.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md"
                    >
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {teamCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-0">
                  {loading ? (
                    <div className="text-center">Loading...</div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {teamData[category.id as keyof TeamData].map((player) => (
                        <Card key={player.id} className="overflow-hidden">
                          <div className="aspect-square relative overflow-hidden bg-muted">
                            <Image
                              src={player.image || "/placeholder.svg"}
                              alt={player.name}
                              fill
                              className="object-cover transition-transform hover:scale-105"
                            />
                          </div>
                          <CardHeader>
                            <CardTitle>{player.name}</CardTitle>
                            <CardDescription>
                              {player.role} • {player.country}
                            </CardDescription>
                          </CardHeader>
                          <CardFooter>
                            <Button asChild variant="outline" className="w-full">
                              <Link href={`/team/player/${player.id}`}>View Profile</Link>
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}