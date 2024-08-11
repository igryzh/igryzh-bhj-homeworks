const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
let deadCounter = 0;
let lostCounter = 0;
getHole = (index) => document.getElementById(`hole${index}`);

for (let holeIndex = 1; holeIndex < 10; holeIndex++) {
  let hole = getHole(holeIndex);
  hole.addEventListener("click", function () {
    if (hole.classList.contains("hole_has-mole")) {
      deadCounter++;
      dead.textContent = deadCounter;
      deadCounter === 10 ? gameOver(1) : false;
    } else {
      lostCounter++;
      lost.textContent = lostCounter;
      lostCounter === 5 ? gameOver(0) : false;
    }

    function gameOver(gameIndex) {
      gameIndex = 1 ? alert("Победа!") : alert("Вы проиграли!");
      deadCounter = 0;
      lostCounter = 0;
      dead.textContent = deadCounter;
      lost.textContent = lostCounter;
    }
  });
}
