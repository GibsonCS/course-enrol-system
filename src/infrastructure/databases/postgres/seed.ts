import {db} from './db.ts'
import { roles } from './schemas/roles.ts'
import {usersTable} from './schemas/user-schema.ts'
import {faker} from '@faker-js/faker'

async function seed () {
    Promise.all([
        await db.delete(roles),

        await db.delete(usersTable),

        await db.insert(roles).values({
            role:'administrator'
        }),

        await db.insert(roles).values({
            role:'student'
        }),

        await db.insert(roles).values({
            role:'teacher'
        }),

        await db.insert(usersTable).values({
            name: faker.person.fullName(), 
            cpf: faker.string.numeric(11),
            email: faker.internet.email(),
            password: faker.internet.password()
        }),

        await db.insert(usersTable).values({
            name: faker.person.fullName(), 
            cpf: faker.string.numeric(11),
            email: faker.internet.email(),
            password: faker.internet.password()
        })
    ])
}

seed().then(() => console.log('seed finish!'))
