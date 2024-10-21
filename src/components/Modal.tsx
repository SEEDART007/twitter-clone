'use client'
import { useCallback } from "react";
import {AiOutlineClose} from 'react-icons/ai'
import Button from "./Button";
interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel?: string;
  disabled?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
}) => {
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    onClose();
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden bg-opacity-70 overflow-y-auto fixed outline-none bg-neutral-800 focus:outline-none inset-0 z-50">
        <div className="relative w-full lg:w-3/6 my-6 mx-auto lg:max-w-3xl h-full lg:h-auto">
          <div className="h-full lg:h-auto border-0 rounded-lg bg-black shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
            <div className="flex items-center justify-center p-10 rounded-t"><h3 className="text-3xl font-semibold text-white">{title }</h3>
            <button onClick={handleClose} className="p-1 ml-auto border-0 hover:opacity-70 transition">
                <AiOutlineClose size={24} color="white"/>
            </button>
            </div>
            <div className="relative p-10 flex-auto">{body}</div>
            <div className="relative p-5 flex-auto">{footer}</div>
            <div className="flex flex-col gap-2 p-10">
                <Button disabled={disabled} label={actionLabel} fullWidth secondary large onClick={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
