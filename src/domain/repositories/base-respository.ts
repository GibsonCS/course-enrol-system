export interface BaseRepository<T> {
    save(item: T): Promise<void>
    findAll(): Promise<Set<T>>
}