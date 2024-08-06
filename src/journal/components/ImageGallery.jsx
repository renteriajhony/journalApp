import { Grid, ImageList, ImageListItem } from '@mui/material';

export const ImageGallery = ({ images = [] }) => {
  return (
    <Grid container className='animate__animated animate__fadeIn'>
      <ImageList sx={{ width: '100%', height: 450 }} cols={4} rowHeight={200}>
        {images.map((image) => (
          <ImageListItem key={image}>
            <img srcSet={image} src={image} alt='Imagen...' loading='lazy' />
          </ImageListItem>
        ))}
      </ImageList>
    </Grid>
  );
};
