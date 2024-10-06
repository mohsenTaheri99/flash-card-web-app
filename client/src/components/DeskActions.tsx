import { useNavigate } from "react-router-dom";
import Button from "./ui/Button";
import { desk } from "../services/context/desksProvider";
type DeskActionsProps = {
  desk: desk;
};
function DeskActions({ desk }: DeskActionsProps) {
  const navigate = useNavigate();
  const handleShareDesk = () => {
    console.log("Sharing desk:", desk?.title);
  };

  const handleStart = () => {
    navigate(`/playDesk/${desk?.id}`);
  };

  return (
    <div className="w-full max-w-4xl flex flex-col space-y-6">
      <Button
        onClick={() => navigate(`/edit-desk/${desk.id}`)}
        className="bg-yellow-500 text-white w-full hover:bg-yellow-400 transition duration-200"
      >
        ویرایش میزکار
      </Button>
      <Button
        onClick={handleShareDesk}
        className="bg-blue-500 text-white w-full hover:bg-blue-400 transition duration-200"
      >
        به اشتراک گذاری
      </Button>
      <Button
        onClick={handleStart}
        className="bg-green-500 text-white w-full hover:bg-green-400 transition duration-200"
      >
        شروع
      </Button>
    </div>
  );
}

export default DeskActions;
