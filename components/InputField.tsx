import React from "react";

interface InputProps {
    id: string;
    onChange: any;
    value: string;
    label: string;
    type?: string;
}

const InputField: React.FC<InputProps> = ({
    id,
    onChange,
    value,
    label,
    type
}) => {
    return(
        <div className="relative mb-2">
            <input 
                value={value}
                onChange={onChange}
                type={type}
                id = {id}
                className="block p-2 rounded-sm pt-4 pb-1 w-full text-md border-2 border-gray-400 appearance-none outline-border-gray-700 focus:ring-0 peer"
                placeholder=" "
                required
            />
            <label 
            className="
              absolute 
              text-md 
              bg-white
              px-2
              text-zinc-500 
              duration-150 
              transform 
              -translate-y-7
              top-3
              z-10
              origin-[0]
              left-4
              peer-placeholder-shown:scale-100
              peer-placeholder-shown:translate-y-0
              peer-focus:-translate-y-7
              peer-focus:text-black
              "
            htmlFor={id} >
                {label}
            </label>
        </div>
    )
}

export default InputField;