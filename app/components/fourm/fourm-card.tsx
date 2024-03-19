import { getFormattedCount } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { FaRegHeart, FaRegCommentAlt, FaRegEye } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";

const FourmCard = ({ ...card }) => {
  return (
    <div className="flex justify-between p-5 max-sm:p-3 shadow-md rounded-lg h-[150px]">
      <div className="flex gap-3 max-sm:gap-2">
        <Image
          src={card.userImage}
          alt={card.user}
          width={50}
          height={50}
          className="rounded-full object-cover h-12 w-12"
        />
        <div className="flex flex-col gap-2 relative w-full">
          <div className="flex gap-5 max-sm:gap-2 items-center">
            <h3 className="font-medium max-sm:text-sm">{card.user}</h3>
            <span className="px-4 py-1 max-sm:px-2 text-xs rounded-xl bg-secondary text-white">
              Sector {card.sector}
            </span>
          </div>
          <p className="line-clamp-2 max-sm:text-sm">{card.content}</p>
          {/* ------------- Reactions ------------------ */}
          <div className="flex absolute w-full bottom-0 inset-x-0 max-sm:text-xs items-center justify-self-end justify-between text-sm font-medium">
            <div className="flex gap-2 max-sm:gap-1 items-center">
              <FaRegHeart className="text-lg max-sm:text-sm" />{" "}
              {getFormattedCount(card.likes)}
            </div>
            <div className="flex gap-2 max-sm:gap-1 items-center">
              <FaRegEye className="text-lg max-sm:text-sm" />{" "}
              {getFormattedCount(card.views)}
            </div>
            <div className="flex gap-2 max-sm:gap-1 items-center">
              <FaRegCommentAlt className="text-lg max-sm:text-sm" />{" "}
              {getFormattedCount(card.comments)} comments
            </div>
            <div className="flex gap-2 max-sm:gap-1 items-center">
              <FiShare2 className="text-lg max-sm:text-sm" /> Share
            </div>
          </div>
        </div>
      </div>
      <span className="text-xs whitespace-nowrap text-secondary font-medium">
        {card.dateUploaded} min
      </span>
    </div>
  );
};

export default FourmCard;
