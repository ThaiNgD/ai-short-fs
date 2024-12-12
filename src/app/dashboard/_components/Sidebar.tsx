"use client";

import { SidebarOption } from "@/config/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const path = usePathname();
  return (
    <div className="w-64 bg-black shadow-md pt-[20px] h-screen flex flex-col">
      {SidebarOption.map((sidebar, index) => {
        const Icon = sidebar.icon;
        return (
          <Link
            href={sidebar.path}
            key={index}
            className={`text-white px-3 ${
              path.includes(sidebar.path) && "bg-white !text-black"
            } py-2 flex gap-2 hover:bg-white hover:text-black transition duration-300`}
            role="button"
          >
            <Icon /> {sidebar.label}
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
