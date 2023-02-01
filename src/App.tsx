import React from 'react';
import { ThemeProvider } from '@mui/material';

import Nav from './features/Nav/Nav';
import PickQueueList from './features/PickQueues/AssignmentQueueList';
import { theme } from './theme';
import { mockDataQueues } from './features/PickQueues/mock-data';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <PickQueueList items={mockDataQueues} />
    </ThemeProvider>
  );
};

export default App;
