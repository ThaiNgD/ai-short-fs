import { pgTable, integer, varchar } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const users = pgTable("users", {
	id: integer(),
	firstName: varchar("first_name"),
	lastName: varchar("last_name"),
});
