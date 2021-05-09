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
    justifyContent: 'center',
    '& > *:not(last-child)': {
      marginBottom: theme.spacing(1),
    },
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      '& > *:not(last-child)': {
        marginRight: theme.spacing(1),
        marginBottom: 0,
        minWidth: 128,
      },
    },
  },
  results: {
    padding: theme.spacing(3),
  },
}));

const Home = () => {
  const classes = useStyles();
  const initialStates = {
    startDate: '25 06 1980',
    endDate: '03 10 1985',
    isStartDateValid: true,
    isEndDateValid: true,
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
            <Typography>To calculate the difference between two days</Typography>
            <Typography variant="caption">Date format: DD MM YYYY, Date Range: 1900 to 2010</Typography>
          </InfoBox>
          <form>
            <div className={classes.dates}>
              <BaseTextInput
                label="Start Date"
                inputComponent={DateTextInput}
                value={startDate}
                onChange={event => {
                  setState({ ...state, startDate: event.target.value });
                  if (!isStartDateTouched) {
                    setState({ ...state, isStartDateTouched: true });
                  }
                }}
                onBlur={event => {
                  const { value } = event.target;
                  if (!value) return;
                  setState({ ...state, isStartDateValid: isValidDate(value) });
                }}
                error={showStartDateError}
                helperText={showStartDateError ? 'Invalid date format' : null}
              />
              <BaseTextInput
                label="End Date"
                inputComponent={DateTextInput}
                value={endDate}
                onChange={event => { 
                  setState({ ...state, endDate: event.target.value });
                  if (!isEndDateTouched) {
                    setState({ ...state, isEndDateTouched: true });
                  }
                }}
                onBlur={event => {
                  const { value } = event.target;
                  if (!value) return;
                  setState({ ...state, isEndDateValid: isValidDate(value) });
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
              <Button onClick={onClear} variant="outlined">
                Reset
              </Button>
            </div>
          </form>
          {results !== null && (
            <Fade in={results !== null}>
              <div className={classes.results}>
                <Typography gutterBottom variant="h6" color="textSecondary">Output</Typography>
                <Typography>{`${results.startDate}, ${results.endDate}, ${results.totalDays}`}</Typography>
              </div>
            </Fade>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
