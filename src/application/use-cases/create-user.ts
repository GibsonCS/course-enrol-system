import { randomUUID } from "node:crypto";
import User from "./../../domain/entities/user.ts";
import { type UserRepository } from "./../../domain/repositories/user-repository.ts";

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

    async execute({name,cpf,email,password}: UserCreateDTO ) {

        if(email === 'gibson@gmail.com') throw new Error('Email has already been register')

        const user = new User(name,cpf,email,password)

        const userId = await this.userRepository.save(user)

        return { userId }
       
    }

}