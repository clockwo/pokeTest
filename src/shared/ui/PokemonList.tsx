import { Box } from '@mui/material';
import CustomChip from './CustomChip';
import { Pokemon } from '@/shared/interfaces/poke.interface';
import { memo } from 'react';

interface PokemonListProps {
  pokemonList: Pokemon[] | null;
  selectPokemon: (pokemon: Pokemon) => void;
}

const PokemonList = ({ pokemonList, selectPokemon }: PokemonListProps) => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      alignContent="flex-start"
      columnGap="6px"
      rowGap="10px"
    >
      {pokemonList &&
        pokemonList.map((poke) => (
          <CustomChip key={poke.name} pokemon={poke} callback={selectPokemon} />
        ))}
    </Box>
  );
};

export default memo(PokemonList);
