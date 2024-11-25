import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { UserCircle } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-background w-full">
      <AppSidebar />
      <SidebarInset className="flex-1">
        <div className="flex flex-col min-h-screen bg-red-200">
          <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex items-center justify-between h-16 mx-auto">
              <div className="flex items-center">
                <SidebarTrigger>
                  {/* <Menu className="w-5 h-5" /> */}
                  <span className="sr-only">Toggle Sidebar</span>
                </SidebarTrigger>
                <h1 className="ml-4 text-2xl font-bold">WallTera</h1>
              </div>
              <Button variant="ghost" size="icon">
                <UserCircle className="w-5 h-5" />
                <span className="sr-only">Sign In</span>
              </Button>
            </div>
          </header>
          <div className="flex-1 overflow-y-auto">
            <div className="container mx-auto">
              {/* <SearchBar /> */}
              {/* <Hero /> */}
              {/* <PopularWallpapers /> */}
            </div>
          </div>
        </div>
      </SidebarInset>
    </main>
  );
}
