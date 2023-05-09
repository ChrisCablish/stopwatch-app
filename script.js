const millisecondsDiplay = document.getElementById('milliseconds');
const secondsDisplay = document.getElementById('seconds');
const minutesDisplay = document.getElementById('minutes');

const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let intervalID;
let startTime = 0; //time (in ms) that start button was clicked
let millisecondsSinceStart = 0; //amount of milliseconds since start
let lastLoggedSeconds = 0;
let lastLoggedMinutes = 0; 
let currentTimeInSeconds;
let currentTimeInMinutes;

start.addEventListener('click', () => {
    if (!intervalID) {
        startTime = new Date().getTime() - millisecondsSinceStart;
        intervalID = setInterval (() => {
            millisecondsSinceStart = new Date().getTime() - startTime;
            millisecondsDiplay.innerText = millisecondsSinceStart;

            currentTimeInSeconds = Math.floor(millisecondsSinceStart / 1000);
            if (currentTimeInSeconds > lastLoggedSeconds) {
                secondsDisplay.innerText = currentTimeInSeconds;
            }
            currentTimeInMinutes = Math.floor(currentTimeInSeconds / 60);
            if (currentTimeInMinutes > lastLoggedMinutes) {
                minutesDisplay.innerText = currentTimeInMinutes;
            }

        }, 1);
    }
});








// start.addEventListener('click', () => {
//     if (!intervalID) {
//         startTime = new Date().getTime() - elapsedTime;
//         intervalID = setInterval (() => {
//             elapsedTime = new Date().getTime() - startTime;
//             millisecondsDiplay.innerText = elapsedTime;
            
//             const currentTimeInSeconds = Math.floor(elapsedTime / 1000);
//             if (currentTimeInSeconds > lastLoggedTime) {
//                 secondsDisplay.innerText = currentTimeInSeconds;
//                 lastLoggedTime = currentTimeInSeconds;
//             }

//         }, 1)
//     }
// });


stop.addEventListener('click', () => {
    clearInterval(intervalID);
    intervalID = null; 
});


reset.addEventListener('click', () => {
    millisecondsSinceStart = 0;
    millisecondsDiplay.innerText = millisecondsSinceStart;
    currentTimeInSeconds = Math.floor(millisecondsSinceStart / 1000);
    secondsDisplay.innerText = currentTimeInSeconds;
});

