"use client" // Add this directive since we're using client-side interactivity

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, X } from "lucide-react" 
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useState } from "react" 

export default function FanGalleryPage() {

  const fanPhotos = [
    { id: 1, image: "/fangallery_1.jpg?height=300&width=300", user: "fan_2023", likes: 256 },
    { id: 2, image: "/fangallery_2.webp?height=300&width=300", user: "blue_army", likes: 189 },
    { id: 3, image: "/fangallery_3.jpeg?height=300&width=300", user: "mi_supporter", likes: 345 },
    { id: 4, image: "/fangallery_4.webp?height=300&width=300", user: "cricket_lover", likes: 128 },
    { id: 5, image: "/fangallery_5.avif?height=300&width=300", user: "wankhede_fan", likes: 275 },
    { id: 6, image: "/fangallery_6.jpeg?height=300&width=300", user: "mi_forever", likes: 310 },
  ]


  const [selectedImage, setSelectedImage] = useState<string | null>(null)


  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl)
  }


  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white flex justify-center items-center">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Fan Gallery</h1>
            <p className="mx-auto max-w-[700px] mt-4 text-gray-200 md:text-xl">
              Explore and share your favorite Mumbai Indians moments with the Paltan.
            </p>
          </div>
        </section>

        <section className="w-full py-12 flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Fan Photos</h2>
                <Button>Upload Your Photo</Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {fanPhotos.map((photo) => (
                  <div
                    key={photo.id}
                    className="group relative rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => handleImageClick(photo.image)}
                  >
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
          </div>
        </section>
      </main>

    
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden">
            <button
              className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              onClick={closeModal}
            >
              <X className="h-6 w-6 text-black" />
            </button>
            <Image
              src={selectedImage}
              alt="Selected Fan Photo"
              width={1200}
              height={800}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}