import { ShowNextCardProps } from "./PlayCard";
import Button from "./ui/Button";
type PlayCardActionsProps = {
  showNexCard: ({ chosenDifficulty }: ShowNextCardProps) => void;
};

function PlayCardActions({ showNexCard }: PlayCardActionsProps) {
  const handleHard = () => {
    showNexCard({ chosenDifficulty: "hard" });
  };

  const handleEasy = () => {
    showNexCard({ chosenDifficulty: "easy" });
  };

  const handleAgain = () => {
    showNexCard({ chosenDifficulty: "veryHard" });
  };

  return (
    <div className="flex gap-4 justify-center">
      <Button
        onClick={handleHard}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
      >
        سخت
      </Button>
      <Button
        onClick={handleEasy}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
      >
        آسان
      </Button>
      <Button
        onClick={handleAgain}
        className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
      >
        دوباره
      </Button>
    </div>
  );
}

export default PlayCardActions;
