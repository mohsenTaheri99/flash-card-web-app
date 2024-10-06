import { Link } from "react-router-dom";
import {
  desk,
  useDesksCntollerContext,
} from "../services/context/desksProvider";
import { FaTrash } from "react-icons/fa";
type DeskCard = {
  desk: desk;
};
function DeskCard({ desk }: DeskCard) {
  const { removeDesk } = useDesksCntollerContext();

  const handleRemoveDesk = (deskId: string) => {
    removeDesk(deskId);
  };
  return (
    <div
      key={desk.id}
      className="flex justify-between items-center bg-gray-800 p-5 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
    >
      <Link to={`/desk/${desk.id}`} className="flex-grow">
        <h3 className="text-xl text-white font-semibold">{desk.title}</h3>
      </Link>
      <button
        onClick={() => handleRemoveDesk(desk.id)}
        className="text-red-500 hover:text-red-700 transition duration-200"
      >
        <FaTrash />
      </button>
    </div>
  );
}

export default DeskCard;
