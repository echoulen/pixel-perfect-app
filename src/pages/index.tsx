import {Box} from '@mui/material';
import * as React from 'react';

// styles
const pageStyles = {
  color: '#232129',
  padding: 96,
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: '#663399',
};

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Pixel Perfect App</title>
      <Box style={headingStyles}>
        Congratulations
        <br />
        <span style={headingAccentStyles}>— you just made a Gatsby site! </span>
        🎉🎉🎉
      </Box>
    </main>
  );
};

export default IndexPage;
