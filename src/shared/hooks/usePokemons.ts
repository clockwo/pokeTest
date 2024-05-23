import { Pokemon } from '@/shared/interfaces/poke.interface';
import { useState, useEffect } from 'react';
import PokemonApiService from '@/services/PokemonApiService';

const usePokemons = () => {
  const [pokemonList, setPokemonList] = useState<null | Pokemon[]>(null);
  const [selectedPokemon, setSelectedPokemon] = useState<null | Pokemon>(null);

  const fetchPokemons = async () => {
    const data = await PokemonApiService.getPokemonList();
    setPokemonList(data.results);
    selectPokemon(data.results[0]);
  };

  const findPokemonInList = (pokemon: Pokemon): Pokemon | undefined => {
    const foundPokemon = pokemonList?.find(
      (p) => p.name === pokemon.name && p.id
    );
    return foundPokemon;
  };

  const updatePokemonInList = (
    prevPokemonList: Pokemon[] | null,
    updatedPokemon: Pokemon
  ): Pokemon[] | null => {
    if (!prevPokemonList) return null;

    return prevPokemonList.map((p) =>
      p.name === updatedPokemon.name ? { ...updatedPokemon } : p
    );
  };

  const selectPokemon = async (pokemon: Pokemon) => {
    const cachedPokemon = findPokemonInList(pokemon);
    if (cachedPokemon) {
      setSelectedPokemon(cachedPokemon);
    } else {
      const pokemonDetails = await PokemonApiService.getPokemonDetails(
        pokemon.name
      );
      setPokemonList((prevPokemonList) =>
        updatePokemonInList(prevPokemonList, pokemonDetails)
      );
      setSelectedPokemon(pokemonDetails);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return { pokemonList, selectedPokemon, selectPokemon };
};

export default usePokemons;
