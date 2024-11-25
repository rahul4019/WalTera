"use client";

import {
  Home,
  ImageIcon,
  Heart,
  Download,
  Settings,
  Tag,
  ChevronRight,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

const menuItems = [
  { icon: Home, label: "Home" },
  { icon: ImageIcon, label: "Explore" },
  { icon: Heart, label: "Favorites" },
  { icon: Download, label: "Downloads" },
  { icon: Settings, label: "Settings" },
];

const categories = [
  "Nature",
  "Abstract",
  "Animals",
  "Architecture",
  "Space",
  "Technology",
  "Minimalist",
  "Artistic",
  "Landscape",
  "Cityscape",
  "Food",
  "Travel",
  "Sports",
  "Fashion",
  "Music",
  "Vintage",
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center gap-2 p-4">
          <div className="bg-accent rounded-full p-1">
            <Image
              src="https://images.unsplash.com/photo-1557683311-eac922347aa1?w=32&h=32&fit=crop&crop=edges"
              alt="WallTera Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
          </div>
          <span className="font-bold text-accent group-data-[collapsible=icon]:hidden">
            WallTera
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="group-data-[collapsible=icon]:hidden">
            Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <SidebarMenuButton className="hover:bg-accent hover:text-accent-foreground">
                        <item.icon className="w-4 h-4 mr-2 group-data-[collapsible=icon]:mr-0" />
                        <span className="group-data-[collapsible=icon]:hidden">
                          {item.label}
                        </span>
                      </SidebarMenuButton>
                    </TooltipTrigger>
                    <TooltipContent
                      side="right"
                      className="group-data-[collapsible=sidebar]:hidden"
                    >
                      {item.label}
                    </TooltipContent>
                  </Tooltip>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="group-data-[collapsible=icon]:hidden">
            Categories
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <ScrollArea className="h-[300px] w-full rounded-md">
              <SidebarMenu>
                {categories.map((category) => (
                  <SidebarMenuItem key={category}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <SidebarMenuButton className="hover:bg-accent hover:text-accent-foreground">
                          <Tag className="w-4 h-4 mr-2 group-data-[collapsible=icon]:mr-0" />
                          <span className="group-data-[collapsible=icon]:hidden">
                            {category}
                          </span>
                        </SidebarMenuButton>
                      </TooltipTrigger>
                      <TooltipContent
                        side="right"
                        className="group-data-[collapsible=sidebar]:hidden"
                      >
                        {category}
                      </TooltipContent>
                    </Tooltip>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </ScrollArea>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
