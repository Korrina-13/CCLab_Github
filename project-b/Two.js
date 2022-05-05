// let username;

//   document.getElementById("myButton").onclick = function(){
//   username = document.getElementById("myText").value;
//   console.log(username);
//   document.getElementById("myLabel").innerHTML = "hello" + username;
// }

let age;

document.getElementById("myButton").onclick = function(){
  age = document.getElementById("myText").value;
  console.log(age);
  document.getElementById("myLabelTwo").innerHTML = age + " huh";
  document.getElementById("commentTwo").innerHTML = "Ya know, for a " + age + " year old, I though you'd Know better.";
}