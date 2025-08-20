import type User from "@/domain/entities/user.ts";
import { type UserRepository } from "@/domain/repositories/user-repository.ts";

export type UserCreateDTO = {
    name: string,
    cpf: string,
    email: string,
    password: string
}

export default class CreateUser {
    private userRepository: UserRepository
    constructor(userRepository: UserRepository) { 
        this.userRepository = userRepository
    }

    async execute(user: User ) {
        await this.userRepository.save(user)
        console.log(await this.userRepository.findAll())
    }

}