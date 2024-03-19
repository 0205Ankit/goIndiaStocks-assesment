import React from "react";
import { FaBell, FaUser } from "react-icons/fa6";
import { IoChatboxEllipses } from "react-icons/io5";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { cn } from "@/lib/utils";

const sidebarItemsStyle =
  "flex items-center gap-2 px-5 py-3 hover:bg-primary transition-all cursor-pointer";

const SidebarContents = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-5 py-4 mb-5 border-b-2 border-slate-500">
        <div className="flex gap-2 items-center text-sm">
          <FaUser className="text-xl" />
          Hello, User
        </div>
        <FaBell className="text-xl" />
      </div>
      <div className={sidebarItemsStyle}>
        <IoChatboxEllipses className="text-xl" /> Discussion Fourm
      </div>
      <div className={sidebarItemsStyle}>
        <HiMiniCurrencyDollar className="text-xl" />
        Market Stories
      </div>
      <div className={cn(sidebarItemsStyle, "pl-12")}>Sentiment</div>
      <div className={cn(sidebarItemsStyle, "pl-12")}>Market</div>
      <div className={cn(sidebarItemsStyle, "pl-12")}>Sector</div>
      <div className={cn(sidebarItemsStyle, "pl-12")}>Watchlist</div>
      <div className={cn(sidebarItemsStyle, "pl-12")}>Events</div>
      <div className={cn(sidebarItemsStyle, "pl-12")}>News/Interview</div>
    </div>
  );
};

export default SidebarContents;
