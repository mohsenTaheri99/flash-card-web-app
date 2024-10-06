import { useParams } from "react-router-dom";
import { useDesksContext } from "../services/context/desksProvider";

import Header from "../components/ui/Header";
import DeskInfo from "../components/ui/DeskInfo";
import DeskActions from "../components/DeskActions";

const DeskPage = () => {
  const { id } = useParams<{ id: string }>();
  const desks = useDesksContext();
  const desk = desks.find((desk) => desk.id.toString() === id);

  if (!desk) throw new Error("این میز کار و جود ندارد");
  return (
    <div className="flex flex-col items-center bg-gray-900 min-h-screen p-6">
      <Header title="میز کار" />
      <DeskInfo desk={desk} />
      <DeskActions desk={desk} />
    </div>
  );
};

export default DeskPage;
