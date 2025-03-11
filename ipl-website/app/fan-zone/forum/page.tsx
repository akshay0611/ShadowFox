import Link from "next/link"
import { Card} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function FanForumPage() {

  const forumTopics = [
    { id: 1, title: "Match Analysis: MI vs CSK", replies: 78, views: 1245, lastActive: "2 hours ago" },
    { id: 2, title: "Who should be our next captain?", replies: 156, views: 3421, lastActive: "5 hours ago" },
    { id: 3, title: "Best MI moments of all time", replies: 92, views: 1876, lastActive: "1 day ago" },
    { id: 4, title: "Auction wishlist for next season", replies: 124, views: 2345, lastActive: "3 days ago" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white flex justify-center items-center">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Fan Forum</h1>
            <p className="mx-auto max-w-[700px] mt-4 text-gray-200 md:text-xl">
              Connect with fellow fans, discuss strategies, and share your thoughts about Mumbai Indians.
            </p>
          </div>
        </section>

        <section className="w-full py-12 flex justify-center items-center">
          <div className="container px-4 md:px-6">
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}