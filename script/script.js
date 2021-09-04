document.getElementById("ChangeBackground1").addEventListener("mouseover", mouseOver);
document.getElementById("ChangeBackground1").addEventListener("mouseout", mouseOut);

document.getElementById("ChangeBackground2").addEventListener("mouseover", mouseOver);
document.getElementById("ChangeBackground2").addEventListener("mouseout", mouseOut);

document.getElementById("ChangeBackground3").addEventListener("mouseover", mouseOver);
document.getElementById("ChangeBackground3").addEventListener("mouseout", mouseOut);

function mouseOver() {
  
  document.getElementById("Background").style.backgroundColor = "black";
  document.getElementById("Background").style.transition = "5s";
}

function mouseOut() {
  document.getElementById("Background").style.backgroundColor = "white";
}







