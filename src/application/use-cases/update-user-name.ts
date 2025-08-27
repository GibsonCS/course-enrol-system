import { UserRepository } from "../../../src/domain/repositories/user-repository.ts";

export default class UpdateUserName {
    private userRepository: UserRepository

    constructor(userRepository: UserRepository){
        this.userRepository = userRepository 
    }

    async execute (id: string, name: string): Promise<boolean> {

        const user =  await this.userRepository.findByID(id)
    
        if(!user) throw new Error('User does not exist')
        
        user.name = name

        await this.userRepository.updateName(user.id, user.name)

        return true
    }
}