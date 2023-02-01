import React from 'react';
import {
  ButtonBase,
  Grid,
  Typography,
  Box,
  Stack,
} from '@mui/material';
import {
  useTheme
} from '@mui/material/styles';

import { IAssignmentQueue } from './types';
import PickIcon from '../../icons/PickIcon';
import PuzzleIcon from '../../icons/PuzzleIcon';

type Props = {
  item: IAssignmentQueue
  index: number
  selected: boolean
  onSelect: (index: number) => void
};

const AssignmentQueue: React.FC<Props> = ({
  item,
  index,
  selected,
  onSelect,
}) => {
  const theme = useTheme();

  return (
    <ButtonBase
      disableRipple
      sx={{
        padding: '16px',
        width: '100%',
        ...selected && ({
          border: 2,
          borderRadius: '12px',
          padding: '14px',
          borderColor: theme.palette.primary.dark,
        }),
      }}
      onClick={() => onSelect(index)}
      data-cy="queue-item-button"
    >
        <Grid
          container
          spacing={2}
          justifyContent={{xs: 'space-evenly', sm: 'normal'}}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          {/* Queue icon */}
          <Grid item alignSelf={{xs: 'initial', sm: 'center'}}>
            <Box
              {...selected && ({
                backgroundColor: theme.palette.primary.main,
              })}
              padding="12px 4px"
              borderRadius={2}
            >
              {item.type === 'pick' && (
                <PickIcon 
                  fill={selected
                    ? theme.palette.primary.contrastText
                    : theme.palette.text.secondary}
                />
              )}
              {item.type === 'puzzle' && (
                <PuzzleIcon
                  fill={selected
                    ? theme.palette.primary.contrastText
                    : theme.palette.text.secondary}
                />
              )}
            </Box>
          </Grid>
          {/* Header and subtitle */}
          <Grid item>
            <Stack
              direction="column"
              alignItems={{ xs: 'normal', sm: 'flex-start' }}
            >
              <Typography
                variant="h2"
                fontSize={24}
                data-cy="item-display-name"
              >
                {item.displayName}
              </Typography>
              <Typography
                variant="h3"
                fontSize={18}
                data-cy="item-subtitle"
              >
                {item.subTitle}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
    </ButtonBase>
  );
};

export default AssignmentQueue;
