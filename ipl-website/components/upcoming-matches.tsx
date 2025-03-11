import Link from "next/link"
import Image from "next/image"
import { CalendarDays, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function UpcomingMatches() {
  const upcomingMatches = [
    {
      id: 1,
      opponent: "Chennai Super Kings",
      opponentLogo: "/Chennai_Super_Kings_Logo.svg.png",
      date: "April 12, 2025",
      time: "7:30 PM IST",
      venue: "Wankhede Stadium, Mumbai",
      ticketsAvailable: true,
    },
    {
      id: 2,
      opponent: "Royal Challengers Bangalore",
      opponentLogo: "/rcb_logo.png",
      date: "April 16, 2025",
      time: "3:30 PM IST",
      venue: "M. Chinnaswamy Stadium, Bangalore",
      ticketsAvailable: true,
    },
    {
      id: 3,
      opponent: "Delhi Capitals",
      opponentLogo: "/Delhi_Capitals.svg.png",
      date: "April 20, 2025",
      time: "7:30 PM IST",
      venue: "Wankhede Stadium, Mumbai",
      ticketsAvailable: false,
    },
  ]

  return (
    <div className="grid gap-6">
      {upcomingMatches.map((match) => (
        <Card key={match.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center">
              <div className="p-6">
                <div className="flex items-center flex-wrap gap-4 mb-4">
                  <div className="flex items-center">
                    {/* Mumbai Indians Logo */}
                    <Image
                      src="/mumbai-indians-logo.svg"
                      alt="Mumbai Indians"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                    <span className="mx-3 text-xl font-bold">VS</span>
                    {/* Opponent Logo */}
                    <div className="relative w-[80px] h-[80px]">
                      <Image
                        src={match.opponentLogo || "/placeholder.svg"}
                        alt={match.opponent}
                        fill
                        className="object-contain"
                      />
                    </div>
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
                  <div className="sm:col-span-2">
                    <span className="text-sm">{match.venue}</span>
                  </div>
                </div>
              </div>
              <div className="bg-muted p-6 flex flex-col items-center justify-center gap-2 text-center">
                <div className="text-sm font-medium">{match.ticketsAvailable ? "Tickets Available" : "Sold Out"}</div>
                <Button variant={match.ticketsAvailable ? "default" : "outline"} disabled={!match.ticketsAvailable}>
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
      <div className="flex justify-center">
        <Link
          href="/matches"
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          View Full Schedule
        </Link>
      </div>
    </div>
  )
}