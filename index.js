const divCounter = document.getElementById('counter');
const divAlert = document.getElementById('alert');
const btnStart = document.getElementById('buttonStart');
let inputTime = document.getElementById('workTime').value;

let seconds = 60;
let minutes = inputTime * 60;
let alertCounter = 0;

let stateRest = true;

let temporizerSound = true;
let temporizer = true;

function Start() {
  inputTime = document.getElementById('workTime').value;
  btnStart.setAttribute('value', 'ReStart');
  btnStart.innerHTML = 'ReStart';
  btnStart.setAttribute('onclick', 'Start()');
  divAlert.innerHTML = 'WorkTime';
  stateRest = true;
  ReStart();
  startTemporizer(true);
}

function ReStart() {
  startTemporizer(false);
  startTemporizerSound(false);
  alertCounter = 0;
  minutes = inputTime * 60;
  seconds = 60;
  if (inputTime < 10) divCounter.innerHTML = `${inputTime}:00`;
  else divCounter.innerHTML = `${inputTime}:00`;
}

function startTemporizer(state) {
  if (state == true) temporizer = setInterval(() => decreaser(), 100);
  else clearInterval(temporizer);
}

function decreaser() {
  minutes--;
  seconds--;
  if (seconds < 0) {
    seconds = 59;
    inputTime--;
  }
  if (inputTime < 10) divCounter.innerHTML = `0${inputTime - 1}:${seconds}`;
  else if (seconds < 10) divCounter.innerHTML = `${inputTime - 1}:0${seconds}`;
  else divCounter.innerHTML = `${inputTime - 1}:${seconds}`;

  if (minutes == 0) {
    divCounter.innerHTML = `00:00`;
    divAlert.innerHTML = "Let's GO!";
    startTemporizer(false);
    document.getElementById('sound').play();
    startTemporizerSound(true);
    if (stateRest == false) {
      stateRest = !stateRest;
      btnStart.setAttribute('value', 'ReStart');
      btnStart.innerHTML = 'ReStart';
      btnStart.setAttribute('onclick', 'Start()');
    } else {
      divAlert.innerHTML = 'HAVE A BREAK';
      btnStart.setAttribute('onclick', 'Rest()');
      btnStart.setAttribute('value', 'Start Rest');
      btnStart.innerHTML = 'Start Rest';
    }
  }
}

function startTemporizerSound(state) {
  if (state == true) temporizerSound = setInterval(() => Sound(), 1800);
  else clearInterval(temporizerSound);
}

function Sound() {
  document.getElementById('sound').play();
  alertCounter++;
  console.log('SoundOn');
  if (alertCounter > 2) {
    //4
    startTemporizerSound(false);
    console.log('stopAlert');
  }
}

function Rest() {
  const restTime = document.getElementById('restTime').value;
  divAlert.innerHTML = 'BREAK TIME';
  inputTime = restTime;
  ReStart();
  stateRest = !stateRest;
  startTemporizer(true);
  btnStart.setAttribute('value', 'ReStart');
  btnStart.innerHTML = 'ReStart';
  btnStart.setAttribute('onclick', 'Start()');
  console.log('Rest');
}
