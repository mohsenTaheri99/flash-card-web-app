import { FaPlus } from "react-icons/fa";
import { useDesksContext } from "../services/context/desksProvider";
import { Link } from "react-router-dom";
import Tooltip from "./ui/Tooltip";
import DeskCard from "./DeskCard";
function DisplayDeskList() {
  const desks = useDesksContext();

  return (
    <>
      <h2 className="text-2xl text-gray-300 font-semibold mb-6 text-center">
        میزهای شما
      </h2>
      {desks.length > 0 ? (
        <div className="space-y-4">
          {desks.map((desk) => (
            <DeskCard desk={desk} />
          ))}
          <Tooltip text="اضافه کردن میزکار جدید" className=" mt-8">
            <Link
              to="/add-desk"
              className=" text-white bg-green-500 hover:bg-green-600  p-4 rounded-full"
            >
              <FaPlus className="text-xl" />
            </Link>
          </Tooltip>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <p className="text-center text-gray-400">
            هیچ میزی در حال حاضر وجود ندارد.
          </p>
          <Link to={"/add-desk"} className="text-blue-300 hover:text-blue-400 ">
            اضافه کردن میزکار جدید
          </Link>
        </div>
      )}
    </>
  );
}

export default DisplayDeskList;
