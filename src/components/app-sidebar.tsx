"use client";

import { Home, ImageIcon, Heart, Download, Settings, Tag } from "lucide-react";
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
        <SidebarMenu>
          <SidebarMenuItem>
            {/* <SidebarMenuButton className="overflow-hidden [&>[data-sidebar=sidebar]]:flex-col"> */}
            {/* <div className="flex items-center gap-2 p-4"> */}
            {/*   <div className=" rounded-full p-1"> */}
            {/*     <Image */}
            {/*       src="./waltera.svg" */}
            {/*       alt="WalTera Logo" */}
            {/*       width={32} */}
            {/*       height={32} */}
            {/*       className="rounded-full" */}
            {/*     /> */}
            {/*   </div> */}
            {/*   <span className="font-bold text-accent group-data-[collapsible=icon]:hidden"> */}
            {/*     WalTera */}
            {/*   </span> */}
            {/* </div> */}
            {/* <div className="flex justify-start items-center gap-2 p-4"> */}
            <div className="flex gap-2 items-center justify-center rounded-lg">
              <Image
                src="./waltera.svg"
                alt="WalTera Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">WalTera</span>
              </div>
            </div>
            {/* </SidebarMenuButton> */}
          </SidebarMenuItem>
        </SidebarMenu>
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
