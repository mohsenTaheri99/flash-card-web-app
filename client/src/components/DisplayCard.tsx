import { useEffect, useState } from "react";
import { card } from "../services/context/desksProvider";
import Button from "./ui/Button";
type DisplayCardProps = {
  card: card;
};
function DisplayCard({ card }: DisplayCardProps) {
  const [showAnswer, setShowAnswer] = useState(false);
  useEffect(() => setShowAnswer(false), [card]);
  return (
    <>
      <h2 className="text-2xl text-white font-semibold mb-6">سوال:</h2>
      {card.front.split("\n").map((line) => {
        return <p className="text-lg text-gray-300 mb-8">{line}</p>;
      })}

      {!showAnswer && (
        <Button
          onClick={() => setShowAnswer(true)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 mb-6 rounded-lg transition-colors duration-300"
        >
          نمایش پاسخ
        </Button>
      )}
      {showAnswer && (
        <div className="text-lg text-white mb-8">
          <p className="bg-gray-800 p-4 rounded-lg">{card.back}</p>
        </div>
      )}
    </>
  );
}

export default DisplayCard;
