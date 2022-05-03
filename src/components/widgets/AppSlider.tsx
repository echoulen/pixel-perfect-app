import {Slider, styled} from '@mui/material';
import {makeStyles} from '@mui/styles';
import React from 'react';

export const AppSliderBase = styled(Slider)({
  'width': 'calc(100% - 15px)',
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
});

const marks = [
  {
    value: 0,
    label: '3',
    offset: '2px',
  },
  {
    value: 19,
    label: '6',
    offset: '5px',
  },
  {
    value: 38,
    label: '9',
    offset: '5px',
  },
  {
    value: 57,
    label: '12',
    offset: '10px',
  },
  {
    value: 76,
    label: '15',
    offset: '10px',
  },
  {
    value: 100,
    label: '50',
    offset: '10px',
  },
];

type MarkLabelProps = {
  isCurrent: boolean
  className: string
  style: any
  'data-index': number
}

const MarkLabel: React.FunctionComponent<MarkLabelProps> = (props) => {
  const offset = marks.find((it) => it.label === props.children)!!.offset;
  const classes = makeStyles({
    root: {
      top: 38,
      position: 'absolute',
      opacity: props.isCurrent ? 1 : .5,
      left: `calc(${props.style.left} - ${offset})`,
    },
  })();

  return (
    <div className={classes.root}>
      <span>{props.children}</span>
    </div>
  );
};

type AppSliderProps = {
  label: string
  onChange: (label: string) => void
}

export const AppSlider: React.FunctionComponent<AppSliderProps> =
  ({label, onChange}) => {
    const currentValue = marks.find((it) => it.label == label)!!.value;
    return (
      <AppSliderBase
        marks={marks}
        step={null}
        components={{
          MarkLabel: (props) => {
            return (
              <MarkLabel {...props} isCurrent={props.children === label} />
            );
          },
        }}
        valueLabelDisplay="off"
        value={currentValue}
        onChange={(_, value) => {
          const v = marks.find((it) => it.value === value)!!.label!!;
          onChange(v);
        }}
      />
    );
  };
