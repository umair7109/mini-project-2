let time = document.querySelector(".time")
let milisecond=0;
let second = 0;
let minute = 0;
let hours = 0;

let interval = null;

function start() {
    if (interval) return;
    interval = setInterval(() => {
        milisecond++;
        if (milisecond===20){
            milisecond=0;
            second++;
        }
        if (second === 60) {
            second = 0;
            minute++;
        } if (minute === 60) {
            minute = 0;
            hours++;
        }
        time.innerHTML =
            `${String(hours).padStart(2, "0")}:${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}:
            ${String(milisecond).padStart(2,"0")}`;
    }, 100);

}

function stope() {
    clearInterval(interval)
    interval = null

}

function reset() {
    clearInterval(interval)

    hours = 0;
    minute = 0;
    second = 0;
    milisecond=0;
    time.innerHTML = `00:00:00:00`

}