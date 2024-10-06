import { useParams } from "react-router-dom";
import { useDesksContext } from "../services/context/desksProvider";
import Header from "../components/ui/Header";
import PlayCard from "../components/PlayCard";

const PlayDeskPage = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) throw new Error("این میز وجود ندارد.");
  const desks = useDesksContext();
  const desk = desks.find((d) => d.id === id);
  if (!desk) throw new Error("این میز وجود ندارد.");

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6">
      <Header title={`در حال مرور میز: ${desk.title}`} />
      <PlayCard desk={desk} />
    </div>
  );
};

export default PlayDeskPage;
