import Header from "../components/ui/Header";
import DisplayDeskList from "../components/DisplayDeskList";

function HomePage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6">
      <Header title="مدیریت میز ها" />

      <div className="w-full max-w-3xl">
        <DisplayDeskList />
      </div>
    </div>
  );
}

export default HomePage;
