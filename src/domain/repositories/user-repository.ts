import {type  BaseRepository } from "./../../domain/repositories/base-respository.ts";
import  type User from "../entities/user.ts";
import { UUID } from "node:crypto";


export interface UserRepository extends BaseRepository<User> {
    findByEmail(email: string): Promise<User | undefined>
    updateName(id: UUID, name: string): Promise<void>
}