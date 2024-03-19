import Image from "next/image";

const StoryCard = ({ ...story }) => {
  return (
    <div className="w-full shadow-md rounded-md overflow-hidden">
      <Image
        src={story.Image}
        alt={story.title}
        width={200}
        height={200}
        className="w-full h-32 object-cover"
      />
      <div className="px-4 pt-1 pb-4">
        <h3 className="font-semibold my-1">{story.title}</h3>
        <p className="text-xs">{story.content}</p>
      </div>
    </div>
  );
};

export default StoryCard;
