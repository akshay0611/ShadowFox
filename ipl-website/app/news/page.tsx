"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");


  const newsArticles = [
    {
      id: 1,
      title: "Suryakumar Yadav's Century Powers Mumbai Indians to Victory",
      summary: "Suryakumar Yadav scored a brilliant 112* off just 51 balls as Mumbai Indians defeated Royal Challengers Bangalore by 45 runs.",
      date: "March 15, 2025",
      category: "match",
      image: "/news/sky-century.jpg",
      featured: true,
    },
    {
      id: 2,
      title: "Mumbai Indians Sign Australian Fast Bowler for Remainder of IPL 2025",
      summary: "Team management announces the signing of Australian pace sensation Josh Richards as a replacement for the injured Jofra Archer.",
      date: "March 12, 2025",
      category: "team",
      image: "/news/new-signing.jpg",
      featured: true,
    },
    {
      id: 3,
      title: "Rohit Sharma to Miss Next Match Due to Minor Injury",
      summary: "Captain Rohit Sharma will sit out the upcoming match against Chennai Super Kings due to a hamstring niggle. Hardik Pandya to lead the team.",
      date: "March 10, 2025",
      category: "team",
      image: "/news/rohit-injury.jpg",
      featured: false,
    },
    {
      id: 4,
      title: "Mumbai Indians Launch New Community Initiative for Young Cricketers",
      summary: "The franchise announces a new grassroots program aimed at discovering and nurturing cricket talent across Maharashtra.",
      date: "March 8, 2025",
      category: "community",
      image: "/news/community-program.jpg",
      featured: false,
    },
    {
      id: 5,
      title: "Buyman Chawla Named IPL's Emerging Player of the Month",
      summary: "Young spinner Buyman Chawla receives accolades for his impressive performance, taking 18 wickets in the tournament so far.",
      date: "March 5, 2025",
      category: "awards",
      image: "/news/chawla-award.jpg",
      featured: false,
    },
    {
      id: 6,
      title: "Mumbai Indians Announce Special Fan Day at Wankhede Stadium",
      summary: "Team to host an exclusive meet and greet session with players for select fans ahead of the crucial playoff stages.",
      date: "March 3, 2025",
      category: "fans",
      image: "/news/fan-day.jpg",
      featured: false,
    },
    {
      id: 7,
      title: "Training Intensity Increases as Playoffs Approach",
      summary: "Coach Mark Boucher puts the team through specialized training sessions focusing on death bowling and power hitting.",
      date: "February 28, 2025",
      category: "team",
      image: "/news/training.jpg",
      featured: false,
    },
    {
      id: 8,
      title: "Ishan Kishan Speaks About His Form Revival This Season",
      summary: "In an exclusive interview, Ishan Kishan discusses his preparation and mindset that has led to his consistent performance.",
      date: "February 25, 2025",
      category: "interview",
      image: "/news/ishan-interview.jpg",
      featured: false,
    },
  ];


  const filteredArticles = newsArticles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || article.category === activeCategory;
    return matchesSearch && matchesCategory;
  });


  const featuredArticles = newsArticles.filter(article => article.featured);


  const categories = [
    { id: "all", name: "All News" },
    { id: "match", name: "Match Updates" },
    { id: "team", name: "Team News" },
    { id: "interview", name: "Interviews" },
    { id: "community", name: "Community" },
    { id: "awards", name: "Awards" },
    { id: "fans", name: "Fan Zone" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white flex justify-center items-center">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Latest News</h1>
            <p className="mx-auto max-w-[700px] mt-4 text-gray-200 md:text-xl">
              Stay updated with the latest news and updates about Mumbai Indians.
            </p>
            <div className="mt-6 max-w-md mx-auto">
              <Input
                type="search"
                placeholder="Search news..."
                className="bg-white/10 text-white placeholder:text-gray-300 border-white/20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </section>

      
        {featuredArticles.length > 0 && (
          <section className="w-full py-8 bg-gray-50">
            <div className="container px-4 md:px-6 mx-auto">
              <h2 className="text-2xl font-bold mb-6">Featured Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredArticles.map((article) => (
                  <div 
                    key={article.id} 
                    className="relative overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow"
                  >
                    <div className="h-64 bg-gray-200 relative">
                      <div className="w-full h-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white">
                        <span className="text-lg font-medium">{article.image.split('/').pop()?.split('.')[0]}</span>
                      </div>
                      <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                        Featured
                      </div>
                    </div>
                    <div className="p-4">
                      <span className="text-sm text-gray-500">{article.date} | {categories.find(cat => cat.id === article.category)?.name || 'Uncategorized'}</span>
                      <h3 className="text-xl font-bold mt-1">{article.title}</h3>
                      <p className="mt-2 text-gray-600">{article.summary}</p>
                      <Button className="mt-4" variant="outline" asChild>
                        <Link href={`/news/${article.id}`}>Read More</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

  
        <section className="w-full py-12">
          <div className="container px-4 md:px-6 mx-auto">
            <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
              <div className="mb-6 overflow-x-auto">
                <TabsList className="h-auto p-1">
                  {categories.map((category) => (
                    <TabsTrigger key={category.id} value={category.id} className="px-4 py-2">
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              <TabsContent value={activeCategory} className="mt-0">
                {filteredArticles.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredArticles.map((article) => (
                      <div key={article.id} className="overflow-hidden rounded-lg shadow bg-white hover:shadow-md transition-shadow">
                        <div className="h-48 bg-gray-200 relative">
                          <div className="w-full h-full bg-gradient-to-r from-blue-300 to-blue-500 flex items-center justify-center text-white">
                            <span className="text-sm font-medium">{article.image.split('/').pop()?.split('.')[0]}</span>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs text-gray-500">{article.date}</span>
                            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                              {categories.find(cat => cat.id === article.category)?.name || 'Uncategorized'}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold line-clamp-2">{article.title}</h3>
                          <p className="text-sm text-gray-600 mt-2 line-clamp-3">{article.summary}</p>
                          <Button className="mt-4 w-full" variant="outline" size="sm" asChild>
                            <Link href={`/news/${article.id}`}>Read Full Story</Link>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500">No news articles found. Try a different search or category.</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>

    
        <section className="w-full py-12 bg-blue-900 text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="mb-6">Get the latest Mumbai Indians news and updates delivered directly to your inbox.</p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-white/10 border-white/20 placeholder:text-gray-300" 
                />
                <Button className="bg-white text-blue-900 hover:bg-blue-50">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}