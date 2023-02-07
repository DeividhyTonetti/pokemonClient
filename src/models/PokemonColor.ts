
export class PokemonColor {
    id?: number
    name?: string | null
    names?: {
        language?: {
            name?: string
            url?: string
        }
    }[]
    pokemon_species?: {
        name?: string
        url?: string
    }[]
}