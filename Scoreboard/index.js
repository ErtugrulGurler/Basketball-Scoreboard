let homeScoreCounter=0;
let guestScoreCounter=0;
function addPointToHome(n){
    homeScoreCounter += n;
    document.getElementById("home").textContent = homeScoreCounter;
}
function addPointToGuest(n){
    guestScoreCounter += n;
    document.getElementById("guest").textContent = guestScoreCounter;
}
function newGame(){

    /*document.location.reload(true);*/
    
}
let homeCounter=0;
function homeFaul(){
    if(homeCounter==0){document.getElementById("hone").style.backgroundColor="red"; homeCounter +=1;return 0;}
    if(homeCounter==1){document.getElementById("htwo").style.backgroundColor="red"; homeCounter +=1;return 0;}
    if(homeCounter==2){document.getElementById("hthree").style.backgroundColor="red"; homeCounter +=1;return 0;}
    if(homeCounter==3){document.getElementById("hfour").style.backgroundColor="red"; homeCounter +=1;return 0;}
    if(homeCounter==4){document.getElementById("hfive").style.backgroundColor="red"; homeCounter +=1;return 0;}
}
let guestCounter=0;
function guestFaul(){
    if(guestCounter==0){document.getElementById("gone").style.backgroundColor="red"; guestCounter +=1; return 0;}
    if(guestCounter==1){document.getElementById("gtwo").style.backgroundColor="red"; guestCounter +=1; return 0;}
    if(guestCounter==2){document.getElementById("gthree").style.backgroundColor="red"; guestCounter +=1; return 0;}
    if(guestCounter==3){document.getElementById("gfour").style.backgroundColor="red"; guestCounter +=1; return 0;}
    if(guestCounter==4){document.getElementById("gfive").style.backgroundColor="red"; guestCounter +=1; return 0;}
}
let periodCounter=1;
function perPlus(){
    if (periodCounter==4){return 0;}
    periodCounter +=1;
    if (periodCounter==2){document.getElementById("periodText").textContent=periodCounter+"nd PERIOD";return 0;}
    if (periodCounter==3){document.getElementById("periodText").textContent=periodCounter+"rd PERIOD";return 0;}
    if (periodCounter==4){document.getElementById("periodText").textContent=periodCounter+"th PERIOD";return 0;}    
}

function perMinus(){
    if (periodCounter==1){return 0;}
    periodCounter-=1;
    if (periodCounter==1){document.getElementById("periodText").textContent=periodCounter+"st PERIOD";return 0;}
    if (periodCounter==2){document.getElementById("periodText").textContent=periodCounter+"nd PERIOD";return 0;}
    if (periodCounter==3){document.getElementById("periodText").textContent=periodCounter+"rd PERIOD";return 0;}
       
}
/*
let startingMinutes=1;
let time =startingMinutes*10;
const countDownEl=document.getElementById("timer");
let timer;

function start() {    
    clearInterval(timer);
  timer = setInterval(( ) =>{
    updateCountDown()
  }, 1000);
}

function stop(){
    clearInterval(timer);    
}

function updateCountDown(){
    
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds =seconds < 10 ? "0"+seconds:seconds;
    
    countDownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
    if(seconds<=0){
        countDownEl.innerHTML = "OVER";
        countDownEl.style.fontSize="200px";
        clearInterval(timer);
        return 0;}
}
*/
function startTimer() {
    counter=59;
    min = 12;
	sec = 59;
	countdown = setInterval(currentTime, 1000);
	toggle = false;
	startReset.innerHTML = 'Reset';
}

function resetTimer(){
	clearInterval(countdown);
	toggle = true;
	startReset.innerHTML = 'Start';
	timer.innerHTML = "12:00";
}

// ------------------------------------- Countdown Output
function currentTime() {
    counter++;
    if(counter == 60){
        min--;
        counter =0;    
    }
    switch(true){
		case (sec < 10 && sec > 0):
			timer.innerHTML =min + ':0' + sec;
			break;
		case (sec === 0 && min === 0):
			clearInterval(countdown);
            timer.innerHTML = "OVER";
            timer.style.fontSize="200px";
			break;
        case (sec===0):
            timer.innerHTML = min + ':0' + sec;
            break;
        case (sec===-1):
            sec=59;
            timer.innerHTML = min + ':' + sec;
            break;
		default:
			timer.innerHTML = min + ':' + sec;
			break;
	}
	sec--;
}

// ------------------------------------- Variables
var countdown, sec;
var toggle = true;
var timer = document.getElementById('timer');
var startReset = document.getElementById('startReset');

// ------------------------------------- Start/Reset Events
startReset.onclick = function(){
	switch(toggle){
		case true:
			startTimer();
			break;
		case false:
			resetTimer();
			break;
	}
};