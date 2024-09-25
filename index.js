const temp = document.getElementById("temp");
const radiof2c = document.getElementById("f2c");
const radioc2f = document.getElementById("c2f");
const submitBtn = document.getElementById("sub");
const tempLbl = document.getElementById("calculatedTemp");

function farToCel(degrees) {
  degrees = Number(degrees);
  //(°F - 32) × 5/9
  convertedTemp = (degrees - 32) * (5 / 9);
  return convertedTemp;
}

function celToFar(degrees) {
  degrees = Number(degrees);
  //°C × (9/5) + 32
  convertedTemp = degrees * (9 / 5) + 32;
  return convertedTemp;
}

submitBtn.onclick = function () {
  if (radioc2f.checked == true) {
    tempLbl.innerHTML = celToFar(temp.value).toFixed(2) + " &#176;F";
  }
  if (radiof2c.checked == true) {
    tempLbl.innerHTML = farToCel(temp.value).toFixed(2) + " &#176;C";
  }
}
