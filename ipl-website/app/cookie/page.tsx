import Header from "@/components/Header";  
import Footer from "@/components/Footer";  
import Link from "next/link";  
import { Card, CardContent } from "@/components/ui/card";  
  
export default function CookiePage() {  
  return (  
    <div className="flex flex-col min-h-screen">  
      <Header />  
      <main className="flex-1">  
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white flex justify-center items-center">  
          <div className="container px-4 md:px-6 text-center">  
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Cookie Policy</h1>  
            <p className="mx-auto max-w-[700px] mt-4 text-gray-200 md:text-xl">  
              Learn how we use cookies to enhance your browsing experience.  
            </p>  
          </div>  
        </section>  
  
        <section className="w-full py-12 flex justify-center items-center">  
          <div className="container px-4 md:px-6">  
            <Card className="mb-8">  
              <CardContent className="p-6 md:p-8">  
                <div className="prose max-w-none">  
                  <h2 className="text-2xl font-bold mb-4">About Cookies</h2>  
                  <p>  
                    Mumbai Indians (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) uses cookies to improve your experience on our website. Cookies are small text files stored on your device that help us analyze website traffic, remember preferences, and optimize functionality.  
                  </p>  
  
                  <h2 className="text-2xl font-bold mt-8 mb-4">Types of Cookies We Use</h2>  
  
                  <h3 className="text-xl font-bold mt-6 mb-3">Necessary Cookies</h3>  
                  <p>  
                    Essential for basic site functionality:  
                  </p>  
                  <ul className="list-disc pl-6 mt-2 mb-4">  
                    <li>Maintain user sessions</li>  
                    <li>Enable secure login processes</li>  
                    <li>Remember privacy preferences</li>  
                  </ul>  
  
                  <h3 className="text-xl font-bold mt-6 mb-3">Analytics Cookies</h3>  
                  <p>  
                    Help us understand website usage:  
                  </p>  
                  <ul className="list-disc pl-6 mt-2 mb-4">  
                    <li>Track page visits and navigation patterns</li>  
                    <li>Measure content popularity</li>  
                    <li>Analyze referral sources</li>  
                  </ul>  
  
                  <h3 className="text-xl font-bold mt-6 mb-3">Marketing Cookies</h3>  
                  <p>  
                    Used for personalized advertising:  
                  </p>  
                  <ul className="list-disc pl-6 mt-2 mb-4">  
                    <li>Display relevant promotions</li>  
                    <li>Retarget visitors across platforms</li>  
                    <li>Measure ad campaign effectiveness</li>  
                  </ul>  
  
                  <h2 className="text-2xl font-bold mt-8 mb-4">Managing Cookies</h2>  
                  <p>  
                    You can control cookie settings through:  
                  </p>  
                  <ul className="list-disc pl-6 mt-2 mb-4">  
                    <li>Browser settings (disable/enable cookies)</li>  
                    <li>Third-party opt-out tools (e.g., AdChoices)</li>  
                    <li>Our cookie consent banner preferences</li>  
                  </ul>  
                  <p>  
                    Note: Disabling cookies may affect website functionality.  
                  </p>  
  
                  <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>  
                  <p>  
                    For cookie-related inquiries:  
                  </p>  
                  <ul className="list-disc pl-6 mt-2 mb-4">  
                    <li>Email: privacy@mumbaiindians.com</li>  
                    <li>Visit our <Link href="/contact" className="text-primary hover:underline">Contact Page</Link></li>  
                    <li>Mail: Mumbai Indians, Wankhede Stadium, Mumbai, Maharashtra, India</li>  
                  </ul>  
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