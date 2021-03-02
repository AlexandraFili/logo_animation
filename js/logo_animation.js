
/* Animation of the Tranquil Services logo
Approach:
The final centres of the rings make a triangle. 
To space the rings at the same equal distance from each other 
at the points of aproximately an equilateral triangle. 
We need to find the x and y distance offset from each other.
This Pythagorus' Theorum for triangles is used to obtain the offset where x==y

Once these positions are found, the offsets are further adjusted manually to obtain the final required position.

Animation is achieved by setting a starting position displaced from the final position,
and incrementally moving the rings into the final position.

*/

document.body.onload = setupCanvas();
// document.getElementById("logoCanvas").style.border = "0px none #ffffff";

function setupCanvas()
{
	// document.getElementById("logoCanvas").style.border = "0px solid white";
	var clrBlue = "#1A52C2"; // color of blue ring
	var clrRed = "#C21A43"; // color of green ring
	var clrGreen = "#2C981D"; // color of red ring

	var canvasWidth = 300; //Canvas Width
	var canvasHeight = 120;
	
	// X centre of the logo based on the canvas size and offset to the left
	var centreX = Math.floor(Math.round(canvasWidth/2)) - 70;  
	// Y centre of the logo based on the canvas size 
	var centreY = Math.floor(Math.round(canvasHeight/2));

	var ringWidth = 7;  // Width or thickness of the rings
	var ringRadius = 35; //Radius of all rings
	// Using the radius as the distance each ring centre is offset from the others
	// find the offset position in x and y (Pythagorus: x^2 + y^2 = z^2) 
	// In this case, z is the radius and x == y == the offset.
	var centreOffset = Math.sqrt(Math.pow(ringRadius, 2)/4);
	centreOffset = Math.floor(Math.round(centreOffset)); 

	//Starting / Current positions and Ending positions of the rings
	
	// Note Final positions are adjusted to closer match the original logo
	
	// FINAL X POSITIONS FOR EACH RING
	var xBlueFinish = centreX - centreOffset - 8 ;  
	var xRedFinish = centreX - 3 ;
	var xGreenFinish = centreX + centreOffset + 2 ;
	
	// FINAL Y POSITIONS FOR EACH RING
	var yBlueFinish = centreY + centreOffset -5 ;
	var yRedFinish = centreY - centreOffset + 5 ;
	var yGreenFinish = centreY + centreOffset - 5 ;
	
	// STARTING positions of the rings (these are displaced relative to final positions)
	var xBluePosn = xBlueFinish -100;
	var yRedPosn = yRedFinish -100;
	var xGreenPosn = xGreenFinish + 100 ;
	var yGreenPosn = yGreenFinish + 100;
	

	var speed = 1;  // how far to move a ring with each refresh interval


	var canvas = document.getElementById('logoCanvas');
	if (canvas.getContext) {
		var ctx = canvas.getContext('2d');
		// Run the Logo animation every 25 milliseconds to move the rings progressively 
		var windowInterval = window.setInterval(animateLogo, 15);
	} 
	else { //show backup Logo 
	}
	
	function animateLogo(){	
		//ctx.style.border = "none";
		
		// Drawing the canvas background
		ctx.fillStyle = 'rgb(255, 255, 255)'; //'rgb(200, 200, 255)';
		ctx.rect(0, 0, canvasWidth, canvasHeight);
		ctx.fill();	

		// Draw Blue ring
		// If the ring is not yet in the final position
		if (xBluePosn <= xBlueFinish) {
			// draw the ring using the current location data
			drawRing(ctx, xBluePosn, yBlueFinish, ringRadius, clrBlue, ringWidth);  // Blue ring
			// increment the position for the next cycle
			xBluePosn += speed;
		} else {
			// If ring location settings at at the final location, just draw the rings in the final locaiton
			drawRing(ctx, xBluePosn, yBlueFinish, ringRadius, clrBlue, ringWidth);  // Blue ring
		}

		// Draw Red ring
		if (yRedPosn <= yRedFinish) {
			drawRing(ctx, xRedFinish, yRedPosn, ringRadius, clrRed, ringWidth);  
			yRedPosn += speed;
		} else {
			drawRing(ctx, xRedFinish, yRedPosn, ringRadius, clrRed, ringWidth); 
		}

		// Draw Green ring
		// The Green ring moves in diagonally so both x and y are checked and updated in each cycle
		if ((xGreenPosn >= xGreenFinish) || (yGreenPosn >= yGreenFinish)) {
			drawRing(ctx, xGreenPosn, yGreenPosn, ringRadius, clrGreen, ringWidth);
			xGreenPosn -= speed;
			yGreenPosn -= speed;
		} else {
			drawRing(ctx, xGreenFinish, yGreenFinish, ringRadius, clrGreen, ringWidth); 
			
			//Draw the TEXT 'Tranquil Services'
			ctx.font = "italic  bold 26px Arial";
			ctx.fillStyle = "black";
			ctx.fillText("Tranquil", centreX + 45, centreY - 8);
			ctx.fillText("Services", centreX + 60, centreY + 23);
			//once complete, stop the animation ongoing firing
			clearInterval(windowInterval, -1);  
		}

	} // End animateLogo()
	
	
 	function drawRing(context, x,y,r, color, lineWidth){
	
		context.strokeStyle = color;
		context.lineWidth = lineWidth;
		context.beginPath();
		//create an arc of 2*π (2*pi) to make a full circle
		context.arc(x, y, r, 0, Math.PI * 2, false); 
		// Draw the arc
		context.stroke();
			
		//Clip the canvas to prevent the off canvas display artifacts of the rings
		context.rect(0, 0, canvasWidth, canvasHeight);
		context.lineWidth = 1;
		context.stroke();
		context.clip();

	} 
	
} // End Setup Canvas