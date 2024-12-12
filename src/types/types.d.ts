import { LucideIcon } from "lucide-react";

export {};

declare global {
  interface ISidebar {
    path: string;
    label: string;
    icon: LucideIcon;
  }
}
