import { Control, FieldPath } from "react-hook-form";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { z } from "zod";
import { authFormSchema } from "@/lib/utils";

interface CustomInputProps {
    control: Control<z.infer<typeof authFormSchema>>,
    name: FieldPath<z.infer<typeof authFormSchema>>,
    label: string,
    placeholder: string,
  }

const CustomInput = ({ control, name, label, placeholder }: CustomInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class"
                type={name}
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-1" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;

{/* <FormField
  control={form.control}
  name="password"
  render={({ field }) => (
    <div className="form-item">
      <FormLabel className="form-label">Password</FormLabel>
      <div className="flex w-full flex-col">
        <FormControl>
          <Input
            placeholder="Enter your password"
            className="input-class"
            type="password"
            {...field}
          />
        </FormControl>
        <FormMessage className="form-message mt-1" />
      </div>
    </div>
  )}
/>; */}
