import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
const Header = () => {
  return (
    <div className="h-[60px] flex justify-between shadow-lg items-center px-[20px] bg-black">
      <div className="flex items-center text-white gap-2">
        <Image
          alt=""
          src={"/logo.jpg"}
          className="rounded-full w-fit h-fit"
          width={40}
          height={40}
        />
        <span className="font-bold text-[16px]">ViZeo </span>
      </div>
      <UserButton />
    </div>
  );
};

export default Header;
