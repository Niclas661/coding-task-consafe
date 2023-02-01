import React from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Paper,
} from '@mui/material';

import MenuIcon from '../../icons/Menu';
import MoreVertical from '../../icons/MoreVertical';

const Nav = () => {
  return (
    <Paper
      elevation={4}
      sx={{
        borderBottom: {
          borderRadius: 12,
        },
      }}
    >
      <AppBar
        position="static"
        color="transparent"
        component="nav"
        sx={{
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            color="inherit"
            sx={{
              border: 'none',
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            size="large"
            edge="end"
            aria-label="menu"
            color="inherit"
            sx={{
              border: 'none',
            }}
          >
            <MoreVertical />
          </IconButton>
        </Toolbar>
        <Typography
          variant="h1"
          sx={{
            marginLeft: { xs: 2, sm: 4 },
            marginBottom: 4,
            fontWeight: 700,
            fontSize: 32,
          }}>
          Select queue
        </Typography>
      </AppBar>
    </Paper>
  )
};

export default Nav;
