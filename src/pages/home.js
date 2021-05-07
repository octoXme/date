import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BaseTextInput from 'components/base-text-input';
import DateTextInput from 'components/date-masked-input';

import { isValidDate, isValidDateRange } from 'helpers/is-valid-date';
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
      marginBottom: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        marginRight: theme.spacing(2),
        marginBottom: 0,
      },
    },
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
  },
  results: {

  },
}));

const Home = () => {
  const classes = useStyles();
  const [error, setError] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isStartDateValid, setIsStartDateValid] = useState(true);
  const [isEndDateValid, setIsEndDateValid] = useState(true);

  console.log(getDayDifference("25 06 2000", "25 07 2001"))

  const onCalculateDates = () => {
    if (isStartDateValid && isStartDateValid && isValidDateRange(startDate, endDate)) {
      // calculate the day difference

    } else {
      setError("Invalid Dates");
    }
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
          <Typography gutterBottom>To calculate the difference between two days, please enter a start and end date</Typography>
          <Typography variant="body2">Year range are limited from 1900 to 2010</Typography>
          <div className={classes.dates}>
            <BaseTextInput
              label="Start Date"
              inputComponent={DateTextInput}
              onBlur={event => {
                setStartDate(event.target.value);
                setIsStartDateValid(isValidDate(event.target.value));
              }}
              error={!isStartDateValid}
            />
            <BaseTextInput
              label="End Date"
              inputComponent={DateTextInput}
              onBlur={event => {
                setEndDate(event.target.value)
                setIsEndDateValid(isValidDate(event.target.value));
              }}
              error={!isEndDateValid}
            />
          </div>
          <div className={classes.button}>
            <Button
              color="secondary"
              variant="contained"
              disabled={startDate === null || endDate === null}
              onClick={onCalculateDates}
            >
              Go
            </Button>
          </div>
          {/* TODO error */}
          {error && <div>{error}</div>}
          <div className={classes.results}>

          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
