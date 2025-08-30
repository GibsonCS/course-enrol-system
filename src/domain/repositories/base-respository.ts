import { type UUID } from "node:crypto"

export interface BaseRepository<T> {
    save(item: T): Promise<UUID>
    findAll(): Promise<Array<T>>
    findByID(id: UUID): Promise<T | undefined>
    update(item: T): Promise<void>
    delete(id: UUID): Promise<void>
}