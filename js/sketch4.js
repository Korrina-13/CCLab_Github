// Gif code is provided from Stavros and reference to his video giphorama ref: https://youtu.be/V-OnY2UJxxo


let food;
let apiUrl = "https://api.giphy.com/v1/gifs/search?q="
let apiKey = "&api_key=2BXIaO9m3yFL15yhQV2LkXuUydxTdBep";
let getGif;
let gifImg;
let gifs = []; //Class instances
let counter = 0;
let boolCheck = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  }

function preload(){
    let searchWord = "food";
    let fullURL = apiUrl +searchWord+ apiKey;
    loadJSON(fullURL, giphyLoaded);
}

 // this communicates with the HTML and allows me to be able to change the text based on the users response
document.getElementById("myButton").onclick = function(){
  food = document.getElementById("myText").value;
  //console.log(food);
  document.getElementById("myLabelFour").innerHTML = food + "...alright alright";
  document.getElementById("commentFour").innerHTML = "You " + food + " lover. You never learn.";

  noLoop();
  counter = 0;

  let searchWord = food;
  let fullURL = apiUrl +searchWord+ apiKey;
  loadJSON(fullURL, giphyLoadedNew);
}

function giphyLoaded(respObj) {
  let getRandom = parseInt(random(20));
  getGif = loadImage(respObj.data[getRandom].images.original.url);
}

function giphyLoadedNew(respObj) {
  let getRandom = parseInt(random(20));
  getGif = loadImage(respObj.data[getRandom].images.original.url);
  //console.log(respObj);
  loop();
}

function runGif(){
  let startFrame = gifs.length % getGif.numFrames();
  gifImg = cloneGif(getGif, startFrame);
  gifs.push(new Gif(gifImg, width/2-gifImg.width/2, 0));
}

function draw(){
  background(0);

  counter++;
  if (counter<2) runGif();

  if (gifs!=null){
    //Visualize the GIFs
    for (let i = 0; i < gifs.length; i++){
      gifs[gifs.length-1].update();
    }
  }
}

//The class allows us to use multiple image instances of the GIFs
class Gif {
  constructor(img, x, y) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.counterX = 0;
  }
  update(){
    this.counterX++;
    image(this.img, this.x, this.y);
  }
}

function cloneGif(gif, startFrame){
  let gifClone = gif.get();
  //console.log(gifClone);
  //Access original gif properties
  gp = gif.gifProperties;
  //Make a new object for the clone
  gifClone.gifProperties = {
    //displayIndex: gp.displayIndex,
    //We still point to the original array of frames
    frames: gp.frames,
    lastChangeTime: gp.lastChangeTime,
    loopCount: gp.loopCount,
    loopLimit: gp.loopLimit,
    numFrames: gp.numFrames,
    playing: gp.playing,
    timeDisplayed: gp.timeDisplayed
  };
  //Optional tweak the start frame
  gifClone.setFrame(startFrame);
  return gifClone;
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
