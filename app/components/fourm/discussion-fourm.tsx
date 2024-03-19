import { fourmCards } from "@/data/fourm";
import FourmCard from "./fourm-card";
import { cn } from "@/lib/utils";

type PropType = React.HtmlHTMLAttributes<HTMLDivElement> & {
  hideHeading?: boolean;
};

const DiscussionFourm = ({ hideHeading, className }: PropType) => {
  return (
    <div
      className={cn(
        "w-9/12 h-screen py-5 hideScrollbar overflow-y-scroll",
        className
      )}
    >
      {!hideHeading && (
        <h2 className="text-3xl font-medium text-primary tracking-tight">
          DISCUSSION FOURM
        </h2>
      )}
      <div className="flex flex-col gap-10 my-5">
        {fourmCards.map((card) => {
          return <FourmCard key={card.id} {...card} />;
        })}
      </div>
    </div>
  );
};

export default DiscussionFourm;
