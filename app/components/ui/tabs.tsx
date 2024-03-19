"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

type PropType = {
  trigger: string[];
  content: {
    [key: string]: React.ReactNode;
  };
};

const Tabs = ({ trigger, content }: PropType) => {
  const [activeTab, setActiveTab] = useState<string>(trigger[0]);

  return (
    <div>
      <div className="flex sticky top-0 z-10 w-full h-10 text-white font-medium">
        {trigger.map((tab, index) => {
          return (
            <button
              key={index}
              className={cn(
                "text-lg font-medium w-1/2 brightness-75 bg-secondary",
                {
                  "border-b-4 border-primary brightness-100": tab === activeTab,
                }
              )}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          );
        })}
      </div>
      <div className="w-full h-full">{content[activeTab]}</div>
    </div>
  );
};

export default Tabs;
