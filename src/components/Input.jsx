import { forwardRef } from "react";
const Input = forwardRef(function Input({ textarea, label, ...props }, ref) {
  return (
    <p className="my-4">
      <label className="uppercase font-semibold text-sm text-stone-500">
        {label}
      </label>
      <br />
      {textarea ? (
        <textarea className="input w-full" ref={ref} {...props}></textarea>
      ) : (
        <input className="input w-full " ref={ref} {...props}  />
      )}
    </p>
  );
});

export default Input;
