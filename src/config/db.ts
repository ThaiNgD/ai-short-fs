import { drizzle } from "drizzle-orm/neon-http";
const db = drizzle(process.env.NEXT_PUBLIC_DATABASE_DRIZZLE_URL!);
console.log(db);
