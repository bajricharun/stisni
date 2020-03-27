var insults = [
  "Poserem ti se djetetu u pernicu.",
  "Da Bog da ti djeca na akumulator isla.",
  "Dupe ti zavidi kolicini govana koja izlazi na tvoja usta.",
  "Tvoj rodni list je pismo izvinjenja od Durex-a.",
  ""
];

function percentwidth(elem) {
  var pa = elem.offsetParent || elem;
  return ((elem.offsetWidth / pa.offsetWidth) * 100).toFixed(2);
}

function insultMe() {
  var randomNum = Math.floor(Math.random() * insults.length);
  var checkBox = document.getElementById("check");
  document.getElementById("prize").innerHTML =
    "<p id='insult'>" + insults[randomNum] + "</p>";
  var width = percentwidth(document.getElementById("insult"));
  width = Math.floor(width);
  var insult = document.getElementById("insult");
  if (width === 100) {
    insult.style.left = "5px";
    insult.style.right = "5px";
  } else {
    insult.style.left = Math.floor((100 - width) / 2) + "%";
    insult.style.right = Math.floor((100 - width) / 2) + "%";
  }
}
