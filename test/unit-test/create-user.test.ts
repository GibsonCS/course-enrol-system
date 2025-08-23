import CreateUser from '../../src/application/use-cases/create-user.ts'
import UserRepositoryMemory from '../../src/infrastructure/databases/memory/user-repository-memory.ts'
import {test, expect} from '@jest/globals'


const userRepositoryMemory = new UserRepositoryMemory()

test('should create a user and return a uuid', async () => {
    const createUser = new CreateUser(userRepositoryMemory)
    
    const result = await createUser.execute({name:'GIbson',cpf:'15675357718',email:'gibson@gmail.com',password:"5445"})

    expect(result).toEqual(expect.objectContaining({
        userId: expect.any(String)
    }))
})