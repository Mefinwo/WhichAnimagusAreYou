

function setup() {
    createCanvas(1580, 745);
    startPage();
}

function startPage() {
    draw = function() {
        background(0, 110, 30);
    fill(150, 27, 31);
    textSize(40);
    text("Wich animagus are you?", 550, 40);
    fill(0, 90, 30);
    textSize(15);
    text("©GameProgrammers gmbh2020", 10, 13);
    fill(255, 0, 0);
    textSize(20);
    text("Did you ever think about the thing with the animagus?", 450, 120);
    text("No? Thats no problem. Here you can find out wich animagus you are!", 450, 150);
    text("Press START to start.", 450, 180);
    fill(0, 255, 0);
    rect(570, 250, 200, 80);
    fill(255,0,0);
    textSize(35);
    text("START", 613, 285);

    if(mouseIsPressed && mouseX > 570 && mouseY > 250 && mouseX < 770 && mouseY < 330){
        questionOne();
    }
    }
  
    
}

function questionOne() {
    draw = function(){
        background(0, 110, 30);
        fill(255,255,255);
        rect(450, 200, 500, 250);
    } 
    
    
}


















