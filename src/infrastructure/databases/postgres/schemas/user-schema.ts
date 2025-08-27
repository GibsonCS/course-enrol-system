import { pgTable, varchar, uuid} from 'drizzle-orm/pg-core'

export const usersTable = pgTable('users', {
    id: uuid().primaryKey().notNull(),
    name: varchar().notNull(),
    cpf: varchar().notNull().unique(),
    email: varchar().notNull().unique(),
    password: varchar().notNull()
})