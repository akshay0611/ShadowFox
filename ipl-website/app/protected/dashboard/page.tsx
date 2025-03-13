"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import { User } from "@supabase/supabase-js"; // Import User type from Supabase

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null); // Use User type from Supabase
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();

      if (error || !user) {
        // Redirect to /get-started if user is not authenticated
        router.push("/get-started");
      } else {
        setUser(user);
      }

      setLoading(false);
    };

    fetchUser();
  }, [router]);

  // Handle Sign Out
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      alert(error.message);
    } else {
      // Redirect to /get-started after signing out
      router.push("/get-started");
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-600">Loading...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-3xl font-bold">Welcome, {user?.email}</h1>
          <Button onClick={handleSignOut}>Sign Out</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}