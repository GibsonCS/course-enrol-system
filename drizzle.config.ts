import {defineConfig} from 'drizzle-kit'

if(!process.env.DATABASE_URL) throw new Error('DATABASE_URL must be defined!')

export default defineConfig({
    out: './drizzle',
    schema: './src/infrastructure/databases/postgres/schemas/*.ts',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL
    }
})