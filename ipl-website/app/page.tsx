"use client";

import Link from "next/link"
import Image from "next/image"
import { CalendarDays, TrendingUp, Users, Newspaper, Heart, MessageSquare, HomeIcon } from "lucide-react"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import UpcomingMatches from "@/components/upcoming-matches"
import LatestNews from "@/components/latest-news"
import TeamHighlights from "@/components/team-highlights"
import FanPoll from "@/components/fan-poll"
import { Twitter, Facebook, Instagram, Youtube , Trophy,} from "lucide-react"; 
import { useState } from "react"; 

export default function Home() {
  const [subscribed, setSubscribed] = useState(false); 

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault(); 
    setSubscribed(true); 
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#003087] via-[#1a2a6c] to-[#0a1845] text-white relative overflow-hidden">
     
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
      
     
      <div className="absolute top-0 left-0 w-full h-2 bg-[#ffd700]"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-6">
           
            <div className="inline-block mb-2">
              <span className="bg-[#ffd700] text-[#003087] text-sm font-bold px-4 py-1 rounded-full animate-pulse">
                TATA WPL 2025 CHAMPION
              </span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Paltan, Welcome to <span className="text-[#ffd700]">Mumbai Indians</span> Official Fan Hub
              </h1>
              <p className="max-w-[600px] text-blue-100 md:text-xl leading-relaxed">
                Join the blue army and stay up-to-date with match schedules, player profiles, team news, and
                exclusive fan content.
              </p>
            </div>
            
            <div className="relative flex flex-col gap-3 min-[400px]:flex-row mt-4">
              <Link href="/matches" passHref>
                <Button 
                  size="lg" 
                  className="bg-[#ffd700] text-[#003087] hover:bg-[#e6c200] font-bold shadow-lg"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="mr-2"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  Match Schedule
                </Button>
              </Link>
              <Button 
                type="button"
                variant="outline" 
                size="lg" 
                className="text-white border-[#ffd700] bg-transparent hover:bg-[#ffd700] hover:text-[#003087] font-bold shadow-lg"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="mr-2"
                >
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                Watch Highlights
              </Button>
            </div>
            
          
            <div className="mt-8 pt-6 border-t border-blue-700 flex items-center gap-6">
              <div className="flex -space-x-4">
                <div className="w-10 h-10 rounded-full border-2 border-[#ffd700] bg-blue-800 flex items-center justify-center text-[#ffd700] font-bold">MI</div>
                <div className="w-10 h-10 rounded-full border-2 border-[#ffd700] bg-blue-800 flex items-center justify-center text-[#ffd700] font-bold">5x</div>
                <div className="w-10 h-10 rounded-full border-2 border-[#ffd700] bg-blue-800 flex items-center justify-center text-[#ffd700] font-bold">⭐</div>
              </div>
              <p className="text-sm text-blue-100">Join <span className="font-bold">5 million+</span> fans worldwide supporting the 5-time champions</p>
            </div>
          </div>
          
          <div className="mx-auto flex items-center justify-center">
          
            <Image
              src="/mumbai-indians.webp"
              alt="Mumbai Indians Team"
              width={400}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

        <section className="w-full py-12 md:py-24 flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
              <div className="flex-1 space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">Why We&apos;re Champions</h2>
                <p className="text-muted-foreground">
                  Mumbai Indians is the most successful franchise in IPL history with 5 titles. Our legacy of excellence
                  continues.
                </p>
              </div>
              <div className="flex">
  <Link
    href="/team"
    className="inline-flex h-10 items-center justify-center rounded-md bg-[#0078bc] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#006aa1]"
  >
    Meet Our Team
  </Link>
</div>

            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 mt-8">

  <Card className="flex flex-col items-center text-center p-4">
    <Trophy className="h-20 w-20 mb-4 text-yellow-500" /> 
    <CardHeader className="p-0">
      <CardTitle className="text-xl">5 IPL Titles</CardTitle>
    </CardHeader>
    <CardContent className="p-4 pt-2">
      <p className="text-sm text-muted-foreground">Champions in 2013, 2015, 2017, 2019 & 2020</p>
    </CardContent>
  </Card>


  <Card className="flex flex-col items-center text-center p-4">
  <HomeIcon className="h-20 w-20 mb-4 text-blue-500" /> 
    <CardHeader className="p-0">
      <CardTitle className="text-xl">Wankhede Fortress</CardTitle>
    </CardHeader>
    <CardContent className="p-4 pt-2">
      <p className="text-sm text-muted-foreground">Our home ground with incredible fan support</p>
    </CardContent>
  </Card>


  <Card className="flex flex-col items-center text-center p-4">
    <Users className="h-20 w-20 mb-4 text-green-500" /> 
    <CardHeader className="p-0">
      <CardTitle className="text-xl">Star Players</CardTitle>
    </CardHeader>
    <CardContent className="p-4 pt-2">
      <p className="text-sm text-muted-foreground">Home to Indian & international cricket superstars</p>
    </CardContent>
  </Card>


  <Card className="flex flex-col items-center text-center p-4">
    <Heart className="h-20 w-20 mb-4 text-red-500" /> 
    <CardHeader className="p-0">
      <CardTitle className="text-xl">Loyal Paltan</CardTitle>
    </CardHeader>
    <CardContent className="p-4 pt-2">
      <p className="text-sm text-muted-foreground">The most passionate fanbase in cricket</p>
    </CardContent>
  </Card>
</div>
          </div>
        </section>

        <section className="w-full py-12 bg-muted flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="upcoming" className="w-full">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight mb-4">Follow The Action</h2>
                <TabsList>
                  <TabsTrigger value="upcoming">Upcoming Matches</TabsTrigger>
                  <TabsTrigger value="news">Latest News</TabsTrigger>
                  <TabsTrigger value="highlights">Team Highlights</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="upcoming" className="mt-6">
                <UpcomingMatches />
              </TabsContent>
              <TabsContent value="news" className="mt-6">
                <LatestNews />
              </TabsContent>
              <TabsContent value="highlights" className="mt-6">
                <TeamHighlights />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 flex justify-center items-center">
  <div className="container px-4 md:px-6">
    <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div className="col-span-full lg:col-span-1">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Players</h2>
        <p className="text-muted-foreground">
          Meet the stars who power Mumbai Indians with their exceptional talent and passion for the game.
        </p>
        <Button className="mt-4" asChild>
  <Link href="/team">View All Players</Link>
</Button>
      </div>
      {[
        {
          id: 1,
          name: "Rohit Sharma",
          role: "Batsman",
          country: "India",
          image: "/rohitsharma.avif", 
          stats: "5-time IPL Champion, Highest run-scorer for MI",
        },
        {
          id: 2,
          name: "Jasprit Bumrah",
          role: "Bowler",
          country: "India",
          image: "/jaspritbumrah.avif", 
          stats: "Leading wicket-taker for MI, Best economy rate",
        },
        {
          id: 3,
          name: "Suryakumar Yadav",
          role: "Batsman",
          country: "India",
          image: "/suryakumaryadav.avif", 
          stats: "Consistent performer, 360-degree batsman",
        },
      ].map((player) => (
        <Card key={player.id} className="overflow-hidden">
          <div className="relative h-60">
            <Image
              src={player.image}
              alt={player.name}
              fill
              className="object-cover"
            />
          </div>
          <CardHeader>
            <CardTitle>{player.name}</CardTitle>
            <CardDescription>
              {player.role} • {player.country}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{player.stats}</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
              View Profile
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  </div>
</section>

        <section className="w-full py-12 bg-blue-900 text-white flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">Fan Zone</h2>
                <p className="text-gray-300">
                  Join the conversation, participate in polls, and connect with fellow MI fans around the world.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <Link
                    href="/fan-zone/forum"
                    className="flex items-center gap-2 rounded-lg bg-blue-800 p-4 hover:bg-blue-700 transition-colors"
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span>Fan Forum</span>
                  </Link>
                  <Link
                    href="/fan-zone/gallery"
                    className="flex items-center gap-2 rounded-lg bg-blue-800 p-4 hover:bg-blue-700 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                      <circle cx="9" cy="9" r="2" />
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                    </svg>
                    <span>Fan Gallery</span>
                  </Link>
                  <Link
                    href="/fan-zone/social-feed"
                    className="flex items-center gap-2 rounded-lg bg-blue-800 p-4 hover:bg-blue-700 transition-colors"
                  >
                    <Heart className="h-5 w-5" />
                    <span>Social Feed</span>
                  </Link>
                  <Link
                    href="/fan-zone/contests"
                    className="flex items-center gap-2 rounded-lg bg-blue-800 p-4 hover:bg-blue-700 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                      <path d="M4 22h16" />
                      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                    </svg>
                    <span>Fan Contests</span>
                  </Link>
                </div>
              </div>
              <div className="bg-blue-800 rounded-lg p-6">
                <FanPoll />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-[1fr_400px]">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">Quick Links</h2>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
  <Link
    href="/team"
    className="flex flex-col items-center p-4 rounded-lg border bg-card text-card-foreground shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
  >
    <div className="p-2 bg-blue-100 rounded-full">
      <Users className="h-6 w-6 mb-2 text-blue-600" />
    </div>
    <span>Team</span>
  </Link>
  <Link
    href="/matches"
    className="flex flex-col items-center p-4 rounded-lg border bg-card text-card-foreground shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
  >
    <div className="p-2 bg-green-100 rounded-full">
      <CalendarDays className="h-6 w-6 mb-2 text-green-600" />
    </div>
    <span>Matches</span>
  </Link>
  <Link
    href="/stats"
    className="flex flex-col items-center p-4 rounded-lg border bg-card text-card-foreground shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
  >
    <div className="p-2 bg-purple-100 rounded-full">
      <TrendingUp className="h-6 w-6 mb-2 text-purple-600" />
    </div>
    <span>Statistics</span>
  </Link>
  <Link
    href="/news"
    className="flex flex-col items-center p-4 rounded-lg border bg-card text-card-foreground shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
  >
    <div className="p-2 bg-orange-100 rounded-full">
      <Newspaper className="h-6 w-6 mb-2 text-orange-600" />
    </div>
    <span>News</span>
  </Link>
</div>
                <div className="mt-6">
  <h3 className="text-xl font-bold mb-2">Trophy Cabinet</h3>
  <div className="flex gap-4 overflow-x-auto pb-4">
    {[2013, 2015, 2017, 2019, 2020].map((year) => (
      <div key={year} className="flex flex-col items-center min-w-[100px]">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
          <Trophy className="h-8 w-8 text-blue-600" /> 
        </div>
        <span className="mt-2 font-medium">IPL {year}</span>
      </div>
    ))}
  </div>
</div>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">Stay Connected</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Subscribe for Updates</CardTitle>
                    <CardDescription>
                      Get the latest Mumbai Indians news and exclusive content delivered to your inbox.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                  <form className="space-y-4" onSubmit={handleSubscribe}>
                      <div className="grid gap-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder="m@example.com"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full bg-[#0078bc] text-white">
                        Subscribe
                      </Button>
                      {subscribed && (
                        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
                          🎉 Success! You&apos;ve subscribed to updates.
                        </div>
                      )}
                    </form>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start gap-2">
  <div className="text-sm text-muted-foreground">Follow us on social media:</div>
  <div className="flex gap-4">
    {[
      { platform: "twitter", icon: <Twitter className="h-6 w-6" /> },
      { platform: "facebook", icon: <Facebook className="h-6 w-6" /> },
      { platform: "instagram", icon: <Instagram className="h-6 w-6" /> },
      { platform: "youtube", icon: <Youtube className="h-6 w-6" /> },
    ].map(({ platform, icon }) => (
      <Link
        key={platform}
        href={`https://${platform}.com/mipaltan`}
        className="rounded-full bg-muted h-10 w-10 flex items-center justify-center hover:bg-blue-100 transition-colors"
      >
        {icon}
      </Link>
    ))}
  </div>
</CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}