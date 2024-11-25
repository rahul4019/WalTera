import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="py-6">
      <div className="relative">
        <Input
          type="search"
          placeholder="Search for wallpapers..."
          className="w-full pl-10 pr-4 py-2 rounded-full border-accent"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent w-5 h-5" />
        <Button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
          size="sm"
        >
          Search
        </Button>
      </div>
    </div>
  );
}
