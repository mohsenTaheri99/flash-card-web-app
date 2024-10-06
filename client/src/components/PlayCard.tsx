import { useState } from "react";
import { desk } from "../services/context/desksProvider";
import PlayCardActions from "./PlayCardActions";
import DisplayCard from "./DisplayCard";
type playCardProps = {
  desk: desk;
};
export type ShowNextCardProps = {
  chosenDifficulty: "easy" | "hard" | "veryHard";
};
function PlayCard({ desk }: playCardProps) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const currentCard = desk.cards[currentCardIndex];

  const ShowNextCard = ({ chosenDifficulty }: ShowNextCardProps) => {
    chosenDifficulty; //work on it later
    setCurrentCardIndex((prevIndex) =>
      prevIndex < desk.cards.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="w-full max-w-xl bg-gray-700 p-8 rounded-lg shadow-lg text-center">
      <DisplayCard card={currentCard} />
      <PlayCardActions showNexCard={ShowNextCard} />
    </div>
  );
}

export default PlayCard;
