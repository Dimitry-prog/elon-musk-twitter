import Logo from "@/app/components/Logo";
import { links } from "@/data/links";
import LinkItem from "@/app/components/LinkItem";
import { BiLogOut } from "react-icons/bi";
import TweetButton from "@/app/components/TweetButton";

const Header = () => {
  return (
    <header className="h-full">
      <nav className="flex flex-col gap-2 items-start">
        <Logo/>
        <ul className="flex flex-col gap-4 items-start">
          {links.map(link => (
            <li key={link.href}>
              <LinkItem
                href={link.href}
                label={link.label}
                icon={link.icon}
              />
            </li>
          ))}
        </ul>
        <button
          type="button"
          aria-label='logout'
          className="p-4 flex gap-4 items-center rounded-full dark:hover:bg-slate-50/10 hover:bg-slate-500/10 transition duration-500">
          <BiLogOut className="w-8 h-8 dark:text-white"/>
          <span className="hidden md:block text-xl dark:text-white">Logout</span>
        </button>
        <TweetButton/>
      </nav>
    </header>
  );
};

export default Header;