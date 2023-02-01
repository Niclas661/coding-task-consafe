import React, { useState } from 'react';
import {
  Container,
  Typography,
} from '@mui/material';

import PickQueue from './AssignmentQueue';
import { IAssignmentQueue } from './types';

type Props = {
  items: Array<IAssignmentQueue>
};

const PickQueueList: React.FC<Props> = ({
  items,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Container
      maxWidth="xs"
      sx={{
        padding: 4,
      }}
      data-cy="queue-list-container"
    >
      {items.length === 0 && (
        <Typography variant="h5">
          No items in the queue
        </Typography>
      )}
      {items.map((q, index) => (
        <PickQueue
          item={q}
          index={index}
          onSelect={() => setSelectedIndex(index)}
          selected={selectedIndex === index}
        />
      ))}
    </Container>
  );
};

export default PickQueueList;
