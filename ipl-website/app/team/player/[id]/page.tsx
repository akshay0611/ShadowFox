"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams } from "next/navigation";

interface Player {
  id: string;
  name: string;
  image: string;
  role: string;
  country: string;
  category: string;
  team_type: string;
  bio?: string; // Optional field for player bio
}

export default function PlayerProfile() {
  const params = useParams();
  const playerId = params.id as string;
  const [player, setPlayer] = useState<Player | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlayerData = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("teams")
        .select("*")
        .eq("id", playerId)
        .single();

      if (error) {
        console.error("Error fetching player data:", error);
      } else {
        setPlayer(data);
      }
      setLoading(false);
    };

    fetchPlayerData();
  }, [playerId]);

  if (loading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  if (!player) {
    return <div className="text-center py-12">Player not found.</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Player Image */}
            <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
              <Image
                src={player.image || "/placeholder.svg"}
                alt={player.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Player Details */}
            <div className="space-y-4">
              <h1 className="text-3xl font-bold">{player.name}</h1>
              <p className="text-gray-600 dark:text-gray-400">
                {player.role} • {player.country}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Category: {player.category}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Team: {player.team_type === "male" ? "Male Team" : "Female Team"}
              </p>
              {player.bio && (
                <p className="text-gray-600 dark:text-gray-400">{player.bio}</p>
              )}
              <Button asChild variant="outline">
                <Link href="/team">Back to Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}