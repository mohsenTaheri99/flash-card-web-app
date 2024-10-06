type userProps = {
  label: String;
  value: number;
};
const InputNumber = (props: userProps) => {
  return (
    <div className="flex gap-4 items-center justify-center">
      <label>{props.label} : </label>
      <input
        value={props.value}
        type="number"
        className="text-blue-200 bg-transparent w-12"
      />
    </div>
  );
};

export default InputNumber;
