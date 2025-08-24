import User from "src/domain/entities/user.ts";
import { UserRepository } from "src/domain/repositories/user-repository.ts";
import { db } from '../databases/postgres/db.ts';
import { usersTable } from '../databases/postgres/schemas/user-schema.ts';

export default class UserRepositoryPostgres implements UserRepository {
    async save(item: User): Promise<Number> {
        const {name, cpf,email,password} = item
        
        const result = await db.insert(usersTable).values({name, cpf, email, password}).returning()
        
        return result[0].id
    }

    async findAll(): Promise<Set<User>> {
        throw new Error("Method not implemented.");
    }

}