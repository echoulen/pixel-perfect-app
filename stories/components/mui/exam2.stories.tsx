import {Box, Button} from '@mui/material';
import {Meta, Story} from '@storybook/react';
import React from 'react';

export default {
  title: 'components/mui/Exam2',
  component: Button,
} as Meta;

const Template: Story = (props) =>
  <div>
    <Box
      p={5}
      width={415}
    >
      <Button fullWidth={true} {...props}>
        Button
      </Button>
    </Box>
    <Box
      p={5}
      width={200}>
      <Button variant="outlined" {...props}>
        Button
      </Button>
    </Box>
    <Box
      p={5}
      width={200}>
      <Button variant="contained" {...props}>
        Button
      </Button>
    </Box>
  </div>;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {};
