import type User from "../../../domain/entities/user.ts";
import { type UserRepository } from "../../../domain/repositories/user-repository.ts";

const users = new Array<User>()
export  default class UserRepositoryMemory implements UserRepository {  
    async findAll(): Promise<Array<User>> {
        return users
    }
    
    async save(item: User): Promise<Number> {
        users.push(item)

        return 1
    }

}