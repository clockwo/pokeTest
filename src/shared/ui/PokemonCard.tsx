import type { Pokemon } from '@/shared/interfaces/poke.interface';
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';

interface PokemonCard {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: PokemonCard) => {
  const attackStat = pokemon.stats.find((stat) => stat.stat.name === 'attack');

  return (
    <Card
      sx={{
        padding: '44px',
        backgroundColor: '#000000',
        display: 'grid',
        gap: '44px',
      }}
    >
      <CardHeader
        titleTypographyProps={{
          textTransform: 'capitalize',
          color: '#A0A0A0',
          fontSize: 48,
          fontWeight: 700,
        }}
        sx={{
          p: 0,
        }}
        title={pokemon.name}
      />
      <CardMedia
        sx={{ height: 200 }}
        image={pokemon.sprites.front_default}
        title={pokemon.name}
      />
      <CardContent
        sx={{
          p: 0,
        }}
      >
        <Typography>id: {pokemon.id}</Typography>
        <Typography>height: {pokemon.height}</Typography>
        <Typography>attack: {attackStat?.base_stat}</Typography>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
