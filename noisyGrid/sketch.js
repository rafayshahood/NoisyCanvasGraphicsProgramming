var stepSize = 20;
var mX;

function setup() {
  createCanvas(500, 500);
}
///////////////////////////////////////////////////////////////////////
function draw() {
  background(125);
    
  mX = map(mouseX,0,width,1,0.5);
    
  colorGrid();
  compassGrid();
}
///////////////////////////////////////////////////////////////////////
function colorGrid(){
  // your code here  
    fill(255);
    push();
    noStroke();
    for(var i = 0 ; i < 25 ; i++)
        {
        for(var j = 0 ; j < 25 ; j++)
        {
            var x = stepSize*i;
            var y = stepSize*j;
            
            var n1 = noise(x*mX*0.01, y *mX*0.01, frameCount*mX*0.01);

            var r = color(255,0,0);
            var g = color(0,255,0);
            var interPol = lerpColor(r,g,n1);
            
            fill(interPol);
            rect(x,y,stepSize,stepSize);
                        
        }
    }
    pop();
}
///////////////////////////////////////////////////////////////////////
function compassGrid(){
  // your code here

    var mX = map(mouseX,0,width,1,0.5);
    
    for(var i = 0 ; i < 25 ; i++)
        {
        for(var j = 0 ; j < 25 ; j++)
        {
            push();
            var x = stepSize*i;
            var y = stepSize*j;
            strokeWeight(2);
                        
            translate(stepSize/2+x,y);
            
            var n2A= noise(x * mX * 0.0025,y* mX * 0.0025,frameCount * mX * 0.0035);
            var rotC = map(n2A, 0 , 1, 0, 720);
            
            angleMode(DEGREES);
            rotate(rotC);
            
            var n2B = noise(x/100,y/100/frameCount/100)
            var col1 = map(n2B,0,1,0,255);
            var col2 = map(n2B+5,0,1,0,255);
            var col3 = map(n2B+10,0,1,0,255); 
            var length = map(n2B,0,1,0,10); 
            
            stroke(col3,col1,col2);
            line(0,0,0,stepSize+length); 
            pop();
            



        }
    }
}
