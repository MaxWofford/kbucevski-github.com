var NUM_CIRCLES = 12;
var circleDiametar;

function setup() {
    createCanvas(480, 600);
    circleDiametar = width/ NUM_CIRCLES;
}
function draw() {
    var x = 0;
    var y = 0;
    
    while(y <= height){
        
    x = 0;
    while(x <= width){
        
        ellipse(x, y, circleDiametar,circleDiametar);
        
        x= x + circleDiametar;
    }
    
    y= y + circleDiametar;
    }
    
     
   
}
