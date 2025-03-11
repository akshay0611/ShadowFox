import Link from "next/link"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, MessageSquare, Share2 } from "lucide-react"
import FanPoll from "@/components/fan-poll"
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function FanZonePage() {
  // Sample social media posts
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

  // Sample fan photos
  const fanPhotos = [
    { id: 1, image: "/placeholder.svg?height=300&width=300", user: "fan_2023", likes: 256 },
    { id: 2, image: "/placeholder.svg?height=300&width=300", user: "blue_army", likes: 189 },
    { id: 3, image: "/placeholder.svg?height=300&width=300", user: "mi_supporter", likes: 345 },
    { id: 4, image: "/placeholder.svg?height=300&width=300", user: "cricket_lover", likes: 128 },
    { id: 5, image: "/placeholder.svg?height=300&width=300", user: "wankhede_fan", likes: 275 },
    { id: 6, image: "/placeholder.svg?height=300&width=300", user: "mi_forever", likes: 310 },
  ]

  // Sample forum topics
  const forumTopics = [
    { id: 1, title: "Match Analysis: MI vs CSK", replies: 78, views: 1245, lastActive: "2 hours ago" },
    { id: 2, title: "Who should be our next captain?", replies: 156, views: 3421, lastActive: "5 hours ago" },
    { id: 3, title: "Best MI moments of all time", replies: 92, views: 1876, lastActive: "1 day ago" },
    { id: 4, title: "Auction wishlist for next season", replies: 124, views: 2345, lastActive: "3 days ago" },
  ]

  // Sample fan contests
  const fanContests = [
    {
      id: 1,
      title: "Design a MI Fan Jersey",
      description: "Show your creativity by designing a special jersey for MI fans.",
      deadline: "May 15, 2023",
      prize: "Signed MI jersey and match tickets",
      participants: 345,
    },
    {
      id: 2,
      title: "MI Trivia Challenge",
      description: "Test your knowledge about Mumbai Indians history and players.",
      deadline: "May 20, 2023",
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
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mumbai Indians Fan Zone</h1>
            <p className="mx-auto max-w-[700px] mt-4 text-gray-200 md:text-xl">
              Connect with fellow fans, share your MI moments, and participate in exclusive fan activities.
            </p>
          </div>
        </section>

        <section className="w-full py-12 flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="social" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="social">Social Feed</TabsTrigger>
                  <TabsTrigger value="gallery">Fan Gallery</TabsTrigger>
                  <TabsTrigger value="forum">Fan Forum</TabsTrigger>
                  <TabsTrigger value="contests">Fan Contests</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="social" className="mt-0">
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
                          {["twitter", "facebook", "instagram", "youtube"].map((platform) => (
                            <Link
                              key={platform}
                              href={`https://${platform}.com/mipaltan`}
                              className="flex flex-col items-center gap-2"
                            >
                              <div className="rounded-full bg-muted h-12 w-12 flex items-center justify-center hover:bg-blue-100 transition-colors">
                                <Image src={`/${platform}-icon.svg`} alt={platform} width={24} height={24} />
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
                          {["#OneFamily", "#MumbaiIndians", "#MI", "#IPL2023", "#MIvCSK", "#Paltan"].map((tag) => (
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
              </TabsContent>

              <TabsContent value="gallery" className="mt-0">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Fan Photos</h2>
                    <Button>Upload Your Photo</Button>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {fanPhotos.map((photo) => (
                      <div key={photo.id} className="group relative rounded-lg overflow-hidden">
                        <Image
                          src={photo.image || "/placeholder.svg"}
                          alt={`Fan photo by ${photo.user}`}
                          width={300}
                          height={300}
                          className="w-full object-cover aspect-square"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                          <div className="text-white font-medium">@{photo.user}</div>
                          <div className="flex items-center text-white text-sm">
                            <Heart className="h-4 w-4 mr-1 fill-white" />
                            {photo.likes}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center">
                    <Button variant="outline">Load More Photos</Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="forum" className="mt-0">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Fan Forum</h2>
                    <Button>Start New Topic</Button>
                  </div>
                  <Card>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b">
                            <th className="p-4 text-left">Topic</th>
                            <th className="p-4 text-center">Replies</th>
                            <th className="p-4 text-center">Views</th>
                            <th className="p-4 text-center">Last Activity</th>
                          </tr>
                        </thead>
                        <tbody>
                          {forumTopics.map((topic) => (
                            <tr key={topic.id} className="border-b hover:bg-muted/50">
                              <td className="p-4">
                                <Link href={`/fan-zone/forum/${topic.id}`} className="font-medium hover:underline">
                                  {topic.title}
                                </Link>
                              </td>
                              <td className="p-4 text-center">{topic.replies}</td>
                              <td className="p-4 text-center">{topic.views}</td>
                              <td className="p-4 text-center">{topic.lastActive}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Card>
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-lg font-bold mb-4">Forum Guidelines</h3>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>Be respectful to other members of the MI Paltan family.</li>
                      <li>Do not use offensive language or engage in personal attacks.</li>
                      <li>Stay on topic and make sure your posts add value to the discussion.</li>
                      <li>Do not spam or post promotional content without permission.</li>
                      <li>Respect the privacy of players and other forum members.</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="contests" className="mt-0">
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
                           @blue_army&apos;s fantastic photo capturing the IPL 2020 final celebration moment won our
                           hearts and the grand prize!
                          </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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

