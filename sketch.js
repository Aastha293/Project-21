var canvas;
var block1, block2, block3, block4;
var ball, edges;
var music;

function preload() {
    // load sound here
}


function setup() {
    canvas = createCanvas(800, 600);

    block1 = createSprite(0, 580, 360, 30);
    block1.shapeColor = "blue";

    block2 = createSprite(295, 580, 200, 30);
    block2.shapeColor = "orange";

    block3 = createSprite(515, 580, 200, 30)
    block3.shapeColor = "green";

    block4 = createSprite(725, 580, 200, 30)
    block4.shapeColor = "red";

    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20, 750), 100, 40, 40);
    ball.shapeColor = rgb(255, 255, 255);
    ball.velocityX = -5
    ball.velocityY = 5
    //write code to add velocityX and velocityY

}

function draw() {
    background(rgb(169, 169, 169));
    edges = createEdgeSprites();
    ball.bounceOff(edges);





    if (ball.isTouching(block1)){
        ball.shapeColor = "blue"
        music.play();
    }
    else {
        ball.shapeColor = "white"

    }



    if (ball.isTouching(block2)){
        ball.shapeColor = "orange"
        music.play();
    }
    else {
        ball.shapeColor = "white"

    }

    if (block3.isTouching(ball) && ball.bounceOff(block3)) {
        ball.shapeColor = "green";
        music.play();
    }
    if (block4.isTouching(ball) && ball.bounceOff(block4)) {
        ball.shapeColor = "red";
        music.play();
    }
















    //write code to bounce off ball from the block4

    drawSprites();
}



function isTouching(block1, block2) {
    if (block1.x - block2.x < block2.width / 2 + block1.width / 2
        && block2.x - block1.x < block2.width / 2 + block1.width / 2
        && block1.y - block2.y < block1.height / 2 + block2.height /
        block2.y - block1.y < block2.height / 2 + block1.height / 2){
    return true
    }
 else
      return false

}









