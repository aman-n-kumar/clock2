let hr = document.getElementsByClassName("hr")[0];
let min = document.getElementsByClassName("min")[0];
let sec = document.getElementsByClassName("sec")[0];

setInterval(() => {
  const d = new Date();
  let a = d.getHours() * 30;
  let b = d.getMinutes() * 6;
  let c = d.getSeconds() * 6;
  let y = d.getMilliseconds() * 6;
  sec.style.transform = `rotateZ(${c + y / 1000}deg)`;
  min.style.transform = `rotateZ(${b + c / 60}deg)`;
  hr.style.transform = `rotateZ(${a + b / 12}deg)`;
}, 1);