Start button is clicked

start time variable is defined by getting time from date object. 


setInterval() function happens every 1 ms.

interval ID is initialized but has not been defined. 
startTime is initialized to 0
elapsedTime is initialized to 0

EVENT LISTENER START BUTTON {

if there is not an interval id, that means the timer hasn't been started since the page loaded. If it is the case that no interval id exists, then do the following:

    set startTime to equal the current time of day in ms - elapsedTime(which is currently zero on first pass) THIS IS NOT INSIDE SETINTERVAL() FUNCTION SO ONLY HAPPENS ONCE WHEN START IS CLICKED

    set IntervalID to equal the setInterval function that runs once every 1ms. INSIDE SETINTERVAL WE ARE RE-DEFINING elapsedTime() EVERY 1MS. elapsed time is equivalent to the Time it is RIGHT NOW AT THIS VERY MILLISECOND (new Date().getTime()) - the time that the start button was click (startTime);

}

So start time gets re-defined every time the start button is clicked. 

elapsed time gets redefined every time setInterval restarts (which is once every 1ms.)
