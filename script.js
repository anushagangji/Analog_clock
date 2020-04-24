const hr= document.querySelector("#hrs");
const min= document.querySelector("#mins");
const sec= document.querySelector("#secs");

function run_the_clock(){
    var date = new Date();
    let hr  = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    console.log("Hour: "+hr+ " Minute: "+ min + " Second: "+ sec);

    let hrPosition = hr*360/12 + ((min * 360/60)/12) ;
    let minPosition = (min * 360/60) + (sec* 360/60)/60;
    let secPosition = sec * 360/60;

    hrs.style.transform = "rotate(" + hrPosition + "deg)";
    mins.style.transform = "rotate(" + minPosition + "deg)";
    secs.style.transform = "rotate(" + secPosition + "deg)";
}
var interval = setInterval(run_the_clock, 1000);