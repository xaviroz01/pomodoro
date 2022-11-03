// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var timer;
var eleSec = document.getElementById('TimeSecond');
var eleMinute = document.getElementById('TimeMinute');
var eleStart = document.getElementById('start_btu');
var eleStop = document.getElementById('stop_btu');
var eleReset = document.getElementById('reset_btu');


var minute = 24
var sec = 59;

var click = false;

eleStart.addEventListener('click', function () {
    if (!click) {
        click = true;
        timer = setInterval(() => {
            eleMinute.innerHTML = 24;
            eleSec.innerHTML = sec;
            console.log(sec)
            
            if (sec == 0) {

                if (minute == 0 && sec == 0) {

                    eleSec.innerHTML = "00";
                    minute = 26;
                    eleMinute.innerHTML = minute;
                    click = false;
                    clearInterval(timer)
                    alert("หมดเวลา");
                }
                minute--
                eleMinute.innerHTML = minute;
                sec = 60
            }

            sec--
        }, 1000)
        console.log(click)
    }
});

console.log(click)

eleStop.addEventListener('click', function () {
    clearInterval(timer)
    click = false;
});

eleReset.addEventListener('click', function () {
    clearInterval(timer)
    click = false;

    eleSec.innerHTML = "00";
    minute = 25;
    eleMinute.innerHTML = minute;
    sec = 59
});