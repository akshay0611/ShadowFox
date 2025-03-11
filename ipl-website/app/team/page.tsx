import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TeamPage() {
  // Sample team data
  const teamCategories = [
    { id: "batsmen", name: "Batsmen" },
    { id: "bowlers", name: "Bowlers" },
    { id: "all-rounders", name: "All-Rounders" },
    { id: "staff", name: "Coaching Staff" },
  ]

  const players = {
    batsmen: [
      {
        id: 1,
        name: "Rohit Sharma",
        role: "Batsman",
        country: "India",
        image: "/rohitsharma.avif",
      },
      {
        id: 2,
        name: "Ishan Kishan",
        role: "Batsman / Wicketkeeper",
        country: "India",
        image: "/default-headshot.png",
      },
      {
        id: 3,
        name: "Suryakumar Yadav",
        role: "Batsman",
        country: "India",
        image: "/suryakumaryadav.avif",
      },
      { id: 4, name: "Tilak Varma", role: "Batsman", country: "India", image: "/tilakverma.avif" },
    ],
    bowlers: [
      {
        id: 5,
        name: "Jasprit Bumrah",
        role: "Bowler",
        country: "India",
        image: "/jaspritbumrah.avif",
      },
      {
        id: 6,
        name: "Jason Behrendorff",
        role: "Bowler",
        country: "Australia",
        image: "/default-headshot.png",
      },
      {
        id: 7,
        name: "Piyush Chawla",
        role: "Bowler",
        country: "India",
        image: "/default-headshot.png",
      },
    ],
    "all-rounders": [
      {
        id: 8,
        name: "Hardik Pandya",
        role: "All-Rounder",
        country: "India",
        image: "/hardikpandya.avif",
      },
      {
        id: 9,
        name: "Cameron Green",
        role: "All-Rounder",
        country: "Australia",
        image: "/default-headshot.png",
      },
      {
        id: 10,
        name: "Tim David",
        role: "All-Rounder",
        country: "Australia",
        image: "/default-headshot.png",
      },
    ],
    staff: [
      {
        id: 11,
        name: "Mark Boucher",
        role: "Head Coach",
        country: "South Africa",
        image: "/default-headshot.png",
      },
      {
        id: 12,
        name: "Zaheer Khan",
        role: "Director of Cricket",
        country: "India",
        image: "/default-headshot.png",
      },
      {
        id: 13,
        name: "Mahela Jayawardene",
        role: "Global Head of Performance",
        country: "Sri Lanka",
        image: "/default-headshot.png",
      },
    ],
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white flex justify-center items-center">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Team</h1>
            <p className="mx-auto max-w-[700px] mt-4 text-gray-200 md:text-xl">
              Get to know the champions who represent Mumbai Indians on the field.
            </p>
          </div>
        </section>

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
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {players[category.id as keyof typeof players].map((player) => (
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
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

