import React from 'react';
import { InputLabel, FilledInput, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HelperText from 'components/helper-text';

const useStyles = makeStyles(theme => ({
  inputRoot: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.grey[100],
    minWidth: 120,
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.easeOut,
    }),
    '&:before, &:after': {
      display: 'none',
    },
  },
  inputError: {
    backgroundColor: '#fff5f5',
    boxShadow: '0 0 0 2px #ff6b81',
  },
  helperText: {
    marginTop: theme.spacing(1),
  },
}));

const BaseFilledInput = ({ name, label, error, helperText, ...other }) => {
  const classes = useStyles();

  return (
    <FormControl variant="filled">
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <FilledInput
        disableUnderline
        error={error}
        classes={{
          root: classes.inputRoot,
          error: classes.inputError,
        }}
        autoComplete="no"
        {...other}
      />
      {helperText && (
        <div className={classes.helperText}>
          <HelperText error={error} helperText={helperText} />
        </div>
      )}
    </FormControl>
  );
};

export default BaseFilledInput;
