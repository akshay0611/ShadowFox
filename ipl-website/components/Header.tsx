import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/mumbai-indians-logo.svg"
            alt="Mumbai Indians Logo"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          {/* Make "Mumbai Indians" clickable and change its color to #0078bc */}
          <Link href="/" className="text-xl font-bold" style={{ color: "#0078bc" }}>
            Mumbai Indians
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/team" className="text-sm font-medium transition-colors hover:text-primary">
            Team
          </Link>
          <Link href="/matches" className="text-sm font-medium transition-colors hover:text-primary">
            Matches
          </Link>
          <Link href="/stats" className="text-sm font-medium transition-colors hover:text-primary">
            Stats
          </Link>
          <Link href="/news" className="text-sm font-medium text-primary">
            News
          </Link>
          <Link href="/fan-zone" className="text-sm font-medium transition-colors hover:text-primary">
            Fan Zone
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden md:flex">
            Sign In
          </Button>
          {/* Change the "Join Fan Club" button color to #0078bc */}
          <Button
            size="sm"
            className="hidden md:flex"
            style={{ backgroundColor: "#0078bc", color: "white" }}
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