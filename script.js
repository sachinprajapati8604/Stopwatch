
let timer = document.getElementById('time');

let hr = 0, min = 0, sec = 0;
let stopTime = true; // initially 

function startWatch() {
    if (stopTime === true) {
        stopTime = false;
        // console.log(stopTime)
        startTime();
    }
}

function stopWatch() {
    if (stopTime === false) {
        stopTime = true;
    }
}


function startTime() {
    if (stopTime === false) {
        sec = Number(sec);
        min = Number(min);
        hr = Number(hr);
        sec = sec + 1;

        if (sec === 60) {
            min = min + 1;
            sec = 0;
        }
        if (min === 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        if (sec < 10 || sec == 0) {
            sec = '0' + sec;
        }

        if (min < 10 || min == 0) {
            min = '0' + min;
        }

        if (hr < 10 || hr == 0) {
            hr = '0' + hr;
        }


        timer.innerHTML = `${hr}:${min}:${sec}`;
        setTimeout(startTime, 1000);
    }
}

function resetWatch() {
    timer.innerHTML = "00:00:00";
}


function liveWish() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    let h = date.getHours();
    let wish = "";
    let msg = document.getElementById('wish');

    if (h > 05 && h <= 12) {
        wish = `Hii,Good Morning <i class="material-icons">light_mode</i>`;
    } else if (h > 12 && h <= 16) {
        wish = `Hii,Good Afternoon <i class="material-icons">wb_sunny</i>`;
    } else if (h > 16 && h <= 23) {
        wish = `Hii,Good Evening <i class="material-icons">nightlight</i>`;
    }
    else {
        wish = `Hii,Good Evening <i class="material-icons">nights_stay</i>`;
    }
    
    msg.innerHTML = `${wish} `;
    setTimeout(liveWish, 1000);

}

liveWish();