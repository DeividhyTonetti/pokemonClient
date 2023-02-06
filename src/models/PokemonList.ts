export class PokemonList {
    count?: number
    next?: string | null
    previus?: string | null
    results?: {
        name?: string
        url?: string
    }[]
}