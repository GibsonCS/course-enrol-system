import { type UserCreateDTO } from "@/application/use-cases/create-user.ts";
import type User from "@/domain/entities/user.ts";
import { type UserRepository } from "@/domain/repositories/user-repository.ts";

const users = new Set<User>()
export  default class UserRepositoryMemory implements UserRepository {  
    async findAll(): Promise<Set<User>> {
        return users
    }
    
    async save(item: User): Promise<void> {
        users.add(item)
    }

}