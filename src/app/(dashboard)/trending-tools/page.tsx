"use client";

import ANNOUNCEMENT from "@/assets/images/announcement.png";

import { FilterPopover } from "@/components/admin/filter-popover";
import { ToolCard } from "@/components/cards/tool-card";
import { TOOL_MOCK_DATA } from "@/components/mockData/tool-mock-data";
import { Button } from "@/components/ui/button";
import { Grid3X3, TableProperties } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function TrendingToolsPage() {
  const [variant, setVariant] = useState<"default" | "thumbnail">("default");

  return (
    <>
      <section className="relative">
        <Image
          src={ANNOUNCEMENT}
          width={427}
          className="absolute right-0 hidden md:hidden lg:block"
          alt=""
        />
        <div className="py-[52px] md:px-12 md:max-w-4xl max-w-full px-4">
          <h1 className="font-extrabold text-4xl lg:text-5xl mb-6">
            Discover <span className="textGradient">marketing tools</span> that{" "}
            <br />
            supercharge your growth
          </h1>
          <p className="mb-6">
            Browse through hundreds of unique tools to boost your marketing &
            startup. Start by clicking Categories below to pick tools in
            different marketing topics.
          </p>
          <div className="flex gap-2 md:gap-6">
            <Button className="font-bold h-12">View Latest Tools</Button>
            <Button variant="outline" className="h-12">
              Trending tools
            </Button>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-6 p-4 md:p-12">
        <div className="flex gap-4 items-center">
          <FilterPopover />

          <span className="font-medium font-sm text-gray-500">Show as:</span>
          <Button
            variant="ghost"
            size="icon"
            className="p-0 w-auto h-auto"
            onClick={() => setVariant("default")}
          >
            <TableProperties
              color={variant === "default" ? "#164CD9" : "black"}
            />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="p-0 w-auto h-auto"
            onClick={() => setVariant("thumbnail")}
          >
            <Grid3X3 color={variant === "thumbnail" ? "#164CD9" : "black"} />
          </Button>
        </div>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOOL_MOCK_DATA.map((props, index) => (
            <ToolCard key={`tool-card-${index}`} variant={variant} {...props} />
          ))}
        </div>
        <div className="flex justify-center">
          <Button variant="outline">View More</Button>
        </div>
      </section>
    </>
  );
}
