import {BsBellFill, BsHouseFill} from "react-icons/bs";
import {FaUser} from "react-icons/fa";
import {ILink} from "@/types";

export const links: ILink[] = [
  {
    label: 'Home',
    href: '/',
    icon: BsHouseFill
  },
  {
    label: 'Notifications',
    href: '/notifications',
    icon: BsBellFill
  },
  {
    label: 'Profile',
    href: '/users/123',
    icon: FaUser
  },
];