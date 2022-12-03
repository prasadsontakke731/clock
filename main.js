const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');

function update() {
  const currentDate = new Date();
  setTimeout(update, 1000);
  const hour = currentDate.getHours();
  const minute = currentDate.getMinutes();
  const second = currentDate.getSeconds();

  const hourDeg = (hour / 12) * 360;
  const minuteDeg = (minute / 60) * 360;
  const secondDeg = (second / 60) * 360;
  hourEl.style.transform = `rotate(${hourDeg}deg)`;
  hourEl.style.transform = `rotate(${minuteDeg}deg)`;
  hourEl.style.transform = `rotate(${secondDeg}deg)`;
  console.log(hour, minute, second);
}

update();
