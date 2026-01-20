"use client";

import { useEffect, useState } from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  buttonText: string;
  disabled?: boolean;
  outline?: number;
  icon?: IconType;
  small?: boolean;
  full?: boolean;
  custom?: string;
  customIcon?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({
  buttonText,
  disabled,
  outline,
  icon: Icon,
  small,
  full,
  custom,
  customIcon,
  onClick,
}) => {
  const [buttonSize, setButtonSize] = useState(false);

  //Handles the resizing of buttons depending on window width - CREATE SEPARATE FILE************
  const handleButtonResize = () => {
    if (window.innerWidth < 1024) {
      setButtonSize(true);
    } else {
      setButtonSize(false);
    }
  };

  useEffect(() => {
    handleButtonResize();
  }, []);

  //Rerenders button size when screen is resized
  useEffect(() => {
    window.addEventListener("resize", handleButtonResize);
    return () => window.removeEventListener("resize", handleButtonResize);
  }, [handleButtonResize]);

  return (
    <button
      disabled={disabled}
      className={`
      flex
      items-center
      justify-center
        py-2 
        px-6 
        w-48
        border 
        border-primaryColor 
        text-primaryColor 
        cursor-pointer 
        shadow-input 
        rounded-lg
        disabled:opacity-80
        disabled:cursor-not-allowed
        ${outline === 1 ? "bg-textPrimary border-textPrimary text-backgroundWhite" : ""}
        ${outline === 2 ? "bg-secondaryColor border-secondaryColor text-textPrimary" : ""}
        ${outline === 3 ? "bg-transparent border-primaryColor text-primaryColor" : ""}
        ${outline === 4 ? "bg-light-white border-textPrimary text-textPrimary" : ""}
        ${small ? "text-sm" : "text-base"}
        ${small ? "py-1 px-3" : "py-2 px-6"}
        ${small ? "w-36" : "w-48"}
        ${buttonSize ? "w-full" : "w-48"}
        ${full ? "w-full" : "w-48"}
        ${custom ? custom : ""}
        `}
      onClick={onClick}
    >
      {Icon && <Icon className={`${customIcon ? customIcon : ""}`} />}
      {buttonText}
    </button>
  );
};
