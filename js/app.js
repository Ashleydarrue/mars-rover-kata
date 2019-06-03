
// Rover Object Goes Here
// ======================
rover = {
  direction: "N",
  x:0, y:0,
  travelLog: []
};
// ======================
function turnLeft( ){
  console.log("turnLeft was called!");

  switch (rover.direction){
    case "N":
      rover.direction = "W";
      break;

    case "W":
      rover.direction= "S";
      break;

    case "S":
      rover.direction = "E";
      break;

   case "E":
     rover.direction = "N";
     break;
  }
  console.log(rover);
}

function turnRight(rover){
  console.log("turnRight was called!");
 
  switch (rover.direction){
    case "N":
      rover.direction = "E";
      break;

    case "E":
      rover.direction= "S";
      break;

    case "S":
      rover.direction = "W";
      break;

   case "W":
     rover.direction = "N";
     break;
  }
  console.log(rover);
  
}


function moveForward(rover){
  console.log("moveForward was called")

  switch (rover.direction){
    case "W":
      rover.x--;
      break;
    
    case "N":
      rover.y--;
      break;
    
    case "S":
        rover.y++;
        break;

    case "E":
      rover.x++;
      break;

  }
  console.log(rover);
}

var commands = ['f', 'r', 'l'];

function roverCommands(commands){
  for(i=0; i<=commands.length; i++){
    switch(commands[i]){
      case "f":
        moveForward(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      case "l":
        turnLeft(rover);
        break;
      default:
        console.log("Please enter a valid command. Valid commands include : 'l' 'r' or 'f' Thank you");
    }
    console.log(rover, rover.travelLog.push);
  }
}



