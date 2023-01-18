




function selectBtn() {
let randNum = Math.random();

if (randNum < 0.1) {
    numCod++;
    imgResultEl.src ="img/Raw-Cod.png";
    numCodEl.innerHTML = numCod;
  } else if (randNum < 0.2) {
    numSalmon++;
    imgResultEl.src ="img/Raw-Salmon.png";
    numSalmonEl.innerHTML = numSalmon;
  } else if (randNum < 0.5) {
    numTropical++;
    imgResultEl.src ="img/Tropical-Fish.png";
    numTropicalEl.innerHTML = numTropical;
  } else {
    numPuffer++;
    imgResultEl.src ="img/Pufferfish.png";
    numPufferEl.innerHTML = numPuffer;
  }

}



