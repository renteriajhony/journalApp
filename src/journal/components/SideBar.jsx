import { Box, Drawer, Typography, Toolbar, Divider, List } from '@mui/material';
import { useSelector } from 'react-redux';
import { SideBarItem } from './SideBarItem';

export const Sidebar = ({ children, drawerWidth = 240 }) => {
  const displayName = useSelector((state) => state.auth.displayName);
  const { notes } = useSelector((state) => state.journal);
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
          {notes.map((note) => (
            <SideBarItem {...note} key={note.id} />
          ))}
        </List>
        {children}
      </Drawer>
    </Box>
  );
};
