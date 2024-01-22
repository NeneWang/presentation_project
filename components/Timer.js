import React, { useState, useEffect } from 'react';
import { CardContent, Grid, Typography, Button, Select, MenuItem } from '@mui/material';

export default function Timer() {
    const [timerSelected, setTimerSelected] = useState(25 * 60); // 25 minutes in seconds
    const [isTimer, setIsTimer] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isFinished, setIsFinished] = useState(false); // TODO: Implement this [1
    const [timeRemaining, setTimeRemaining] = useState(timerSelected);

    useEffect(() => {
        let interval = null;
        if (isTimer && !isPaused) {
            interval = setInterval(() => {
                setTimeRemaining(timeRemaining => timeRemaining - 1);
                if (timeRemaining <= 0) {
                    clearInterval(interval);
                    setIsFinished(true);
                    setIsTimer(false);
                }
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isTimer, isPaused, timerSelected]);

    const handleTimeChange = (event) => {
        setTimerSelected(event.target.value * 60); // Convert minutes to seconds
    };

    return (
        <CardContent>
            <br />
            <Grid item xs>
                <Typography variant='h5'>
                    {Math.floor(timeRemaining / 60)}m {timeRemaining % 60}s
                </Typography>
                <Typography variant="" component="div">
                    5 minutes for presenting
                </Typography>
                <Select value={timerSelected / 60} onChange={handleTimeChange}>
                    <MenuItem value={20}>20 minutes</MenuItem>
                    <MenuItem value={25}>25 minutes</MenuItem>
                    <MenuItem value={30}>30 minutes</MenuItem>
                    <MenuItem value={1}>1 minutes</MenuItem>
                    {/* Add more options as needed */}
                </Select>
            </Grid>
            <br />
            {
                isTimer ? (
                    <div>
                        <Button onClick={() => setIsPaused(!isPaused)}>
                            {isPaused ? 'Continue' : 'Pause'}
                        </Button>
                        <Button onClick={() => {
                            setIsFinished(true);
                            setIsTimer(false)}}>Finish</Button>
                        <Button onClick={() => setTimeRemaining(timerSelected)}>Reset</Button>
                    </div>
                ) : (
                    <Button onClick={() => setIsTimer(true)}>Start</Button>
                )
            }
            {
                isFinished ? (
                    <div>
                        <Typography variant='h5'>
                            Youtube Submisssion Link (You can set it as unlisted link)
                        </Typography>
                        <Button onClick={() => setIsFinished(false)}>Reset</Button>
                    </div>
                ) : (<></>
                )
            }
        </CardContent>
    );
}