#Simple 3D Chess
##A simple (and not complete) 3D chess game

###Overview
This simple 3D chess game is made for a university project. It uses the Three.js framework (and also Threex.DomEvents) to run a 3D environment over a web HTML page. It is entirely coded in JavaScript, and the models are made with Blender.
The game is multiplayer (no AI behind) and not includes all the rules (for example, the king's moves are not validated). The game ends when a player captures the opponent's king.

###How to use
Nothing special, just open the HTML page (JavaScript and a WebGL supporting PC are required). You can rotate the view with Right Arrow and Left Arrow.

###Structure
There is an HTML page, **chess.html**, that includes the others .js files.
The **useScene.js** file contains the functions for moving in the scene.
The **useChess.js** file instead contains the chess engine functions.
**three.js** and **threex.domevents.js** are required library respectively for the 3D graphic creation and the the DOM events handling.
All the other .js files are the JSON exported models from Blender.

###Contributors
*Ceccarelli Andrea*
+ All the 3D models

*Castellini Jacopo*
+ All the JavaScript code
