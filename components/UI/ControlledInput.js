import { Controller } from "react-hook-form";
import Input from "./Input";

export default function ControlledInput({ control, name }) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <Input label={name} value={value} onChange={onChange} onBlur={onBlur} />
      )}
    />
  );
}
