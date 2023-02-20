export class PokemonData {
    count?: number
    next?: string | null
    previus?: string | null
    results?: {
        name: string
        url: string
    }[] | null
}