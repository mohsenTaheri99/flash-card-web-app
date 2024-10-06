import { FaTrash } from "react-icons/fa";
import InputTextarea from "./inputTextarea";
import { card } from "../../services/context/desksProvider";

type CardInput = {
  handleCardChange: (
    index: number,
    field: "front" | "back",
    value: string
  ) => void;
  handleRemoveCard: (index: number) => void;
  card: card;
  index: number;
};
function CardInput({
  card,
  index,
  handleCardChange,
  handleRemoveCard,
}: CardInput) {
  return (
    <div
      key={card.id}
      className="p-4 border border-gray-700 rounded-lg bg-gray-700 space-y-4 relative "
    >
      <div className="text-lg text-gray-300 font-semibold">
        کارت {index + 1}
      </div>

      <InputTextarea
        label="سوال"
        value={card.front}
        onChange={(e) => handleCardChange(index, "front", e.target.value)}
      />

      <InputTextarea
        label="پاسخ"
        value={card.back}
        onChange={(e) => handleCardChange(index, "back", e.target.value)}
      />

      <button
        type="button"
        className="absolute top-0 left-4 text-red-500 hover:text-red-700"
        onClick={() => handleRemoveCard(index)}
      >
        <FaTrash className="w-5 h-5" /> {/* استفاده از آیکون حذف */}
      </button>
    </div>
  );
}

export default CardInput;
