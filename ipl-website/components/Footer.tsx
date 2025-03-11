import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6 md:py-12 flex justify-center items-center">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
          <div className="flex justify-center items-center pl-4">
  <Image src="/mumbai-indians-logo.svg" alt="Mumbai Indians Logo" width={80} height={80} />
</div>


            <p className="text-sm text-muted-foreground">
              The most successful team in IPL history with 5 championship titles.
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-sm font-medium">Quick Links</div>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                Home
              </Link>
              <Link href="/team" className="text-sm text-muted-foreground hover:text-foreground">
                Team
              </Link>
              <Link href="/matches" className="text-sm text-muted-foreground hover:text-foreground">
                Matches
              </Link>
              <Link href="/stats" className="text-sm text-muted-foreground hover:text-foreground">
                Statistics
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <div className="text-sm font-medium">Fan Zone</div>
            <nav className="flex flex-col gap-2">
              <Link href="/fan-zone/forum" className="text-sm text-muted-foreground hover:text-foreground">
                Fan Forum
              </Link>
              <Link href="/fan-zone/gallery" className="text-sm text-muted-foreground hover:text-foreground">
                Fan Gallery
              </Link>
              <Link href="/fan-zone/contests" className="text-sm text-muted-foreground hover:text-foreground">
                Contests
              </Link>
              <Link href="/fan-zone/social-feed" className="text-sm text-muted-foreground hover:text-foreground">
                Social Feed
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <div className="text-sm font-medium">Legal</div>
            <nav className="flex flex-col gap-2">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="/cookie" className="text-sm text-muted-foreground hover:text-foreground">
                Cookie Policy
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-xs text-muted-foreground">
          Made with ❤️ by Akshay
          </p>
          <p className="text-xs text-muted-foreground">
            Mumbai Indians and the Mumbai Indians logo are registered trademarks of Mumbai Indians Cricket Private
            Limited.
          </p>
        </div>
      </div>
    </footer>
  );
}