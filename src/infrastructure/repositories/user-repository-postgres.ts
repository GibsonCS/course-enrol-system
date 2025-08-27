import { UUID } from "node:crypto";
import User from "../../domain/entities/user.ts";
import { type UserRepository } from "../../domain/repositories/user-repository.ts";
import { db, } from '../databases/postgres/db.ts';
import { usersTable } from '../databases/postgres/schemas/user-schema.ts';
import { eq } from "drizzle-orm";

export default class UserRepositoryPostgres implements UserRepository {

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