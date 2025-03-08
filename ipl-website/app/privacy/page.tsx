import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Privacy Policy</h1>
            <p className="mx-auto max-w-[700px] mt-4 text-gray-200 md:text-xl">
              Learn how we protect and manage your personal information.
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
                    Mumbai Indians (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, including any other media form, media channel, mobile website, or mobile application related or connected to it (collectively, the &quot;Site&quot;).
                  </p>
                  <p>
                    Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the Site.
                  </p>

                  <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>

                  <h3 className="text-xl font-bold mt-6 mb-3">Personal Data</h3>
                  <p>
                    We may collect personal information that you voluntarily provide to us when you register on the Site, express an interest in obtaining information about us or our products and services, participate in activities on the Site, or otherwise contact us. The personal information we collect may include:
                  </p>
                  <ul className="list-disc pl-6 mt-2 mb-4">
                    <li>Name and contact data (such as email address, phone number, and postal address)</li>
                    <li>Account credentials (such as username and password)</li>
                    <li>Profile information (such as profile picture and preferences)</li>
                    <li>Payment information (such as credit card details for ticket purchases)</li>
                    <li>Feedback and correspondence (such as information you provide in your responses to surveys, when you participate in market research activities, or when you contact us)</li>
                  </ul>

                  <h3 className="text-xl font-bold mt-6 mb-3">Automatically Collected Information</h3>
                  <p>
                    When you visit our Site, we may automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site.
                  </p>

                  <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
                  <p>
                    We use the information we collect in various ways, including to:
                  </p>
                  <ul className="list-disc pl-6 mt-2 mb-4">
                    <li>Provide, operate, and maintain our website</li>
                    <li>Improve, personalize, and expand our website</li>
                    <li>Understand and analyze how you use our website</li>
                    <li>Develop new products, services, features, and functionality</li>
                    <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                    <li>Send you emails</li>
                    <li>Find and prevent fraud</li>
                    <li>Process your ticket purchases and deliver match information</li>
                  </ul>

                  <h2 className="text-2xl font-bold mt-8 mb-4">Sharing Your Information</h2>
                  <p>
                    We may share your information with third parties in the following situations:
                  </p>
                  <ul className="list-disc pl-6 mt-2 mb-4">
                    <li><strong>Business Partners:</strong> We may share your information with our business partners to offer you certain products, services, or promotions.</li>
                    <li><strong>Service Providers:</strong> We may share your information with our service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
                    <li><strong>Legal Requirements:</strong> We may disclose your information where required to do so by law or in response to valid requests by public authorities.</li>
                    <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                    <li><strong>With Your Consent:</strong> We may disclose your personal information for any other purpose with your consent.</li>
                  </ul>

                  <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
                  <p>
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
                  <ul className="list-disc pl-6 mt-2 mb-4">
                    <li>By email: privacy@mumbaiindians.com</li>
                    <li>By visiting our contact page: <Link href="/contact" className="text-primary hover:underline">Contact Us</Link></li>
                    <li>By mail: Mumbai Indians, Wankhede Stadium, Mumbai, Maharashtra, India</li>
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
