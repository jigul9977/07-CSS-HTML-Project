function iconMenuFunc() {
  var x = document.getElementById("mynavbar");
  if (x.className === "navbar") {
    x.className += " responsive-menu";
  } else {
    x.className = "navbar";
  }
}
