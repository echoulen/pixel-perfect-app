import {ExtendSliderUnstyled} from '@mui/base/SliderUnstyled';
import {Slider, styled} from '@mui/material';
import {SliderTypeMap} from '@mui/material/Slider/Slider';
import React from 'react';

export const AppSliderBase = styled(Slider)({
  'height': 8,
  '& .MuiSlider-track': {
    border: 'none',
    backgroundImage: 'linear-gradient(.25turn, #FF5C01, #FFD25F)',
  },
  '& .MuiSlider-rail': {
    paddingLeft: 40,
    paddingRight: 4,
  },
  '& .MuiSlider-thumb': {
    'height': 26,
    'width': 26,
    'backgroundColor': '#1B1B1B',
    'border': '6px solid #FFD05D',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      'boxShadow': 'inherit',
    },
    '&:before': {
      'display': 'none',
    },
  },
  '& .MuiSlider-mark': {
    'backgroundColor': 'transparent',
  },
  '& .MuiSlider-markLabel': {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: .5,
    paddingTop: 4,
  },
  '& .MuiSlider-markLabelActive': {
    opacity: 1,
    color: '#FFFFFF',
  },
});

const marks = [
  {
    value: 0,
    label: '3',
  },
  {
    value: 19,
    label: '6',
  },
  {
    value: 38,
    label: '9',
  },
  {
    value: 57,
    label: '12',
  },
  {
    value: 79,
    label: '15',
  },
  {
    value: 100,
    label: '50',
  },
];

export const AppSlider: ExtendSliderUnstyled<SliderTypeMap> = ({...props}) => (
  <AppSliderBase marks={marks} step={null} {...props} />
);
