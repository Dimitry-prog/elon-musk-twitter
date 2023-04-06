import dogeCoin from '/public/dogecoin.svg';
import Image from "next/image";
import Link from "next/link";

const Logo = () => {

  return (
    <Link href="/"
          className="p-4 flex gap-4 items-center justify-items-start rounded-full dark:hover:bg-slate-50/10 hover:bg-slate-500/10 transition duration-500">
      <Image
        src={dogeCoin}
        alt="Elon Musk's dog twitter"
        className="w-12 h-12"
      />
    </Link>
  );
};

export default Logo;