import Header from "../components/ui/Header";
import AddDeskForm from "../components/AddDeskForm";

function AddDeskPage() {
  return (
    <div className="flex flex-col items-center  min-h-screen bg-gray-900 p-6">
      <Header title="افزودن میز" />
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-4xl ">
        <AddDeskForm />
      </div>
    </div>
  );
}

export default AddDeskPage;
