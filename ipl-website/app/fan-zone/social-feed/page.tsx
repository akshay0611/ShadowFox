import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader , CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, MessageSquare, Share2 } from "lucide-react"
import FanPoll from "@/components/fan-poll"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Twitter, Facebook, Instagram, Youtube } from "lucide-react"

export default function SocialFeedPage() {

  const socialPosts = [
    {
      id: 1,
      username: "rohitsharma45",
      name: "Rohit Sharma",
      avatar: "/rohitsharma.avif?height=50&width=50",
      verified: true,
      content: "Great team effort today! Thanks to all the fans for the incredible support. #MumbaiIndians #OneFamily",
      image: "/mumbai-indians-team.jpg?height=400&width=600",
      likes: 45892,
      comments: 2341,
      shares: 8745,
      time: "2 days ago",
    },
    {
      id: 2,
      username: "mumbaiindians",
      name: "Mumbai Indians",
      avatar: "/mumbai-indians-logo.svg",
      verified: true,
      content:
        "Match Day! Mumbai Indians take on Chennai Super Kings at Wankhede Stadium tonight. Let's go Paltan! #MIvCSK #OneFamily",
      image: "/socialfeed2.webp?height=400&width=600",
      likes: 32456,
      comments: 1567,
      shares: 6543,
      time: "3 days ago",
    },
    {
      id: 3,
      username: "jaspritb1",
      name: "Jasprit Bumrah",
      avatar: "/jaspritbumrah.avif?height=50&width=50",
      verified: true,
      content: "Practice session was intense today. Ready for the next challenge! #MumbaiIndians",
      image: "/socialfeed3.avif?height=400&width=600",
      likes: 28754,
      comments: 1245,
      shares: 4532,
      time: "4 days ago",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white flex justify-center items-center">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Social Feed</h1>
            <p className="mx-auto max-w-[700px] mt-4 text-gray-200 md:text-xl">
              Stay updated with the latest posts from Mumbai Indians players, fans, and the team.
            </p>
          </div>
        </section>

        <section className="w-full py-12 flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-[1fr_300px]">
              <div className="space-y-6">
                {socialPosts.map((post) => (
                  <Card key={post.id}>
                    <CardHeader className="p-4 pb-0">
                      <div className="flex items-center gap-3">
                        <Image
                          src={post.avatar || "/placeholder.svg"}
                          alt={post.name}
                          width={60}
                          height={60}
                          className="rounded-full"
                        />
                        <div>
                          <div className="flex items-center gap-1">
                            <span className="font-semibold">{post.name}</span>
                            {post.verified && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-blue-500"
                              >
                                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                                <path d="m9 12 2 2 4-4" />
                              </svg>
                            )}
                          </div>
                          <div className="text-sm text-muted-foreground">@{post.username}</div>
                        </div>
                        <div className="ml-auto text-sm text-muted-foreground">{post.time}</div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <p className="mb-4">{post.content}</p>
                      <div className="rounded-lg overflow-hidden">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt="Post image"
                          width={600}
                          height={400}
                          className="w-full object-cover"
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 border-t">
                      <div className="flex justify-between w-full">
                        <Button variant="ghost" size="sm" className="gap-1">
                          <Heart className="h-4 w-4" />
                          <span>{post.likes.toLocaleString()}</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-1">
                          <MessageSquare className="h-4 w-4" />
                          <span>{post.comments.toLocaleString()}</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-1">
                          <Share2 className="h-4 w-4" />
                          <span>{post.shares.toLocaleString()}</span>
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="space-y-6">
                <Card className="bg-blue-900 text-white">
                  <CardContent className="p-6">
                    <FanPoll />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Follow Mumbai Indians</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-4 gap-4">
                      {[
                        { platform: "twitter", icon: <Twitter className="h-6 w-6" /> },
                        { platform: "facebook", icon: <Facebook className="h-6 w-6" /> },
                        { platform: "instagram", icon: <Instagram className="h-6 w-6" /> },
                        { platform: "youtube", icon: <Youtube className="h-6 w-6" /> },
                      ].map(({ platform, icon }) => (
                        <Link
                          key={platform}
                          href={`https://${platform}.com/mipaltan`}
                          className="flex flex-col items-center gap-2"
                        >
                          <div className="rounded-full bg-muted h-12 w-12 flex items-center justify-center hover:bg-blue-100 transition-colors">
                            {icon}
                          </div>
                          <span className="text-xs capitalize">{platform}</span>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Official Hashtags</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {["#OneFamily", "#MumbaiIndians", "#MI", "#IPL2025", "#MIvCSK", "#Paltan"].map((tag) => (
                        <Link
                          key={tag}
                          href={`/hashtag/${tag.replace("#", "")}`}
                          className="bg-muted px-3 py-1 rounded-full text-sm hover:bg-blue-100 transition-colors"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </CardContent>
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