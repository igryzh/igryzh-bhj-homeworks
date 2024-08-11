let clickCount = 0;
let cookie = document.getElementById("cookie");
let counter = document.getElementById("clicker__counter");
let timerClick = document.getElementById("speed__counter");
let lastClickTime = null; // Время последнего клика
let clickSpeed = 0;

function imgClick() {
  clickCount++;
  cookie.width = clickCount % 2 == 0 ? "200" : "220";
  counter.textContent = clickCount.toString();

  const currentTime = new Date(); // Текущее время
  if (lastClickTime) {
    const timeDifference = (currentTime - lastClickTime) / 1000; // Разница в секундах
    clickSpeed = 1 / timeDifference; // Скорость клика
    timerClick.textContent = clickSpeed.toFixed(2).toString();
  }
  lastClickTime = currentTime;
}

cookie.onclick = imgClick;
