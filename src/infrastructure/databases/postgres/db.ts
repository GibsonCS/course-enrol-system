import {drizzle} from 'drizzle-orm/node-postgres'

// if(!process.env.DATABASE_URL ) throw new Error('DATABASE_URL not defined!')


export const db = drizzle({
    connection: 'postgres://user:user@localhost:5432/course-system'
})