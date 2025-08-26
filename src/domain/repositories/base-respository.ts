import { UUID } from "node:crypto"

export interface BaseRepository<T> {
    save(item: T): Promise<UUID>
    findAll(): Promise<Array<T>>
}