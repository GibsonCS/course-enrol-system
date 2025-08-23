import type User from "./../../domain/entities/user.ts";
import { type UserRepository } from "./../../domain/repositories/user-repository.ts";
import {randomUUID, UUID} from 'node:crypto'

const users = new Set<User>()
export  default class UserRepositoryMemory implements UserRepository {  
    async findAll(): Promise<Set<User>> {
        return users
    }
    
    async save(item: User): Promise<UUID> {
        users.add(item)

        return randomUUID()
    }

}