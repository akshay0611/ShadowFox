import Link from "next/link"
import Image from "next/image"
import { Play } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function TeamHighlights() {
  // Sample highlights data
  const highlights = [
    {
      id: 1,
      title: "Best catches of IPL 2022",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "5:24",
    },
    {
      id: 2,
      title: "Mumbai Indians vs Chennai Super Kings | Match Highlights",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "8:15",
    },
    {
      id: 3,
      title: "Top 10 sixes by Mumbai Indians",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "4:30",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {highlights.map((highlight) => (
          <Card key={highlight.id} className="overflow-hidden group">
            <CardContent className="p-0">
              <Link href={`/videos/${highlight.id}`}>
                <div className="relative">
                  <Image
                    src={highlight.thumbnail || "/placeholder.svg"}
                    alt={highlight.title}
                    width={350}
                    height={200}
                    className="w-full object-cover aspect-video"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <Play className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {highlight.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">{highlight.title}</h3>
                </div>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          href="/videos"
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          View All Videos
        </Link>
      </div>
    </div>
  )
}

