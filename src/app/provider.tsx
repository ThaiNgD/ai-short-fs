"use client";
import { db } from "@/config/db";
import { users } from "@/config/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { useEffect } from "react";

const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { user } = useUser();
  const isNewUser = async () => {
    const result = await db
      .select()
      .from(users)
      .where(eq(users.email, user?.primaryEmailAddress?.emailAddress ?? ""));
    if (result[0]) {
      console.log("Hello");
    } else {
      await db.insert(users).values({
        email: user?.primaryEmailAddress?.emailAddress ?? "",
        imgUrl: user?.imageUrl,
      });
    }
  };
  useEffect(() => {
    if (user) isNewUser();
  }, [user]);
  return <div>{children}</div>;
};

export default Provider;
