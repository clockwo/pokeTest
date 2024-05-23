'use client';
import usePokemons from '@/shared/hooks/usePokemons';
import PokemonCard from '@/shared/ui/PokemonCard';
import PokemonList from '@/shared/ui/PokemonList';
import TopInfo from '@/shared/ui/TopInfo';
import { Box, Container } from '@mui/material';

const Poke = () => {
  const { pokemonList, selectedPokemon, selectPokemon } = usePokemons();

  return (
    <Container>
      <Box maxWidth={980} mt={12.5}>
        <TopInfo />
        <Box display="flex" gap="12px">
          <PokemonList
            pokemonList={pokemonList}
            selectPokemon={selectPokemon}
          />
          <Box minWidth={484}>
            {selectedPokemon && <PokemonCard pokemon={selectedPokemon} />}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Poke;
