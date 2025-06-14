import { mysqlTable, varchar, text, timestamp } from "drizzle-orm/mysql-core";

export const contactMessages = mysqlTable("contact_messages", {
  id: varchar("id", { length: 36 }).primaryKey().notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
