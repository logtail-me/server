import { char, pgTable, varchar } from 'drizzle-orm/pg-core';

export const article = pgTable('articles', {
  id: varchar('id', { length: 250 }),
  title: varchar('title', { length: 250 }),
  summary: varchar('title', { length: 300 }),
  tags: char('tags', { length: 15 }).array()
});