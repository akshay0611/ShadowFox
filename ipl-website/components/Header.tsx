import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 shadow-md backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between px-6">
        

<div className="flex items-center gap-3">
  <Image
    src="/mumbai-indians-logo.svg"
    alt="Mumbai Indians Logo"
    width={50} 
    height={50} 
    className="h-14 w-14"
  />
  <Link
    href="/"
    className="text-3xl font-extrabold tracking-wide"
    style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#0078bc" }}
  >
    Mumbai Indians
  </Link>
</div>



<nav className="hidden md:flex items-center gap-8">
  {["Home", "Team", "Matches", "Stats", "News", "Fan Zone"].map((item, index) => (
    <Link
      key={index}
      href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
      className="text-base font-medium text-gray-700 transition duration-300 hover:text-[#0078bc]"
    >
      {item}
    </Link>
  ))}
</nav>

      
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden md:flex">
            Sign In
          </Button>
          <Button
            size="sm"
            className="hidden md:flex bg-gradient-to-r from-[#0078bc] to-[#005bb5] text-white shadow-lg hover:opacity-90"
          >
            Join Fan Club
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
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
        </div>
      </div>
    </header>
  );
}