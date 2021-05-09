import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { makeStyles, fade } from '@material-ui/core/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[100],
    borderRadius: theme.shape.borderRadius,
    display: 'flex',
    '&.info': {
      color: theme.palette.info.dark,
      backgroundColor: fade(theme.palette.info.light, 0.2),
    },
    '&.alert': {
      color: theme.palette.error.dark,
      backgroundColor: fade(theme.palette.error.light, 0.2),
    },
  },
  icon: {
    color: 'inherit',
    width: 32,
    display: 'flex',
  },
  content: {
    lineHeight: 1.5,
  },
}));

const InfoIcon = props => (
  <SvgIcon {...props}>
    <path d='M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z' />
  </SvgIcon>
);

const InfoBox = ({ variant, children }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, variant)}>
      <div className={classes.icon}>
        <InfoIcon />
      </div>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

InfoBox.propTypes = {
  variant: PropTypes.oneOf(['info', 'alert']),
};

export default InfoBox;
