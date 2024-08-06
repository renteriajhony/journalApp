import { TurnedInNot } from '@mui/icons-material';
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../store';

export const SideBarItem = ({ title, body, date, id, imageUrls = [] }) => {
  const dispatch = useDispatch();
  const newTitle = useMemo(() => {
    return title.length > 17 ? `${title.slice(0, 17)}...` : title;
  }, [title]);

  const onActivedNote = () => {
    dispatch(setActiveNote({ title, body, date, id, imageUrls }));
  };

  return (
    <ListItem disablePadding onClick={onActivedNote}>
      <ListItemButton>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
