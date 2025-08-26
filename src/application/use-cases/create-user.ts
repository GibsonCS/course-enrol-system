import User from "./../../domain/entities/user.ts";
import { type UserRepository } from "./../../domain/repositories/user-repository.ts";
import { type CreateUserInputDTO } from "../dtos/user/create-user-input-dto.ts";
import * as argon from 'argon2'
import {randomUUID, UUID} from 'node:crypto'


export default class CreateUser {
    private userRepository: UserRepository
    constructor(userRepository: UserRepository) { 
        this.userRepository = userRepository
    }

    async execute(input: CreateUserInputDTO ): Promise<{ userID: UUID }> {
        const findedUser = await this.userRepository.findByEmail(input.email)

        if(findedUser) throw new Error('Email has already been register')

        const encryptedPassword = await argon.hash(input.password)

        const user = new User({id: randomUUID() , name: input.name, cpf: input.cpf, email: input.email, password: encryptedPassword})

        const userID = await this.userRepository.save(user)

        return { userID } 
    }

}