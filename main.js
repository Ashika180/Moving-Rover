var canvas=document.getElementById("MyCanvas");
var ctx = canvas.getContext("2d");

var rover_x = 10;
var rover_y = 10;
var rover_width = 100;
var rover_height = 90;

var bg_image_array = ["1.jpg", "2.jpg", "3.jpg", "4.jpeg", "5.jpeg"];
var random_number = Math.floor(Math.random() * 5);
console.log(random_number);
background_image = bg_image_array[random_number];
var rover_image = "rover.png";


function add(){
  background_image_tag = new Image();
    background_image_tag.onload = uploadbackground;
    background_image_tag.src = background_image;

     rover_image_tag = new Image();
    rover_image_tag.onload = uploadrover;
    rover_image_tag.src = rover_image;
}

function uploadbackground(){
ctx.drawImage(background_image_tag, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_image_tag, rover_x, rover_y, rover_width, rover_height);
    }

    window.addEventListener("keydown", my_keydown);

    function my_keydown(e){
  keypress = e.keyCode;
  console.log(keypress);
  if(keypress == '37'){
      left();
      console.log("left");
  }

  if(keypress == '38'){
    up();
    console.log("up");
}

if(keypress == '39'){
   right();
    console.log("right");
}

if(keypress == '40'){
   down();
    console.log("down");
}

    }

    function up(){
if (rover_y > 0){
    rover_y = rover_y - 10;
    console.log("when up is pressed x = "+ rover_x + " and y = " + rover_y);
   uploadbackground();
   uploadrover();
}
}

function down(){
    if (rover_y <= 500){
        rover_y = rover_y + 10;
        console.log("When down is pressed x =" +rover_x+ "and y = " +rover_y);
        uploadbackground();
        uploadrover();
    }
}

function left(){
    if (rover_x > 0){
        rover_x = rover_x - 10;
        console.log("When left is clicked x = " +rover_x+ " y = " +rover_y);
        uploadbackground();
        uploadrover();
    }
}

function right(){
    if (rover_x <= 700){
  rover_x = rover_x + 10;
  console.log("When right is clicked, x = " +rover_x+ "y = " +rover_y);
  uploadbackground();
  uploadrover();

    }
} 
    
