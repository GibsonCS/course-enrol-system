import {type UUID } from "node:crypto";
import User from "../../domain/entities/user.ts";
import { type UserRepository } from "../../domain/repositories/user-repository.ts";
import { db, } from '../databases/postgres/db.ts';
import { usersTable } from '../databases/postgres/schemas/user-schema.ts';
import { eq } from "drizzle-orm";

export default class UserRepositoryPostgres implements UserRepository {
    async delete(id: UUID): Promise<void> {
        await db.delete(usersTable).where(eq(usersTable.id, id)).returning()


    }

    async updateName(id: UUID, name: string): Promise<void> {
        await db.update(usersTable).set({name}).where(eq(usersTable.id, id))
    }

    async update(item: User): Promise<void> {
       throw new Error('method not implemented')
    }

    async findByID(id: UUID): Promise<User | undefined> {
        const result = await db.select().from(usersTable).where(eq(usersTable.id, id))
        
        if(!result[0]) return undefined
     
        return new User( {
            id: result[0].id as UUID,
            name: result[0].name,
            cpf: result[0].cpf,
            email: result[0].email,
            password: result[0].password
        })
    }

    async findByEmail(email: string): Promise<User | undefined> {
        const [result] = await db.select().from(usersTable).where(eq(usersTable.email, email))

        if(!result) return undefined

        return new User({id: result.id as UUID, name: result.name, cpf: result.cpf, email: result.email, password: result.password})
    }

    async save(item: User): Promise<UUID> {
        const {id, name, cpf, email, password } = item
        
        const result = await db.insert(usersTable).values({id, name, cpf, email, password}).returning()
        
        return result[0].id as UUID
    }

    async findAll(): Promise<Array<User>> {
        throw new Error("Method not implemented.");
    }

}