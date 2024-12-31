const hour = document.getElementById('hour');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

function startTiming(){
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = (hh * 30) + (mm / 2);
    let mRotation = mm * 6;
    let sRotation = ss*6

    hour.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)` ;
    sec.style.transform = `rotate(${sRotation}deg)`
}

setInterval(startTiming,1000)