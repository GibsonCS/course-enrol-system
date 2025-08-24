import {drizzle} from 'drizzle-orm/node-postgres'


export const db = drizzle({
    connection:'postgres://user:user@localhost:5432/course-system'
})