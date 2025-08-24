import CreateUser from '../../src/application/use-cases/create-user.ts'
import UserRepositoryPostgres from '../../src/infrastructure/repositories/user-repository-postgres.ts'
import {test, expect} from '@jest/globals'


const userRepositoryPostgres = new UserRepositoryPostgres()
const createUser = new CreateUser(userRepositoryPostgres)

test('should create a user and return a uuid', async () => {
    const result = await createUser.execute({name:'GIbson',cpf:'15675357718',email:'gibson8fla@gmail.com',password:"5445"})

    expect(result).toEqual(expect.objectContaining({
        userId: expect.any(Number)
    }))
})

test('should return a error to send a name less than 3', async () => {
    await expect( createUser.execute({name:'Gi',cpf:'15675357718',email:'gibsons@gmail.com',password:"5445"})).rejects.toThrow('The name must be three or more characters')
})


test('should return a error if a email has already been register', async () => {
    
   expect(async () => await createUser.execute({name:'Gibs',cpf:'15675357718',email:'gibson@gmail.com',password:"5445"})).rejects.toThrow('Email has already been register') 
})