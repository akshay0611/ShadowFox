import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function FanContestsPage() {

  const fanContests = [
    {
      id: 1,
      title: "Design a MI Fan Jersey",
      description: "Show your creativity by designing a special jersey for MI fans.",
      deadline: "May 15, 2025",
      prize: "Signed MI jersey and match tickets",
      participants: 345,
    },
    {
      id: 2,
      title: "MI Trivia Challenge",
      description: "Test your knowledge about Mumbai Indians history and players.",
      deadline: "May 20, 2025",
      prize: "Meet & Greet with MI players",
      participants: 567,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white flex justify-center items-center">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Fan Contests</h1>
            <p className="mx-auto max-w-[700px] mt-4 text-gray-200 md:text-xl">
              Participate in exciting contests and win exclusive Mumbai Indians merchandise and experiences.
            </p>
          </div>
        </section>

        <section className="w-full py-12 flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Fan Contests & Activities</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {fanContests.map((contest) => (
                  <Card key={contest.id}>
                    <CardHeader>
                      <CardTitle>{contest.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{contest.description}</p>
                      <div className="space-y-2">
                        <div className="grid grid-cols-[auto_1fr] gap-2">
                          <span className="font-medium">Deadline:</span>
                          <span>{contest.deadline}</span>
                        </div>
                        <div className="grid grid-cols-[auto_1fr] gap-2">
                          <span className="font-medium">Prize:</span>
                          <span>{contest.prize}</span>
                        </div>
                        <div className="grid grid-cols-[auto_1fr] gap-2">
                          <span className="font-medium">Participants:</span>
                          <span>{contest.participants}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Enter Contest</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Past Contest Winners</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row gap-4 md:items-center p-4 border rounded-lg">
                      <div className="flex-shrink-0">
                        <Image
                          src="/placeholder.svg?height=100&width=100"
                          alt="Winner"
                          width={100}
                          height={100}
                          className="rounded-lg"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold">MI Fan of the Year Contest</h3>
                        <p className="text-sm text-muted-foreground mb-2">Winner: @super_mi_fan</p>
                        <p>
                          Congratulations to @super_mi_fan for showcasing exceptional passion for Mumbai Indians and
                          winning the prestigious MI Fan of the Year award!
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 md:items-center p-4 border rounded-lg">
                      <div className="flex-shrink-0">
                        <Image
                          src="/placeholder.svg?height=100&width=100"
                          alt="Winner"
                          width={100}
                          height={100}
                          className="rounded-lg"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold">MI Memorable Moments Photo Contest</h3>
                        <p className="text-sm text-muted-foreground mb-2">Winner: @blue_army</p>
                        <p>
                          @blue_army&apos;s fantastic photo capturing the IPL 2025 final celebration moment won our
                          hearts and the grand prize!
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}