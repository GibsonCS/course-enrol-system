import { UUID } from "node:crypto"

export interface BaseRepository<T> {
    save(item: T): Promise<UUID>
    findAll(): Promise<Array<T>>
    findByID(id: string | number): Promise<T | undefined>
    update(item: T): Promise<void>
}