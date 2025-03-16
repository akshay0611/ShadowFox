import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-gradient-to-b from-[#1a2a6c] to-[#003087] text-white py-8 md:py-12">
      <div className="container px-4 md:px-6 mx-auto">
     
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 pb-6 border-b border-blue-700">
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <div className="relative overflow-hidden rounded-full border-2 border-[#ffd700] shadow-lg">
              <Image src="/mumbai-indians-logo.svg" alt="Mumbai Indians Logo" width={80} height={80} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#ffd700]">Mumbai Indians</h2>
              <p className="text-sm text-blue-200">TATA WPL 2025 CHAMPION</p>
            </div>
          </div>
          
          <div className="flex gap-4">
           
            <Link href="https://twitter.com/mipaltan" aria-label="Twitter" className="bg-blue-800 hover:bg-[#ffd700] hover:text-[#003087] p-2 rounded-full transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </Link>
            <Link href="https://www.facebook.com/mumbaiindians" aria-label="Facebook" className="bg-blue-800 hover:bg-[#ffd700] hover:text-[#003087] p-2 rounded-full transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </Link>
            <Link href="https://www.instagram.com/mumbaiindians" aria-label="Instagram" className="bg-blue-800 hover:bg-[#ffd700] hover:text-[#003087] p-2 rounded-full transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </Link>
            <Link href="https://www.youtube.com/mumbaiindians" aria-label="YouTube" className="bg-blue-800 hover:bg-[#ffd700] hover:text-[#003087] p-2 rounded-full transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </Link>
          </div>
        </div>
        
      
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="text-sm font-bold text-[#ffd700] uppercase tracking-wider">About Us</div>
            <p className="text-sm text-blue-100">
              The most successful team in IPL history with 5 championship titles.
            </p>
            <div className="pt-2">
              <Link href="/about" className="text-xs text-blue-200 hover:text-[#ffd700] transition-colors inline-flex items-center gap-1">
                Learn more about our history 
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
              </Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="text-sm font-bold text-[#ffd700] uppercase tracking-wider">Quick Links</div>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-blue-100 hover:text-[#ffd700] transition-colors flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
                Home
              </Link>
              <Link href="/team" className="text-sm text-blue-100 hover:text-[#ffd700] transition-colors flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
                Team
              </Link>
              <Link href="/matches" className="text-sm text-blue-100 hover:text-[#ffd700] transition-colors flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
                Matches
              </Link>
              <Link href="/stats" className="text-sm text-blue-100 hover:text-[#ffd700] transition-colors flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
                Statistics
              </Link>
            </nav>
          </div>
          
          <div className="space-y-4">
            <div className="text-sm font-bold text-[#ffd700] uppercase tracking-wider">Fan Zone</div>
            <nav className="flex flex-col gap-2">
              <Link href="/fan-zone/forum" className="text-sm text-blue-100 hover:text-[#ffd700] transition-colors flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
                Fan Forum
              </Link>
              <Link href="/fan-zone/gallery" className="text-sm text-blue-100 hover:text-[#ffd700] transition-colors flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
                Fan Gallery
              </Link>
              <Link href="/fan-zone/contests" className="text-sm text-blue-100 hover:text-[#ffd700] transition-colors flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
                Contests
              </Link>
              <Link href="/fan-zone/social-feed" className="text-sm text-blue-100 hover:text-[#ffd700] transition-colors flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
                Social Feed
              </Link>
            </nav>
          </div>
          
          <div className="space-y-4">
            <div className="text-sm font-bold text-[#ffd700] uppercase tracking-wider">Legal</div>
            <nav className="flex flex-col gap-2">
              <Link href="/privacy" className="text-sm text-blue-100 hover:text-[#ffd700] transition-colors flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-blue-100 hover:text-[#ffd700] transition-colors flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
                Terms of Service
              </Link>
              <Link href="/cookie" className="text-sm text-blue-100 hover:text-[#ffd700] transition-colors flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
                Cookie Policy
              </Link>
              <Link href="/contact" className="text-sm text-blue-100 hover:text-[#ffd700] transition-colors flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
        
       
        <div className="mt-8 border-t border-blue-700 pt-6 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-xs text-blue-200">
            Made with <span className="text-red-500">❤️</span> by Akshay
          </p>
          <p className="text-xs text-blue-200">
            © {new Date().getFullYear()} Mumbai Indians. All rights reserved. Mumbai Indians and the Mumbai Indians logo are registered trademarks of Mumbai Indians Cricket Private Limited.
          </p>
        </div>
      </div>
    </footer>
  );
}