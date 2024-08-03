import { TurnedInNot } from '@mui/icons-material';
import {
  Box,
  Drawer,
  Typography,
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  Grid,
  ListItemText,
} from '@mui/material';
import { useSelector } from 'react-redux';

export const Sidebar = ({ children, drawerWidth = 240 }) => {
  const displayName = useSelector((state) => state.auth.displayName);

  return (
    <Box
      component='nav'
      sx={{
        width: { sm: `${drawerWidth}px` },
        height: '100vh',
        flexShrink: { sm: 0 },
      }}
      variant='permanent'
      anchor='left'
    >
      <Drawer
        variant='permanent'
        open
        anchor='left'
        sx={{
          display: { xs: 'block', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        <Toolbar>
          <Typography variant='h6' noWrap component='div'>
            {displayName}
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'].map(
            (text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText primary={text} />
                    <ListItemText secondary='Placeat dolorum iste facere quaerat.' />
                  </Grid>
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
        {children}
      </Drawer>
    </Box>
  );
};
