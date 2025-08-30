import {type  UUID } from "node:crypto";
import {type UserRepository } from "../../domain/repositories/user-repository.ts";

export default class DeleteUser {
    private userRepository: UserRepository

    constructor(userRepositor: UserRepository) {
        this.userRepository = userRepositor
    }

    async execute(id: UUID){
        const user = await this.userRepository.findByID(id)

        if(!user) throw new Error('The user is not exist')

        await this.userRepository.delete(user.id)

        return true
    }
}