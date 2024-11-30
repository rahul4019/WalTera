import { AppSidebar } from "@/components/app-sidebar";
import { Hero } from "@/components/hero";
import { ModeToggle } from "@/components/mode-toggle";
import { PopularWallpapers } from "@/components/popular-wallpapers";
import { SearchBar } from "@/components/search-bar";
import { Button } from "@/components/ui/button";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Menu, UserCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-background w-full">
      <AppSidebar />
      <SidebarInset className="flex-1">
        <div className="flex flex-col min-h-screen">
          <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="max-w-screen-xl flex items-center justify-between h-16 mx-auto">
              <div className="flex items-center">
                <SidebarTrigger>
                  <Menu className="w-5 h-5" />
                  <span className="sr-only">Toggle Sidebar</span>
                </SidebarTrigger>
                <h1 className="ml-4 text-2xl font-bold">WalTera</h1>
              </div>
              <div>
                <Button variant="ghost" size="icon">
                  <UserCircle className="w-5 h-5" />
                  <span className="sr-only">Sign In</span>
                </Button>
                <ModeToggle />
              </div>
            </div>
          </header>
          <div className="flex-1 overflow-y-auto">
            <div className="container mx-auto">
              <SearchBar />
              <Hero />
              <PopularWallpapers />
            </div>
          </div>
        </div>
      </SidebarInset>
    </main>
  );
}
