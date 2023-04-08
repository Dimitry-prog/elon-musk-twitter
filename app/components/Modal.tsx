import { FC, ReactNode } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import Button from "@/app/components/UI/Button";

type ModalProps = {
  label?: string;
  isOpen?: boolean;
  title?: boolean;
  disabled?: boolean;
  body?: ReactNode;
  footer?: ReactNode;
  onClose?: () => void;
  onSubmit?: () => void;
};

const Modal: FC<ModalProps> = ({
                                 label,
                                 isOpen,
                                 title,
                                 disabled,
                                 body,
                                 footer,
                                 onClose,
                                 onSubmit,
                               }) => {

  if (!isOpen) return null;

  return (
    <div className="p-4 flex items-center justify-center fixed inset-0 z-50 bg-black/70">
      <div
        className="w-full max-w-sm p-4 relative flex flex-col gap-6 rounded-lg shadow-lg bg-white dark:bg-slate-600/50">
        <h3 className="text-3xl font-semibold dark:text-white">{title}</h3>
        <button
          onClick={onClose}
          type="button"
          aria-label="close modal"
          className="absolute -top-10 right-0 sm:-top-8 sm:-right-8 hover:opacity-80 transition duration-500"
        >
          <AiOutlineClose className="w-8 h-8 dark:text-white"/>
        </button>

        <div className="flex-auto">
          {body}
        </div>

        <div className="p-4 flex flex-col gap-2">
          <Button label={label || ''} secondary fullWidth large/>
          {footer}
        </div>
      </div>
    </div>
  );
};

export default Modal;