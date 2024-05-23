// src/entities/pokemon/model/services/PokemonApiService.ts
import axios from 'axios';
import { Pokemon } from '@/shared/interfaces/poke.interface';

interface PokemonListResponse {
  results: Pokemon[];
}

class PokemonApiService {
  static async getPokemonList(): Promise<PokemonListResponse> {
    const { data } = await axios<PokemonListResponse>(
      'https://pokeapi.co/api/v2/pokemon',
      {
        params: {
          limit: 10,
        },
      }
    );
    return data;
  }

  static async getPokemonDetails(name: string): Promise<Pokemon> {
    const { data } = await axios<Pokemon>(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    return data;
  }
}

export default PokemonApiService;
