import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Terms of Service</h1>
            <p className="mx-auto max-w-[700px] mt-4 text-gray-200 md:text-xl">
              Understand the rules and guidelines for using our platform.
            </p>
          </div>
        </section>
        <section className="w-full py-12 flex justify-center items-center">  
          <div className="container px-4 md:px-6">  
            <Card className="mb-8">  
              <CardContent className="p-6 md:p-8">  
                <div className="prose max-w-none">  
                  <h2 className="text-2xl font-bold mb-4">Introduction</h2>  
                  <p>  
                    Welcome to Mumbai Indians (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). These Terms of Service govern your access to and use of our website, mobile application, and related services (collectively, the &quot;Platform&quot;). By accessing or using the Platform, you agree to comply with these terms.  
                  </p>  

                  <h2 className="text-2xl font-bold mt-8 mb-4">Eligibility</h2>  
                  <p>  
                    You must be at least 18 years old to use our Platform. By using the Platform, you represent that you meet this age requirement and agree to provide accurate information during registration.  
                  </p>  

                  <h2 className="text-2xl font-bold mt-8 mb-4">User Responsibilities</h2>  
                  <p>  
                    When using our Platform, you agree to:  
                  </p>  
                  <ul className="list-disc pl-6 mt-2 mb-4">  
                    <li>Use the Platform only for lawful purposes</li>  
                    <li>Not engage in fraudulent activities or unauthorized transactions</li>  
                    <li>Not attempt to disrupt the Platform&apos;s functionality</li>  
                    <li>Maintain the confidentiality of your account credentials</li>  
                  </ul>  

                  <h2 className="text-2xl font-bold mt-8 mb-4">Intellectual Property</h2>  
                  <p>  
                    All content on the Platform, including logos, text, and graphics, is the property of Mumbai Indians or its licensors. You may not reproduce, distribute, or modify any content without explicit written permission.  
                  </p>  

                  <h2 className="text-2xl font-bold mt-8 mb-4">Ticket Purchases</h2>  
                  <p>  
                    Tickets purchased through our Platform are subject to:  
                  </p>  
                  <ul className="list-disc pl-6 mt-2 mb-4">  
                    <li>Non-transferability unless explicitly allowed</li>  
                    <li>Stadium rules and regulations during matches</li>  
                    <li>No refunds except as required by law</li>  
                  </ul>  

                  <h2 className="text-2xl font-bold mt-8 mb-4">Termination</h2>  
                  <p>  
                    We reserve the right to suspend or terminate your access to the Platform at our discretion, particularly for violations of these terms.  
                  </p>  

                  <h2 className="text-2xl font-bold mt-8 mb-4">Limitation of Liability</h2>  
                  <p>  
                    Mumbai Indians shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Platform.  
                  </p>  

                  <h2 className="text-2xl font-bold mt-8 mb-4">Governing Law</h2>  
                  <p>  
                    These terms are governed by the laws of India. Any disputes shall be resolved in the courts of Mumbai, Maharashtra.  
                  </p>  

                  <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>  
                  <p>  
                    For questions about these Terms of Service:  
                  </p>  
                  <ul className="list-disc pl-6 mt-2 mb-4">  
                    <li>Email: legal@mumbaiindians.com</li>  
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