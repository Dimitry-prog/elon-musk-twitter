import { IconType } from "react-icons";

export type ILink = {
  label: string;
  href: string;
  icon: IconType;
}

export type LoginModalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export type RegisterModalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}