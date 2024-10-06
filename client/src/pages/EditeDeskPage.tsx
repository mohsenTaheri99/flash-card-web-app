import EditeDesk from "../components/EditeDesk";
import Header from "../components/ui/Header";

const EditDeskPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 p-6">
      {/* هدر */}
      <Header title="ویرایش میزکار" />
      <EditeDesk />
    </div>
  );
};

export default EditDeskPage;
