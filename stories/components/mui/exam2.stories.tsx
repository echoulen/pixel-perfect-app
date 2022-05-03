import {Box, Button, TextField} from '@mui/material';
import {Meta, Story} from '@storybook/react';
import React from 'react';
import {AppSlider} from '../../../src/components/widgets/AppSlider';

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
    <Box p={5}>
      <TextField color="primary" variant="outlined" fullWidth={true} />
    </Box>
    <Box p={5}>
      <AppSlider onChange={console.log} label={'50'} />
    </Box>
  </div>;

export const Overall = Template.bind({});
Overall.args = {};
Overall.parameters = {};
