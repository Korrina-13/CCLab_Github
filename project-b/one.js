let username;

document.getElementById("myButton").onclick = function(){
  username = document.getElementById("myText").value;
  console.log(username);
  document.getElementById("myLabel").innerHTML = "Hello " + username;
  document.getElementById("comment").innerHTML = "I'm not joking " + username + ", it's useless";
}