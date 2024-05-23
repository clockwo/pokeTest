import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { memo } from 'react';

const TopInfo = () => {
  return (
    <Box display="flex" justifyContent="space-between" mb="54px">
      <Box padding="7px" border="1px solid #fff">
        <Typography
          textTransform="uppercase"
          fontWeight={500}
          lineHeight={1.12}
          fontSize={12}
          color="#fff"
        >
          Покемоны API
        </Typography>
      </Box>
      <Box display="flex" gap="10px">
        <Image src="/click.svg" alt="ClickIcon" width={22.93} height={24.29} />
        <Typography
          lineHeight={1}
          maxWidth="15ch"
          fontWeight={600}
          fontSize={12}
          color="#fff"
        >
          Нажмите на нужное Покемона
        </Typography>
      </Box>
    </Box>
  );
};

export default memo(TopInfo);
