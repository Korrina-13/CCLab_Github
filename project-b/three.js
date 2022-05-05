let color;

document.getElementById("myButton").onclick = function(){
  color = document.getElementById("myText").value;
  console.log(color);
  document.getElementById("myLabelThree").innerHTML = color + "...interesting...";
  document.getElementById("commentThree").innerHTML = color + "? Not bad, still doesn't change that this website is useless";
}