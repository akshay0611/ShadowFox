import Link from "next/link"
import Image from "next/image"
import { CalendarDays, Clock, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MatchesPage() {
  // Sample matches data
  const matches = {
    upcoming: [
      {
        id: 1,
        opponent: "Chennai Super Kings",
        opponentLogo: "/Chennai_Super_Kings_Logo.svg.png?height=60&width=60",
        date: "April 12, 2025",
        time: "7:30 PM IST",
        venue: "Wankhede Stadium, Mumbai",
        ticketsAvailable: true,
      },
      {
        id: 2,
        opponent: "Royal Challengers Bangalore",
        opponentLogo: "/rcb_logo.png?height=60&width=60",
        date: "April 16, 2025",
        time: "3:30 PM IST",
        venue: "M. Chinnaswamy Stadium, Bangalore",
        ticketsAvailable: true,
      },
      {
        id: 3,
        opponent: "Delhi Capitals",
        opponentLogo: "/Delhi_Capitals.svg.png?height=60&width=60",
        date: "April 20, 2025",
        time: "7:30 PM IST",
        venue: "Wankhede Stadium, Mumbai",
        ticketsAvailable: false,
      },
      {
        id: 4,
        opponent: "Kolkata Knight Riders",
        opponentLogo: "/Kolkata-Knight-Riders-Logo.png?height=60&width=60",
        date: "April 24, 2025",
        time: "7:30 PM IST",
        venue: "Eden Gardens, Kolkata",
        ticketsAvailable: true,
      },
      {
        id: 5,
        opponent: "Rajasthan Royals",
        opponentLogo: "/Rajasthan-Royals-Logo.png?height=60&width=60",
        date: "April 30, 2025",
        time: "3:30 PM IST",
        venue: "Wankhede Stadium, Mumbai",
        ticketsAvailable: true,
      },
    ],
    completed: [
      {
        id: 101,
        opponent: "Gujarat Titans",
        opponentLogo: "/Gujarat_Titans_Logo.svg.png?height=60&width=60",
        date: "March 31, 2025",
        result: "Won by 6 wickets",
        miScore: "172/4 (19.2 overs)",
        opponentScore: "168/6 (20 overs)",
        playerOfMatch: "Suryakumar Yadav",
        venue: "Wankhede Stadium, Mumbai", // Add this line
      },
      {
        id: 102,
        opponent: "Sunrisers Hyderabad",
        opponentLogo: "/Sunrisers_Hyderabad_Logo.svg.png?height=60&width=60",
        date: "April 4, 2025",
        result: "Lost by 3 runs",
        miScore: "189/8 (20 overs)",
        opponentScore: "192/6 (20 overs)",
        playerOfMatch: "Heinrich Klaasen",
        venue: "Wankhede Stadium, Mumbai", // Add this line
      },
      {
        id: 103,
        opponent: "Punjab Kings",
        opponentLogo: "/Punjab_Kings_Logo.svg.png?height=60&width=60",
        date: "April 8, 2025",
        result: "Won by 8 wickets",
        miScore: "157/2 (17.4 overs)",
        opponentScore: "156/8 (20 overs)",
        playerOfMatch: "Jasprit Bumrah",
        venue: "Wankhede Stadium, Mumbai", // Add this line
      },
    ],
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white flex justify-center items-center">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Match Schedule</h1>
            <p className="mx-auto max-w-[700px] mt-4 text-gray-200 md:text-xl">
              Stay updated with Mumbai Indians match schedule and results for the IPL 2025 season.
            </p>
          </div>
        </section>

        <section className="w-full py-12 flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="upcoming" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="upcoming">Upcoming Matches</TabsTrigger>
                  <TabsTrigger value="completed">Completed Matches</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="upcoming" className="mt-0">
                <div className="grid gap-6">
                  {matches.upcoming.map((match) => (
                    <Card key={match.id} className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center">
                          <div className="p-6">
                            <div className="flex items-center flex-wrap gap-4 mb-4">
                              <div className="flex items-center">
                                <Image src="/mumbai-indians-logo.svg" alt="Mumbai Indians" width={60} height={60} />
                                <span className="mx-3 text-xl font-bold">VS</span>
                                <Image
                                  src={match.opponentLogo || "/placeholder.svg"}
                                  alt={match.opponent}
                                  width={60}
                                  height={60}
                                />
                              </div>
                              <h3 className="text-lg font-bold">Mumbai Indians vs {match.opponent}</h3>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="flex items-center gap-2">
                                <CalendarDays className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">{match.date}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">{match.time}</span>
                              </div>
                              <div className="sm:col-span-2 flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">{match.venue}</span>
                              </div>
                            </div>
                          </div>
                          <div className="bg-muted p-6 flex flex-col items-center justify-center gap-2 text-center">
                            <div className="text-sm font-medium">
                              {match.ticketsAvailable ? "Tickets Available" : "Sold Out"}
                            </div>
                            <Button
                              variant={match.ticketsAvailable ? "default" : "outline"}
                              disabled={!match.ticketsAvailable}
                            >
                              {match.ticketsAvailable ? "Buy Tickets" : "Sold Out"}
                            </Button>
                            <Link href={`/matches/${match.id}`} className="text-sm text-blue-600 hover:underline">
                              Match Details
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="completed" className="mt-0">
                <div className="grid gap-6">
                  {matches.completed.map((match) => (
                    <Card key={match.id} className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center">
                          <div className="p-6">
                            <div className="flex items-center flex-wrap gap-4 mb-4">
                              <div className="flex items-center">
                                <Image src="/mumbai-indians-logo.svg" alt="Mumbai Indians" width={60} height={60} />
                                <span className="mx-3 text-xl font-bold">VS</span>
                                <Image
                                  src={match.opponentLogo || "/placeholder.svg"}
                                  alt={match.opponent}
                                  width={60}
                                  height={60}
                                />
                              </div>
                              <h3 className="text-lg font-bold">Mumbai Indians vs {match.opponent}</h3>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <CalendarDays className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">{match.date}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">{match.venue}</span>
                              </div>
                              <div className="pt-2">
                                <div
                                  className={`text-sm font-semibold ${match.result.includes("Won") ? "text-green-600" : "text-red-600"}`}
                                >
                                  {match.result}
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-2 pt-2">
                                <div>
                                  <div className="text-xs text-muted-foreground">Mumbai Indians</div>
                                  <div className="text-sm font-medium">{match.miScore}</div>
                                </div>
                                <div>
                                  <div className="text-xs text-muted-foreground">{match.opponent}</div>
                                  <div className="text-sm font-medium">{match.opponentScore}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-muted p-6 flex flex-col items-center justify-center gap-2 text-center">
                            <div className="text-sm font-medium">Player of the Match</div>
                            <div className="font-bold">{match.playerOfMatch}</div>
                            <Link href={`/matches/${match.id}`} className="text-sm text-blue-600 hover:underline">
                              Match Details
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

