"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const click = (): void => {
    router.push("dashboard/generate-video");
  };
  return (
    <>
      <div className="text-primary p-[30px] flex justify-between">
        <h2 className="text-lg font-bold">Dashboard</h2>
        <Button onClick={click}>Create New Video +</Button>
      </div>
    </>
  );
};

export default Page;
