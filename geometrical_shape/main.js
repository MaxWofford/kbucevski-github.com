var NUM_CIRCLES = 12;
var circleDiametar;
var circleRadius;
var rVal;
var gVal;
var bVal;

function setup() {
    createCanvas(480, 600);
    circleDiametar = width/ NUM_CIRCLES;
    circleRadius = circleDiametar/ 2;
}
function draw() {
    var x = 0;
    var y = height;
    var isShifted = false;
     rVal = 255;
     gVal = 0;
     bVal = 0;
    
    while(y >= 0){
        if(isShifted){
            x = circleRadius;
        }
        else{
            x = 0;
        }
    while(x <= width){
        fill(color(rVal,gVal,bVal));
        stroke(color(rVal,gVal,bVal));
        ellipse(x, y, circleDiametar,circleDiametar);
        
        x= x + circleDiametar;
    }
    
    y= y - circleRadius;
    isShifted = !isShifted;
    rVal = rVal + 2;
    gVal = gVal + 7;
    bVal = bVal + 3;
    }
    
     
   
}
function keyPressed(){
    if(keyCode == 115 || keyCode == 83){
        saveCanvas("Geometric Pattern", "png");
    }
    return false;
}
