import React from "react";
import { marketStories } from "@/data/stories";
import StoryCard from "./story-card";
import { cn } from "@/lib/utils";

type PropType = React.HtmlHTMLAttributes<HTMLDivElement> & {
  hideHeading?: boolean;
};
const MarketStories = ({ hideHeading, className }: PropType) => {
  return (
    <div
      className={cn(
        "w-3/12 py-5 h-screen hideScrollbar overflow-y-scroll",
        className
      )}
    >
      {!hideHeading && (
        <h2 className="text-2xl font-medium text-primary tracking-tight">
          MARKET STORIES
        </h2>
      )}
      <div className="flex flex-col gap-5 my-5">
        {marketStories.map((story) => {
          return <StoryCard key={story.id} {...story} />;
        })}
      </div>
    </div>
  );
};

export default MarketStories;
