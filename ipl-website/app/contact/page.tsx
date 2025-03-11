import Header from "@/components/Header";  
import Footer from "@/components/Footer";  
import Link from "next/link";  
import { Card, CardContent } from "@/components/ui/card";  

export default function ContactPage() {  
  return (  
    <div className="flex flex-col min-h-screen">  
      <Header />  
      <main className="flex-1">  
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white flex justify-center items-center">  
          <div className="container px-4 md:px-6 text-center">  
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>  
            <p className="mx-auto max-w-[700px] mt-4 text-gray-200 md:text-xl">  
              Get in touch with our team for any inquiries or support needs.  
            </p>  
          </div>  
        </section>  

        <section className="w-full py-12 flex justify-center items-center ">  
          <div className="container px-4 md:px-6">  
            <Card className="mb-8">  
              <CardContent className="p-6 md:p-8">  
                <div className="prose max-w-none grid grid-cols-1 md:grid-cols-2 gap-8">  
                  {/* Contact Information */}  
                  <div>  
                    <h2 className="text-2xl font-bold mb-4">Office Information</h2>  
                    <ul className="space-y-4">  
                      <li>  
                        <h3 className="font-semibold">Address</h3>  
                        <p>Wankhede Stadium, Mumbai, Maharashtra, India</p>  
                      </li>  
                      <li>  
                        <h3 className="font-semibold">Phone</h3>  
                        <p>+91 22 1234 5678</p>  
                      </li>  
                      <li>  
                        <h3 className="font-semibold">Email</h3>  
                        <p>  
                          <Link href="mailto:support@mumbaiindians.com" className="text-primary hover:underline">  
                            support@mumbaiindians.com  
                          </Link>  
                        </p>  
                      </li>  
                    </ul>  

                    <h2 className="text-2xl font-bold mt-8 mb-4">Business Hours</h2>  
                    <ul className="list-disc pl-6">  
                      <li>Monday-Friday: 9 AM - 6 PM IST</li>  
                      <li>Saturday: 10 AM - 4 PM IST</li>  
                      <li>Sunday: Closed</li>  
                    </ul>  
                  </div>  

                  {/* Contact Form */}  
                  <div>  
                    <h2 className="text-2xl font-bold mb-4">Send a Message</h2>  
                    <form className="space-y-4">  
                      <div>  
                        <label className="block font-medium mb-2">Name</label>  
                        <input  
                          type="text"  
                          className="w-full p-2 border rounded"  
                          placeholder="Enter your name"  
                          required  
                        />  
                      </div>  
                      <div>  
                        <label className="block font-medium mb-2">Email</label>  
                        <input  
                          type="email"  
                          className="w-full p-2 border rounded"  
                          placeholder="Enter your email"  
                          required  
                        />  
                      </div>  
                      <div>  
                        <label className="block font-medium mb-2">Subject</label>  
                        <input  
                          type="text"  
                          className="w-full p-2 border rounded"  
                          placeholder="Enter subject"  
                          required  
                        />  
                      </div>  
                      <div>  
                        <label className="block font-medium mb-2">Message</label>  
                        <textarea  
                          className="w-full p-2 border rounded h-32"  
                          placeholder="Type your message here"  
                          required  
                        ></textarea>  
                      </div>  
                      <button  
                        type="submit"  
                        className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition"  
                      >  
                        Send Message  
                      </button>  
                    </form>  
                  </div>  
                </div>  

                {/* Map */}  
                <div className="mt-12">  
                  <h2 className="text-2xl font-bold mb-4">Our Location</h2>  
                  <div className="aspect-video w-full">  
                    <iframe  
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.2376210014043!2d72.82322931537754!3d18.9386879871717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e801f6b3eb%3A0x6b4e5a7eacc9e083!2sWankhede%20Stadium!5e0!3m2!1sen!2sin!4v1628682346859!5m2!1sen!2sin"  
                      className="w-full h-full border-0"  
                      allowFullScreen  
                      loading="lazy"  
                    ></iframe>  
                  </div>  
                </div>  
              </CardContent>  
            </Card>  
          </div>  
        </section>  
      </main>  
      <Footer />  
    </div>  
  );  
}  
