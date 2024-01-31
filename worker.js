let hr = min = sec = ms = 0;
let starTimer;
let isRunning = false; // Variable para rastrear si el cronómetro está en marcha

onmessage = function (event) {
    if (event.data === 'start' && !isRunning) {
        startTimer();
    } else if (event.data === 'stop') {
        stopTimer();
    } else if (event.data === 'reset') {
        resetTimer();
    }
};

function startTimer() {
    isRunning = true;
    starTimer = setInterval(() => {
        ms++;
        if (ms === 100) {
            sec++;
            ms = 0;
        }
        if (sec === 60) {
            min++;
            sec = 0;
        }
        if (min === 60) {
            hr++;
            min = 0;
        }
        if (sec === 12) {
            postMessage({ background: "#ff8000" });
        }
        if (sec === 15) {
            postMessage({ background: "#ff0000" });
        }

        postMessage({ milliseconds: ms, seconds: sec, minutes: min, hours: hr });
    }, 10);
}

function stopTimer() {
    clearInterval(starTimer);
    isRunning = false; // Restablecer la variable cuando se detiene el cronómetro
}

function resetTimer() {
    clearInterval(starTimer);
    isRunning = false; // Restablecer la variable al reiniciar el cronómetro
    hr = min = sec = ms = 0;
    postMessage({ background: "#6ebaed", milliseconds: ms, seconds: sec, minutes: min, hours: hr });
}
