import { FC } from 'react';

type ButtonProps = {
  label: string;
  onClick?: () => void;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  outline?: boolean;
  disabled?: boolean;
};

const Button: FC<ButtonProps> = ({
                                   label,
                                   onClick,
                                   secondary,
                                   fullWidth,
                                   large,
                                   outline,
                                   disabled
                                 }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      aria-label={label}
      disabled={disabled}
      className={`font-semibold rounded-full border-2 hover:opacity-80 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-500 ${fullWidth ? 'w-full' : 'w-fit'} ${secondary ? 'dark:bg-slate-50/50 border-slate-800 hover:text-white' : 'bg-sky-500 dark:text-white border-sky-500'} ${large ? 'px-5 py-3 text-xl' : 'px-4 py-2 text-base'} ${outline ? 'dark:text-white dark:border-white bg-transparent' : ''}`}
    >
      {label}
    </button>
  );
};

export default Button;