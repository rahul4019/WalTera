import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Heart } from "lucide-react";

const popularWallpapers = [
  {
    id: 1,
    title: "Mountain Vista",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=300&fit=crop&crop=edges",
  },
  {
    id: 2,
    title: "Ocean Sunset",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop&crop=edges",
  },
  {
    id: 3,
    title: "Forest Path",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop&crop=edges",
  },
  {
    id: 4,
    title: "City Lights",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=300&fit=crop&crop=edges",
  },
];

export function PopularWallpapers() {
  return (
    <section className="py-6 md:py-12">
      <h2 className="text-3xl font-bold mb-6">Popular Wallpapers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {popularWallpapers.map((wallpaper) => (
          <Card key={wallpaper.id} className="overflow-hidden group">
            <CardContent className="p-0 relative">
              <Image
                src={wallpaper.image}
                alt={wallpaper.title}
                width={400}
                height={300}
                className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex gap-2">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{wallpaper.title}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
