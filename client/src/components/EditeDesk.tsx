import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useDesksContext,
  desk,
  card,
  useDesksCntollerContext,
} from "../services/context/desksProvider";
import Button from "./ui/Button";
import { v4 as uuidv4 } from "uuid";
import CardInput from "./ui/CardInput";
import InputText from "./ui/InputText";

function EditeDesk() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const desks = useDesksContext();
  const desk = desks.find((d: desk) => d.id.toString() === id);

  const [title, setTitle] = useState(desk?.title || "");
  const [cards, setCards] = useState<card[]>(desk?.cards || []);

  if (!desk) {
    return (
      <div className="text-gray-200 text-center mt-10">میزکار پیدا نشد.</div>
    );
  }
  const deskController = useDesksCntollerContext();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleCardChange = (
    index: number,
    field: "front" | "back",
    value: string
  ) => {
    const updatedCards = [...cards];
    updatedCards[index] = { ...updatedCards[index], [field]: value };
    setCards(updatedCards);
  };

  const handleAddCard = () => {
    setCards([...cards, { id: uuidv4(), front: "", back: "" }]);
  };

  const handleRemoveCard = (index: number) => {
    const updatedCards = cards.filter((_, i) => i !== index);
    setCards(updatedCards);
  };

  const handleSave = () => {
    const updatedDesk = { ...desk, title, cards };
    deskController.editeDesk(updatedDesk);
    console.log("میزکار به‌روزرسانی شده:", updatedDesk);
    navigate(`/desk/${desk.id}`);
  };
  return (
    <div className="w-full max-w-4xl bg-gray-800 p-6 rounded-lg shadow-md flex flex-col gap-3">
      <InputText
        label={"ویرایش عنوان میزکار"}
        onChange={handleTitleChange}
        value={title}
      />

      <h2 className="text-xl text-white mb-4">ویرایش کارت‌ها</h2>
      {cards.length > 0 ? (
        cards.map((card, index) => (
          <CardInput
            index={index}
            card={card}
            handleCardChange={handleCardChange}
            handleRemoveCard={handleRemoveCard}
          />
        ))
      ) : (
        <p className="text-gray-200 mb-4">هیچ کارتی در حال حاضر وجود ندارد.</p>
      )}
      <Button
        onClick={handleAddCard}
        className="bg-blue-500 hover:bg-blue-600 text-white w-full mb-4"
      >
        افزودن کارت
      </Button>
      <Button
        onClick={handleSave}
        className="bg-green-500 hover:bg-green-600 text-white w-full"
      >
        ذخیره تغییرات
      </Button>
    </div>
  );
}
export default EditeDesk;
