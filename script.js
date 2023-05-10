// const millisecondsDiplay = document.getElementById('milliseconds');
// const secondsDisplay = document.getElementById('seconds');
// const minutesDisplay = document.getElementById('minutes');

// const start = document.getElementById('start');
// const stop = document.getElementById('stop');
// const reset = document.getElementById('reset');

// let intervalID;
// let startTime = 0; 
// let millisecondsSinceStart = 0; 
// let lastLoggedSeconds = 0;
// let lastLoggedMinutes = 0; 
// let currentTimeInSeconds;
// let currentTimeInMinutes;

// start.addEventListener('click', () => {
//     if (!intervalID) {
//         startTime = new Date().getTime() - millisecondsSinceStart;
//         intervalID = setInterval (() => {
//             millisecondsSinceStart = new Date().getTime() - startTime;
//             millisecondsDiplay.innerText = millisecondsSinceStart;

//             currentTimeInSeconds = Math.floor(millisecondsSinceStart / 1000);
//             if (currentTimeInSeconds > lastLoggedSeconds) {
//                 secondsDisplay.innerText = currentTimeInSeconds;
//             }
//             currentTimeInMinutes = Math.floor(currentTimeInSeconds / 60);
//             if (currentTimeInMinutes > lastLoggedMinutes) {
//                 minutesDisplay.innerText = currentTimeInMinutes;
//             }

//         }, 1);
//     }
// });

// stop.addEventListener('click', () => {
//     clearInterval(intervalID);
//     intervalID = null; 
// });


// reset.addEventListener('click', () => {
//     millisecondsSinceStart = 0;
//     millisecondsDiplay.innerText = millisecondsSinceStart;
//     currentTimeInSeconds = Math.floor(millisecondsSinceStart / 1000);
//     secondsDisplay.innerText = currentTimeInSeconds;
// });


const millisecondsDisplay = document.getElementById('milliseconds');
const secondsDisplay = document.getElementById('seconds');
const minutesDisplay = document.getElementById('minutes');

const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let intervalID;
let startTime = 0;
let elapsedTime = 0;
let currentTimeInMinutes = 0;
let currentTimeInSeconds = 0;
let currentTimeInMilliseconds = 0;

function updateDisplays() {
  currentTimeInMinutes = Math.floor(elapsedTime / 60000);
  currentTimeInSeconds = Math.floor((elapsedTime % 60000) / 1000);
  currentTimeInMilliseconds = (elapsedTime % 1000).toString();
  
  millisecondsDisplay.innerText = currentTimeInMilliseconds.padStart(3, "0");
  
  
  if (currentTimeInSeconds !== lastLoggedSeconds) {
    secondsDisplay.innerText = currentTimeInSeconds < 10 ? '0' + currentTimeInSeconds : currentTimeInSeconds;
    lastLoggedSeconds = currentTimeInSeconds;
  }
  
  if (currentTimeInMinutes !== lastLoggedMinutes) {
    minutesDisplay.innerText = currentTimeInMinutes < 10 ? '0' + currentTimeInMinutes : currentTimeInMinutes;
    lastLoggedMinutes = currentTimeInMinutes;
  }
}

let lastLoggedSeconds = -1;
let lastLoggedMinutes = -1;

start.addEventListener('click', () => {
  if (!intervalID) {
    startTime = new Date().getTime() - elapsedTime;
    intervalID = setInterval(() => {
      elapsedTime = new Date().getTime() - startTime;
      updateDisplays();
    }, 10);
  }
});

stop.addEventListener('click', () => {
  clearInterval(intervalID);
  intervalID = null;
});

reset.addEventListener('click', () => {
  clearInterval(intervalID);
  intervalID = null;
  elapsedTime = 0;
  millisecondsDisplay.innerText = '000';
  secondsDisplay.innerText = '00';
  minutesDisplay.innerText = '00';
  lastLoggedSeconds = -1;
  lastLoggedMinutes = -1;
});
