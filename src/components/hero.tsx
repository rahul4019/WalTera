"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const carouselItems = [
  {
    id: 1,
    title: "Mountain Landscape",
    description: "Serene views of majestic peaks",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop&crop=edges",
  },
  {
    id: 2,
    title: "Cityscape at Night",
    description: "Urban beauty in the dark",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&h=600&fit=crop&crop=edges",
  },
  {
    id: 3,
    title: "Tropical Beach",
    description: "Paradise found on sandy shores",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=600&fit=crop&crop=edges",
  },
];

export function Hero() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  );

  return (
    <section className="py-6 md:py-12 -mx-4 sm:-mx-6 lg:-mx-8">
      <div className="px-4 sm:px-6 lg:px-8">
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {carouselItems.map((item) => (
              <CarouselItem key={item.id}>
                <Card className="border-0 overflow-hidden">
                  <CardContent className="flex aspect-[2/1] items-center justify-center p-0 relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={1200}
                      height={600}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h2 className="text-3xl font-bold mb-2">{item.title}</h2>
                      <p className="text-lg mb-4">{item.description}</p>
                      <Button
                        variant="default"
                        className="bg-accent text-accent-foreground hover:bg-accent/90"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </section>
  );
}
