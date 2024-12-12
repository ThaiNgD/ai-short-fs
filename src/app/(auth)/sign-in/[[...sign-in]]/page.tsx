import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

const page = () => {
  return (
    <div className="grid-cols-1 grid md:grid-cols-2">
      <div>
        <Image
          alt="Sign-In"
          className="w-full object-cover h-screen"
          width={500}
          height={500}
          src={"/bg-image.jpeg"}
        />
      </div>
      <div className="flex bg-sky-200 flex-auto justify-center items-center h-screen">
        <SignIn />
      </div>
    </div>
  );
};

export default page;
