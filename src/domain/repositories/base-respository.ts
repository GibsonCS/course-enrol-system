export interface BaseRepository<T> {
    save(item: T): Promise<Number>
    findAll(): Promise<Set<T>>
}