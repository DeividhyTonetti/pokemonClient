
export class PokemonColor {
    id?: number
    name?: string | null
    color?: {
        name?: string
    }
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