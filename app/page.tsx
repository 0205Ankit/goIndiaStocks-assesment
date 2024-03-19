"use client";
import useIsMobile from "@/hooks/useIsMobile";
import DiscussionFourm from "./components/fourm/discussion-fourm";
import MarketStories from "./components/stories/market-stories";
import Tabs from "./components/ui/tabs";

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <main className="w-full">
      {isMobile ? (
        <Tabs
          trigger={["Discussion Fourm", "Market Stories"]}
          content={{
            "Discussion Fourm": (
              <DiscussionFourm hideHeading className="w-full" />
            ),
            "Market Stories": <MarketStories hideHeading className="w-full" />,
          }}
        />
      ) : (
        <div className="flex gap-20 mx-5">
          <DiscussionFourm />
          <MarketStories />
        </div>
      )}
    </main>
  );
}
