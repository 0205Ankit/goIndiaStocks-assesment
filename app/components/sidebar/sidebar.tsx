"use client";
import useIsMobile from "@/hooks/useIsMobile";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SidebarContents from "./contents";

const Sidebar = () => {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  const openSidebarHandler = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div
      className={cn(
        "min-w-[270px] fixed bg-secondary -translate-x-full h-screen z-20 text-white transition-all duration-200 font-medium",
        {
          "relative translate-x-0 mr-5": open && !isMobile,
          "translate-x-0": open && isMobile,
        }
      )}
    >
      <SidebarContents />
      <button
        onClick={openSidebarHandler}
        className="absolute flex items-center right-0 translate-x-full justify-center top-1/2 -translate-y-1/2 h-20 bg-secondary text-white"
      >
        {open ? <IoIosArrowBack /> : <IoIosArrowForward />}
      </button>
    </div>
  );
};

export default Sidebar;
