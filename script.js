const hours = document.getElementById("hour");
const minutes = document.getElementById("minute");
const secondss = document.getElementById("second");
const ampms = document.getElementsByClassName("am-pm");

function updatedClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  let ampm = "AM";
  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  hours.innerText = h;
  minutes.innerText = m;
  secondss.innerText = s;
  ampms.innerText = ampm;
  setTimeout(function () {
    updatedClock();
  }, 1000);
}

updatedClock();
