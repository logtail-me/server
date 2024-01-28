import { migrate } from 'drizzle-orm/neon-serverless/migrator';
import { db } from './db';
migrate(db, { migrationsFolder: './.cache/.migrations' });
