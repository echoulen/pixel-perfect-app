import {Box, Button, Typography} from '@mui/material';
import React from 'react';

export type UserTileProps = {
  imageSrc: string
  isFollowing: boolean
}

export const UserTile = React.memo<UserTileProps>(({imageSrc, isFollowing}) => (
  <Box display="flex" height={40}>
    <Box width={40} height={40}>
      <img src={imageSrc} alt=""/>
    </Box>
    <Box width={15} />
    <Box
      flex={1}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box>
        <Typography
          lineHeight={1}
          variant="body1"
          color="text.primary"
          pt="2px"
        >
          Fullname
        </Typography>
      </Box>
      <Box>
        <Typography
          lineHeight={1}
          variant="body2"
          color="text.primary"
        >
          @username
        </Typography>
      </Box>
    </Box>
    <Box display="flex" alignItems="center">
      <Button variant={isFollowing ? 'contained' : 'outlined'}>
        {isFollowing ? 'Following' : 'Follow'}
      </Button>
    </Box>
  </Box>
));

