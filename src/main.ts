import CreateUser, { type UserCreateDTO } from "@/application/use-cases/create-user.ts";
import UserRepositoryMemory  from "@/infrastructure/database/user-repository-memory.ts";
import User from "./domain/entities/user.ts";

const createUser = new CreateUser(new UserRepositoryMemory())

const user = new User('Gibson','199999','gibs@gibs','99999')

await createUser.execute(user)
