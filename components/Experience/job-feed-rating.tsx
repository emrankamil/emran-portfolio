import { PiStar, PiStarFill } from "react-icons/pi";

type RatingProps = {
  rating: number[];
};

function getRating(rating: number[]) {
  const totalRating = rating.reduce(
    (partialSum, value) => partialSum + value,
    0
  );
  const review = totalRating / rating?.length;

  return {
    review,
    totalRating,
  };
}

export default function JobFeedRating({ rating }: RatingProps) {
  const { review } = getRating(rating);
  return (
    <div className="flex flex-col items-end">
      <div className="flex items-center">
        {[...new Array(5)].map((_, index) => {
          return index < Math.round(review) ? (
            <PiStarFill className="w-4 fill-orange text-orange" key={index} />
          ) : (
            <PiStar className="w-4 fill-gray-300 text-gray-500" key={index} />
          );
        })}
      </div>
    </div>
  );
}
