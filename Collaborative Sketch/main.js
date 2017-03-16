var config = {
    apiKey: "AIzaSyBN2dlIBrqUg70zOeWYw1RwKhk9NvJYEMw",
    authDomain: "collaborative-sketch-640b6.firebaseapp.com",
    databaseURL: "https://collaborative-sketch-640b6.firebaseio.com",
    storageBucket: "collaborative-sketch-640b6.appspot.com",
    messagingSenderId: "825915134791"
  };
  firebase.initializeApp(config);
  

var pointsData = firebase.database().ref();
var points = [];

function setup(){
  var canvas = createCanvas(400, 400);
  background(255);
  fill(0);
  
  pointsData.on("child_added", function (point){
   points.push(point.val());
  });
   pointsData.on("child_removed", function () {
    points = [];
  });
   canvas.mousePressed(drawPoint);
   canvas.mouseMoved(drawPointIfMousePressed);
}

function draw(){
 for(var i = 0; i < points.length; i ++){
  var point = points[i];
  ellipse(point.x, point.y, 5, 5);
 }
 

}
function drawPoint(){
 pointsData.push({x: mouseX, y: mouseY});
}
function drawPointIfMousePressed() {
 if(mouseIsPressed){
  drawPoint();
 }
 
}

$("#saveDrawing").on("click", saveDrawing);
function saveDrawing(){
 saveCanvas("Master's art");
}

$("#clearDrawing").on("click", clearDrawing);
function clearDrawing(){
 pointsData.remove();
 points = [];
 location.reload();
}

















// var config = {
//   apiKey: "AIzaSyAsAkHke9lXEU_97a8rYpMm7gOH3eWDxrM",
//   authDomain: "collab-draw.firebaseapp.com",
//   databaseURL: "https://collab-draw.firebaseio.com",
//   storageBucket: "collab-draw.appspot.com",
// };
// firebase.initializeApp(config);

// var pointsData = firebase.database().ref();
// var points = [];

// function setup() {
//   var canvas = createCanvas(400, 400);
//   background(255);
//   fill(0);
//   pointsData.on("child_added", function (point) {
//     points.push(point.val());
//   });
//   canvas.mousePressed(drawPoint);
//   /*
//   canvas.mouseMoved(function () {
//     if (mouseIsPressed) {
//       drawPoint();
//     }
//   });
//   */
// }

// function draw() {
//   background(255);
//   for (var i = 0; i < points.length; i++) {
//     var point = points[i];
//     ellipse(point.x, point.y, 5, 5);
//   }
// }

// function drawPoint() {
//   alert("DON'T TOUCH THE MASTERPIECE! NO COLLABORATION!");
//   //pointsData.push({x: mouseX, y: mouseY});
//   return false;
// }

// $("#saveDrawing").on("click", saveDrawing);

// function saveDrawing() {
//   saveCanvas("Painter Orpheus");
// }

// $("#clearDrawing").on("click", clearDrawing);

// function clearDrawing() {
//   alert("HOW DARE YOU!");
//   /*
//   pointsData.remove();
//   points = [];
//   */
// }