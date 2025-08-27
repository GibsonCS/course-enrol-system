import {type  BaseRepository } from "./../../domain/repositories/base-respository.ts";
import  type User from "../entities/user.ts";


export interface UserRepository extends BaseRepository<User> {
    findByEmail(email: string): Promise<User | undefined>
}