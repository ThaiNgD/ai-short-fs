import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
export const users = pgTable("users", {
  id: integer(),
  firstName: varchar("first_name"),
  lastName: varchar("last_name"),
  email: varchar("email"),
  password: varchar("password"),
  phoneNumber: varchar("phone_number"),
  imgUrl: varchar("img_url"),
});
