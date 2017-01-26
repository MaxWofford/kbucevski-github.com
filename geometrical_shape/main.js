var NUM_CIRCLES = 12;
var circleDiametar;
var circleRadius;

function setup() {
    createCanvas(480, 600);
    circleDiametar = width/ NUM_CIRCLES;
    circleRadius = circleDiametar/ 2;
}
function draw() {
    var x = 0;
    var y = 0;
    var isShifted = false;
    
    while(y <= height){
        if(isShifted){
            x = circleRadius;
        }
        else{
            x = 0;
        }
    while(x <= width){
        
        ellipse(x, y, circleDiametar,circleDiametar);
        
        x= x + circleDiametar;
    }
    
    y= y + circleRadius;
    isShifted = !isShifted;
    }
    
     
   
}
