import {test, expect, jest} from '@jest/globals'
import DeleteUser from '../../src/application/use-cases/delete-user.ts'
import UserRepositoryPostgres from '../../src/infrastructure/repositories/user-repository-postgres.ts'
import { randomUUID, UUID } from 'node:crypto'
import User from '../../src/domain/entities/user.ts'

const userRepositoryPostgres = new UserRepositoryPostgres()
const deleteUser = new DeleteUser(userRepositoryPostgres)
test('should throw an error (The user is not exist)', async() => {

    jest.spyOn(userRepositoryPostgres, 'findByID').mockResolvedValue(undefined)

    await expect(deleteUser.execute(randomUUID())).rejects.toThrow('The user is not exist')
})

test('should return "true" if the user is deleted', async() => {
    const user = {
        id: `8125aaa0-c6d1-4d5b-90bf-f189cc79e918`,
        name: 'Gibson',
        cpf: '',
        email: '',
        password: ''
    } as unknown as User

    jest.spyOn(userRepositoryPostgres, 'findByID').mockResolvedValue(user)
    jest.spyOn(userRepositoryPostgres,'delete').mockResolvedValue()

    const result = await deleteUser.execute('8125aaa0-c6d1-4d5b-90bf-f189cc79e918' as UUID)

    expect(result).toBe(true)
})