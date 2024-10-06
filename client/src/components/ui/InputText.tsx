type InputTextprops = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
};
function inputText({ onChange, value, label }: InputTextprops) {
  return (
    <div className=" flex flex-col gap-2">
      <label className="text-xl text-white mb-1">{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className=" p-2  text-gray-200 rounded-lg bg-gray-700"
      />
    </div>
  );
}

export default inputText;
