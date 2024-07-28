import { StarOutline } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
      className='box-shadow'
      sx={{
        minHeight: 'calc(100vh - 120px)',
        backgroundColor: 'primary.main',
        borderRadius: 3,
      }}
    >
      <Grid item xs={12} sx={{ fontSize: 100, color: 'white' }}>
        <StarOutline />
      </Grid>
      <Grid item xs={12} sx={{ fontSize: 100, color: 'white' }}>
        <Typography>Selecciona o crea una entrada</Typography>
      </Grid>
    </Grid>
  );
};
