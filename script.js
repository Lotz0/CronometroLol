let hr = min = sec = ms = "0" + 0, starTimer;

const startBtn = document.querySelector(".start"),
    stopBtn = document.querySelector(".stop"),
    resetBtn = document.querySelector(".reset"),
    body = document.querySelector(".body");

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

function start(){
    startBtn.classList.add("active");
    stopBtn.classList.remove("stopActive");

        starTimer = setInterval (() => {
            ms++;
            ms = ms < 10 ? "0" + ms : ms;

            if(ms == 100) {
                sec++;
                sec = sec < 10 ? "0" + sec : sec;
                ms = "0" + 0;
            }
            if(sec == 60) {
                min++;
                min = min < 10 ? "0" + min : min;
                sec = "0" + 0;
            }
            if(min == 60) {
                hr++;
                hr = hr < 10 ? "0" + hr : hr;
                min = "0" + 0;
            }
            if(min == 12) {
                body.style.background = "#ff8000";
            }
            if(min == 15) {
                body.style.background = "#ff0000";
            }

            putValue();
            }, 10
        
        )
}

function stop() {
    startBtn.classList.remove("active");
    stopBtn.classList.remove("stopActive");
    clearInterval(starTimer);
}

function reset() {
    startBtn.classList.remove("active");
    stopBtn.classList.remove("stopActive");
    clearInterval(starTimer);
    body.style.background = "#6ebaed"
    hr = min = sec = ms = "0" + 0;
    putValue(); 
}

function putValue() {
    document.querySelector(".milliseconds").innerHTML = ms;
    document.querySelector(".seconds").innerHTML = sec;
    document.querySelector(".minute").innerHTML = min;
    document.querySelector(".hour").innerHTML = hr;
}


