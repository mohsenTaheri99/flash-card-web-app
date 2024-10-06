type headerProps = {
  title: string;
};
function Header({ title }: headerProps) {
  return (
    <header className="w-full max-w-4xl mb-8 p-4 bg-gray-800 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl text-white font-bold">{title}</h1>
      </div>
    </header>
  );
}

export default Header;
