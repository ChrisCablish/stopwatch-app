const millisecondsDiplay = document.getElementById('milliseconds');
const secondsDisplay = document.getElementById('seconds');

const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let intervalID;
let startTime = 0;
let elapsedTime = 0;
let seconds = 0;
let lastLoggedTime = 0;

//START BUTTON EVENT
start.addEventListener('click', () => {
    // If the timer is not running, set the start time to the current time
    if (!intervalID) {
        startTime = new Date().getTime() - elapsedTime;
        intervalID = setInterval (() => {
            elapsedTime = new Date().getTime() - startTime;
            millisecondsDiplay.innerText = elapsedTime;
            
            const currentTimeInSeconds = Math.floor(elapsedTime / 1000);
            if (currentTimeInSeconds > lastLoggedTime) {
                secondsDisplay.innerText = currentTimeInSeconds;
                console.log('action');
                lastLoggedTime = currentTimeInSeconds;
            }

        }, 1)
    }
});

//STOP BUTTON EVENT
stop.addEventListener('click', () => {
    clearInterval(intervalID);
    intervalID = null; // set the intervalID to null to indicate that the timer is not running
});


reset.addEventListener('click', () => {
    elapsedTime = 0;
    millisecondsDiplay.innerText = elapsedTime;
})











