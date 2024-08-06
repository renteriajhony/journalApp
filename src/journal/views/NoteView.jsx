import { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  DeleteOutlined,
  SaveOutlined,
  UploadOutlined,
} from '@mui/icons-material';
import {
  Button,
  CircularProgress,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import { ImageGallery } from '../components';
import { useForm } from '../../hooks/useForm';
import {
  setActiveNote,
  startDeleteNote,
  startSaveNotes,
  startUploadingFiles,
} from '../../store';
import Swal from 'sweetalert2';

export const NoteView = () => {
  const dispatch = useDispatch();
  const {
    active: note,
    messageSaved,
    isSaving,
  } = useSelector((state) => state.journal);
  const { body, title, date, onInputChange, formState } = useForm(note);

  const dateWithFormat = useMemo(() => {
    return new Date(parseInt(note.date)).toLocaleDateString('es-CO', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'America/Bogota',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    });
  }, [date]);

  const fileInputRef = useRef(() => {});

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 3) {
      Swal.fire({
        title: 'Nota actualizada',
        text: messageSaved,
        icon: 'success',
        confirmButtonText: 'Ok',
      });
    }
  }, [messageSaved]);

  const onSaveNote = () => {
    dispatch(startSaveNotes(formState));
  };

  const onFileInputChange = ({ target }) => {
    if (target.files === 0) return;
    dispatch(startUploadingFiles(target.files));
  };

  const onDelete = () => {
    console.log('onDelete');
    dispatch(startDeleteNote(formState));
  };

  return (
    <Grid
      container
      className='animate__animated animate__fadeIn animated__faster'
      direction='row'
      justifyContent='space-between'
      alignItems={'center'}
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight='light'>
          {dateWithFormat}
        </Typography>
      </Grid>
      <input
        type='file'
        variant='filled'
        multiple
        onChange={onFileInputChange}
        style={{ display: 'none' }}
        ref={fileInputRef}
      />
      <IconButton
        color='primary'
        disabled={isSaving}
        onClick={() => fileInputRef.current.click()}
      >
        <UploadOutlined />
      </IconButton>
      <Grid item>
        <Button
          color='primary'
          sx={{ padding: 2 }}
          onClick={onSaveNote}
          disabled={isSaving}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type='text'
          variant='filled'
          fullWidth
          placeholder='Ingrese un tíulo'
          label='Título'
          sx={{ border: 'none', mb: 1 }}
          name='title'
          value={title}
          onChange={onInputChange}
        />
        <TextField
          type='text'
          variant='filled'
          fullWidth
          multiline
          placeholder='¿Qué está pasando?'
          minRows={5}
          name='body'
          value={body}
          onChange={onInputChange}
        />
      </Grid>
      <Grid container justifyContent='end'>
        {isSaving ? (
          <CircularProgress color='error' size={30} sx={{ mt: 2 }} />
        ) : (
          <Button color='error' onClick={onDelete} sx={{ mt: 2 }}>
            <DeleteOutlined />
            Borrar
          </Button>
        )}
      </Grid>
      <ImageGallery images={note.imageUrls} />
    </Grid>
  );
};
