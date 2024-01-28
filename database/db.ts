// import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/neon-serverless';
import { Client } from '@neondatabase/serverless';
const {
    DB_CONNECTION_STRING: connectionString
  } = process.env;
export const client = new Client({ connectionString });
export const db = drizzle(client);