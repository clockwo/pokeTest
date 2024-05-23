import type { Pokemon } from '@/shared/interfaces/poke.interface';
import { Chip } from '@mui/material';

interface CustomChipProps {
  pokemon: Pokemon;
  callback: (pokemon: Pokemon) => void;
}

const CustomChip = ({ pokemon, callback }: CustomChipProps) => {
  return (
    <Chip
      label={pokemon.name}
      onClick={() => callback(pokemon)}
      color="primary"
      sx={{
        backgroundColor: '#1a86ec',
        color: '#fff',
        p: 2.5,
        fontSize: 20,
        borderRadius: 44,
        height: 'unset',
      }}
    />
  );
};

export default CustomChip;
