import Link from "next/link";
import {FaFeather} from "react-icons/fa";

const TweetButton = () => {
  return (
    <Link href="/"
          className="p-4 flex gap-4 items-center justify-center rounded-full dark:hover:bg-slate-50/10 hover:bg-slate-500/10 transition duration-500">
      <FaFeather className="w-8 h-8 md:hidden dark:text-white"/>
      <span className="hidden md:block text-xl dark:text-white">Tweet</span>
    </Link>
  );
};

export default TweetButton;