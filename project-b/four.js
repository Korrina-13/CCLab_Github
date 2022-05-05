let food;

document.getElementById("myButton").onclick = function(){
  food = document.getElementById("myText").value;
  console.log(food);
  document.getElementById("myLabelFour").innerHTML = food + "...alright alright";
  document.getElementById("commentFour").innerHTML = "You " + food + " lover. You never learn.";
}