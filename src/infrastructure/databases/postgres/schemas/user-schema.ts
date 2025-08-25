import { pgTable, varchar, integer} from 'drizzle-orm/pg-core'

export const usersTable = pgTable('users', {
    id: integer().primaryKey().generatedAlwaysAsIdentity().notNull(),
    name: varchar().notNull(),
    cpf: varchar().notNull(),
    email: varchar().notNull(),
    password: varchar().notNull()
})