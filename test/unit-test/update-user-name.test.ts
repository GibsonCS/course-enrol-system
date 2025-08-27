import {jest, test, expect} from '@jest/globals'
import { randomUUID } from 'node:crypto'
import UpdateUserName from '../../src/application/use-cases/update-user-name.ts'
import UserRepositoryPostgres from '../../src/infrastructure/repositories/user-repository-postgres.ts'
import User from '../../src/domain/entities/user.ts'

const userRepositoryPostgres = new UserRepositoryPostgres()
const updateUserName = new UpdateUserName(userRepositoryPostgres)


test('should throw an error (User does not exist) if the user is not found', async () => {
    jest.spyOn(userRepositoryPostgres,'findByID').mockResolvedValue(undefined)

    await expect(updateUserName.execute(randomUUID(), 'Gibsoon')).rejects.toThrow('User does not exist')
})

test('should throw an error(The name must be three or more characters) if the name is invalid', async () => {
    const user = new User({
            id: randomUUID(),
            name: 'Gibson',
            cpf: '',
            email: '',
            password: ''
    })

    jest.spyOn(userRepositoryPostgres,'findByID').mockResolvedValue(user)

     await expect(updateUserName.execute('66577342-f13e-4eb2-9df4-b4a71897f731', 'gb')).rejects.toThrow('The name must be three or more characters')
})

test('should return "true" if the name is modified with succesfully', async () => {
     const user = {
            id: randomUUID(),
            name: 'Gibson',
            cpf: '',
            email: '',
            password: ''
    } as User

    jest.spyOn(UserRepositoryPostgres.prototype,'findByID').mockResolvedValue(user)

    jest.spyOn(UserRepositoryPostgres.prototype,'updateName').mockResolvedValue()

    const result = await updateUserName.execute('66577342-f13e-4eb2-9df4-b4a71897f731', 'GibsonXxX')
    
    expect(result).toBe(true)
})