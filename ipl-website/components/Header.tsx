"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href;
  };


  const handleLanguageChange = (language: string) => {
    console.log(`Language changed to: ${language}`);
  
  };

  return (
    <>
     
      <div className="bg-gradient-to-r from-[#003087] to-[#1a2a6c] text-white py-3">
        <div className="container flex items-center justify-between px-6 gap-4 flex-wrap">
          <div className="flex items-center gap-4">
            <div className="marquee-container overflow-hidden">
              <span className="text-sm font-bold bg-blue-800 px-3 py-1 rounded-full animate-pulse border border-[#ffd700]">
                TATA WPL 2025 CHAMPION
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex space-x-1">
             
              <Link href="#" onClick={() => handleLanguageChange('English')}>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-[#ffd700] text-[#003087] border-[#ffd700] hover:bg-[#f0c800] font-medium transition-all cursor-pointer"
                >
                  English
                </Button>
              </Link>
              <Link href="#" onClick={() => handleLanguageChange('Hindi')}>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-transparent text-white border-white hover:bg-[#ffd700] hover:text-[#003087] transition-all cursor-pointer"
                >
                  Hindi
                </Button>
              </Link>
              <Link href="#" onClick={() => handleLanguageChange('Marathi')}>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-transparent text-white border-white hover:bg-[#ffd700] hover:text-[#003087] transition-all cursor-pointer"
                >
                  Marathi
                </Button>
              </Link>
            </div>
            
           
            <Link href="/tickets">
              <Button
                variant="outline"
                size="sm"
                className="bg-[#ffd700] text-[#003087] border-[#ffd700] hover:bg-[#f0c800] font-medium transition-all cursor-pointer"
              >
                Book Tickets
              </Button>
            </Link>
            <Link href="/shop">
              <Button
                variant="outline"
                size="sm"
                className="bg-[#003087] text-white border-[#003087] hover:bg-[#00256e] transition-all cursor-pointer"
              >
                MI Shop
              </Button>
            </Link>
            <Link href="/membership">
              <Button
                variant="outline"
                size="sm"
                className="bg-transparent text-white border-white hover:bg-[#ffd700] hover:text-[#003087] transition-all cursor-pointer"
              >
                Membership
              </Button>
            </Link>
            <Link href="/get-started">
              <Button
                variant="outline"
                size="sm"
                className="bg-[#ffd700] text-[#003087] border-[#ffd700] hover:bg-[#f0c800] font-medium transition-all cursor-pointer"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>

   
      <header className="sticky top-0 z-50 w-full border-b border-blue-900 bg-gradient-to-r from-[#1a2a6c] to-[#003087] shadow-lg">
        <div className="container flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3 group">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative overflow-hidden rounded-full border-2 border-[#ffd700] shadow-md transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/mumbai-indians-logo.svg"
                  alt="Mumbai Indians Logo"
                  width={50}
                  height={50}
                  priority
                  className="h-12 w-12"
                />
              </div>
              <span
                className="text-3xl font-extrabold tracking-wide transition-all duration-300 hover:text-white group-hover:scale-105"
                style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#ffd700" }}
              >
                Mumbai Indians
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {["Home", "Team", "Matches", "Stats", "News", "Fan Zone", "Auctions"].map((item, index) => {
              const href = item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`;
              return (
                <Link
                  key={index}
                  href={href}
                  className={`text-base font-medium text-white transition duration-300 hover:text-[#ffd700] relative
                    ${isActive(href) 
                      ? "text-[#ffd700] font-semibold after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[3px] after:bg-[#ffd700] after:rounded-full" 
                      : ""}
                  `}
                >
                  {item}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-blue-800 md:hidden transition-all cursor-pointer"
              aria-label="Open menu"
              onClick={() => console.log("Menu opened")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="text-[#ffd700] border-[#ffd700] hover:bg-[#ffd700] hover:text-[#003087] transition-all cursor-pointer"
              onClick={() => console.log("Search clicked")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}