import {FC} from 'react';
import {IconType} from "react-icons";
import Link from "next/link";

type SidebarLinkProps = {
  label: string;
  icon: IconType;
  href: string;
  onClick?: () => void;
};

const LinkItem: FC<SidebarLinkProps> = ({href, label, icon: Icon}) => {
  return (
    <Link
      href={href}
      className="p-4 flex gap-4 items-center rounded-full dark:hover:bg-slate-50/10 hover:bg-slate-500/10 transition duration-500"
    >
      <Icon className="w-8 h-8 dark:text-white"/>
      <p className="text-xl dark:text-white hidden md:block">{label}</p>
    </Link>
  );
};

export default LinkItem;