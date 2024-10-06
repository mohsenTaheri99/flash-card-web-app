import { desk } from "../../services/context/desksProvider";

type deskInfoProps = {
  desk: desk;
};
function DeskInfo({ desk }: deskInfoProps) {
  return (
    <div className="w-full max-w-4xl bg-gray-800 p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl text-white font-semibold mb-4 text-center">
        {desk.title}
      </h2>
      <p className="text-gray-400 text-center">
        تعداد کارت‌ها: {desk.cards.length}
      </p>
    </div>
  );
}

export default DeskInfo;
