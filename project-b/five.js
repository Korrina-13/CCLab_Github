let randomWord;

document.getElementById("myButton").onclick = function(){
    randomWord = document.getElementById("myText").value;
  console.log(randomWord);
  document.getElementById("myLabelFive").innerHTML = randomWord + "heh-heh";
  document.getElementById("commentFive").innerHTML = "I shall call you " + randomWord + " from now on";
}