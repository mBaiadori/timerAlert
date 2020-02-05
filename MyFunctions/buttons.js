let loopBtn;
let timeLoopBtn = 150;

function btnFunc(state, type = "", id) {
  LoopBtn(state, type, id);
  if (type == "-") btnMinus(id);
  if (type == "+") btnPlus(id);
}

function LoopBtn(state, type, id) {
  if (state == true) {
    loopBtn = setInterval(() => {
      if (type == "-") btnMinus(id);
      if (type == "+") btnPlus(id);
    }, timeLoopBtn);
  } else clearInterval(loopBtn);
}

function btnPlus(id) {
  document.getElementById(id).value++;
  if (document.getElementById(id).value > 99) document.getElementById(id).value = 99;
}

function btnMinus(id) {
  document.getElementById(id).value--;
  if (document.getElementById(id).value < 0) document.getElementById(id).value = 0;
}
