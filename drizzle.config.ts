import type { Config } from 'drizzle-kit';

const {
  DB_CONNECTION_STRING: connectionString
} = process.env;
export default {
  schema: './database/schemas',
  out: './.cache/.migrations',
  breakpoints: true,
  driver: 'pg',
  dbCredentials: { connectionString },
} satisfies Config;