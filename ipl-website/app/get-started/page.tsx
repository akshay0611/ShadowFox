"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function GetStartedPage() {
  const [activeTab, setActiveTab] = useState<"sign-in" | "join-fan-club">("sign-in");
  const [loading, setLoading] = useState(false);

  // Handle Sign In
  const handleSignIn = async (email: string, password: string) => {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      console.log("Signed in successfully:", data);
      // Redirect or update UI as needed
      window.location.href = "/dashboard"; // Example redirect
    }
    setLoading(false);
  };

  // Handle Sign Up
  const handleSignUp = async (email: string, password: string, fullName: string, city: string) => {
    setLoading(true);
  
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          city,
        },
      },
    });
  
    if (error) {
      alert(error.message);
    } else {
      console.log("Signed up successfully:", data);
      alert("Thanks for joining! Please check your email to verify your account.");
    }
  
    setLoading(false);
  };  

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white flex justify-center items-center">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {activeTab === "sign-in" ? "Sign In" : "Join the Fan Club"}
            </h1>
            <p className="mx-auto max-w-[700px] mt-4 text-gray-200 md:text-xl">
              {activeTab === "sign-in"
                ? "Welcome back! Sign in to access exclusive content and manage your account."
                : "Become a part of the Mumbai Indians family and enjoy exclusive benefits, updates, and more!"}
            </p>
          </div>
        </section>

        <section className="w-full py-12 flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="max-w-[400px] mx-auto bg-white rounded-lg shadow-lg p-8">
              {/* Tab Buttons */}
              <div className="flex justify-center gap-4 mb-6">
                <Button
                  variant={activeTab === "sign-in" ? "default" : "outline"}
                  onClick={() => setActiveTab("sign-in")}
                >
                  Sign In
                </Button>
                <Button
                  variant={activeTab === "join-fan-club" ? "default" : "outline"}
                  onClick={() => setActiveTab("join-fan-club")}
                >
                  Join Fan Club
                </Button>
              </div>

              {/* Sign In Form */}
              {activeTab === "sign-in" && (
                <>
                  <h2 className="text-2xl font-bold text-center mb-6">Sign In to Your Account</h2>
                  <form
                    className="space-y-6"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      const formData = new FormData(e.currentTarget);
                      const email = formData.get("email") as string;
                      const password = formData.get("password") as string;
                      await handleSignIn(email, password);
                    }}
                  >
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="remember-me"
                          name="remember-me"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                          Remember me
                        </label>
                      </div>
                      <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                        Forgot Password?
                      </a>
                    </div>
                    <Button type="submit" className="w-full" disabled={loading}>
                      {loading ? "Signing In..." : "Sign In"}
                    </Button>
                  </form>
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                      Don&apos;t have an account?{" "}
                      <button
                        onClick={() => setActiveTab("join-fan-club")}
                        className="text-blue-600 hover:underline cursor-pointer"
                      >
                        Join Fan Club
                      </button>
                    </p>
                  </div>
                </>
              )}

              {/* Join Fan Club Form */}
              {activeTab === "join-fan-club" && (
                <>
                  <h2 className="text-2xl font-bold text-center mb-6">Join the Fan Club</h2>
                  <form
                    className="space-y-6"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      const formData = new FormData(e.currentTarget);
                      const email = formData.get("email") as string;
                      const password = formData.get("password") as string;
                      const fullName = formData.get("name") as string;
                      const city = formData.get("city") as string;
                      await handleSignUp(email, password, fullName, city);
                    }}
                  >
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="Enter your city"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={loading}>
                      {loading ? "Joining..." : "Join Now"}
                    </Button>
                  </form>
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                      Already a member?{" "}
                      <button
                        onClick={() => setActiveTab("sign-in")}
                        className="text-blue-600 hover:underline cursor-pointer"
                      >
                        Sign In
                      </button>
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}