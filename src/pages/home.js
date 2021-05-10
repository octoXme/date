import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import BaseTextInput from 'components/base-text-input';
import DateTextInput from 'components/date-masked-input';
import InfoBox from 'components/info-box';
import { isValidDate } from 'helpers/is-valid-date';
import getDayDifference from 'helpers/get-day-difference';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    maxWidth: 1200,
    width: '100%',
    margin: theme.spacing(2, 4),
  },
  dates: {
    margin: theme.spacing(2, 0),
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
    '& > *': {
      flex: '1 1 auto',
    },
    '& > *:not(:last-child)': {
      marginBottom: theme.spacing(1),
      [theme.breakpoints.up('sm')]: {
        marginRight: theme.spacing(2),
        marginBottom: 0,
      },
    },
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      maxWidth: 256,
      width: '100%',
      '&:not(last-child)': {
        marginBottom: theme.spacing(1),
      },
    },
  },
  results: {
    padding: theme.spacing(2, 3),
  },
}));

const Home = () => {
  const classes = useStyles();
  const initialStates = {
    startDate: '',
    endDate: '',
    isStartDateValid: false,
    isEndDateValid: false,
    isStartDateTouched: false,
    isEndDateTouched: false,
    results: null,
  };
  const [state, setState] = useState(initialStates);
  const { startDate, endDate, isStartDateValid, isEndDateValid, isStartDateTouched, isEndDateTouched, results} = state;
  const showStartDateError = isStartDateTouched && !isStartDateValid;
  const showEndDateError = isEndDateTouched && !isEndDateValid;

  // reset to initial states
  const onClear = () => setState(initialStates);

  const onCalculateDates = () => {
    if (!isStartDateValid || !isStartDateValid) return;
    // calculate the day difference
    setState({ ...state, results: getDayDifference(startDate, endDate, true) })
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">Date Difference</Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.root}>
        <div className={classes.content}>
          <InfoBox variant="info">
            <Typography>Calculate the difference between two dates</Typography>
            <Typography variant="caption">Date format: DD MM YYYY, Date range: 1900 to 2010</Typography>
          </InfoBox>
          <form>
            <div className={classes.dates}>
              <BaseTextInput
                label="Date 1"
                inputComponent={DateTextInput}
                value={startDate}
                onChange={event => setState({ ...state, startDate: event.target.value, isStartDateTouched: false })}
                onBlur={event => {
                  const { value } = event.target;
                  if (!value) return;
                  setState({ ...state, isStartDateValid: isValidDate(value), isStartDateTouched: true });
                }}
                error={showStartDateError}
                helperText={showStartDateError ? 'Invalid date format' : null}
              />
              <BaseTextInput
                label="Date 2"
                inputComponent={DateTextInput}
                value={endDate}
                onChange={event => setState({ ...state, endDate: event.target.value, isEndDateTouched: false })}
                onBlur={event => {
                  const { value } = event.target;
                  if (!value) return;
                  setState({ ...state, isEndDateValid: isValidDate(value), isEndDateTouched: true });
                }}
                error={showEndDateError}
                helperText={showEndDateError ? 'Invalid date format' : null}
              />
            </div>
            <div className={classes.buttons}>
              <Button
                color="secondary"
                variant="contained"
                onClick={onCalculateDates}
              >
                Go
              </Button>
              <Button onClick={onClear}>
                Reset
              </Button>
            </div>
          </form>
          {results !== null && (
            <Fade in={results !== null}>
              <div className={classes.results}>
                <Typography gutterBottom variant="h6" color="textSecondary">Output</Typography>
                <Typography variant="h6">{results}</Typography>
              </div>
            </Fade>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
