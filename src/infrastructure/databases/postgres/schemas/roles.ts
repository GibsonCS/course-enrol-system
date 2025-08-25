import  { pgTable, integer, pgEnum} from 'drizzle-orm/pg-core'

export const roleNames = pgEnum('roleNames', ['student','administrator','teacher'])

export const roles = pgTable('roles', {
    id: integer().primaryKey().generatedAlwaysAsIdentity().notNull(),
    role: roleNames()
})