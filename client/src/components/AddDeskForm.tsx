import CardInput from "./ui/CardInput";
import { useState } from "react";
import Button from "./ui/Button";
import {
  card,
  desk,
  useDesksCntollerContext,
} from "../services/context/desksProvider";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import InputText from "./ui/InputText";

function AddDeskForm() {
  const deskCntroller = useDesksCntollerContext();
  const navigate = useNavigate();

  const [deskTitle, setDeskTitle] = useState("");
  const [cards, setCards] = useState<card[]>([
    { id: uuidv4(), front: "", back: "" },
  ]);
  const [error, setError] = useState<string | null>(null);

  const handleAddCard = () => {
    setCards([...cards, { id: uuidv4(), front: "", back: "" }]);
  };

  const handleCardChange = (index: number, field: string, value: string) => {
    const newCards = [...cards];
    newCards[index] = { ...newCards[index], [field]: value };
    setCards(newCards);
  };

  const handleRemoveCard = (index: number) => {
    const newCards = cards.filter((_, i) => i !== index);
    setCards(newCards);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!deskTitle) {
      setError("عنوان میزکار نمی‌تواند خالی باشد!");
      return;
    }

    const newDesk: desk = {
      id: uuidv4(),
      title: deskTitle,
      cards: cards,
    };

    deskCntroller.addDesk(newDesk);
    navigate("/");
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && <p className="text-red-500 text-center">{error}</p>}
      <InputText
        label={"عنوان میزکار"}
        value={deskTitle}
        onChange={(e) => setDeskTitle(e.target.value)}
      />
      {cards.map((card, index) => (
        <CardInput
          card={card}
          index={index}
          handleCardChange={handleCardChange}
          handleRemoveCard={handleRemoveCard}
        />
      ))}
      <div className="flex justify-between">
        <Button onClick={handleAddCard} type="button">
          افزودن کارت
        </Button>
        <Button type="submit">ایجاد میزکار</Button>
      </div>
    </form>
  );
}

export default AddDeskForm;
