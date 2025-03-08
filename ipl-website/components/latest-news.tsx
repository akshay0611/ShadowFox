import Link from "next/link"
import Image from "next/image"
import { Calendar } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function LatestNews() {
  // Sample news data
  const newsItems = [
    {
      id: 1,
      title: "Mumbai Indians announce squad for IPL 2025",
      excerpt:
        "The five-time champions have announced their squad for the upcoming IPL season with some exciting new additions.",
      image: "/placeholder.svg?height=200&width=400",
      date: "March 25, 2025",
      category: "Team News",
    },
    {
      id: 2,
      title: "Practice sessions intensify as season opener approaches",
      excerpt:
        "The team has been training rigorously at Wankhede Stadium ahead of their first match against Chennai Super Kings.",
      image: "/placeholder.svg?height=200&width=400",
      date: "March 28, 2025",
      category: "Training",
    },
    {
      id: 3,
      title: "Player Spotlight: Star all-rounder ready for comeback",
      excerpt:
        "After recovering from an injury, our star all-rounder is fit and ready to make a strong comeback this season.",
      image: "/placeholder.svg?height=200&width=400",
      date: "March 30, 2025",
      category: "Player News",
    },
  ]

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
      {newsItems.map((news) => (
        <Card key={news.id}>
          <div className="relative h-48 overflow-hidden">
            <Image
              src={news.image || "/placeholder.svg"}
              alt={news.title}
              fill
              className="object-cover transition-transform hover:scale-105"
            />
            <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs py-1 px-2 rounded">
              {news.category}
            </div>
          </div>
          <CardContent className="pt-4">
            <div className="flex items-center text-sm text-muted-foreground mb-2">
              <Calendar className="h-4 w-4 mr-1" />
              {news.date}
            </div>
            <h3 className="font-bold text-lg mb-2">{news.title}</h3>
            <p className="text-sm text-muted-foreground">{news.excerpt}</p>
          </CardContent>
          <CardFooter className="pt-0">
            <Link href={`/news/${news.id}`} className="text-primary hover:underline text-sm">
              Read More →
            </Link>
          </CardFooter>
        </Card>
      ))}
      <div className="md:col-span-3 flex justify-center mt-4">
        <Link
          href="/news"
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          View All News
        </Link>
      </div>
    </div>
  )
}

