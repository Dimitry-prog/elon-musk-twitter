import {ChangeEvent, FC} from 'react';

type InputProps = {
  placeholder?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input: FC<InputProps> = ({
                                 placeholder,
                                 value,
                                 type,
                                 disabled,
                                 onChange
                               }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      className="p-4 w-full text-lg outline-none rounded-md border-2 border-slate-600 dark:text-white dark:bg-slate-500 focus:border-sky-500 disabled:opacity-60 disabled:pointer-events-none transition duration-500"
    />
  );
};

export default Input;