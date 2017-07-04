# Simple 3D Chess

## A simple (and not complete) 3D chess game using JavaScript and Three.js

### Overview
This simple 3D chess game is made for a university project. It uses the Three.js framework (and also Threex.DomEvents) to run a 3D environment over a web HTML page. It is entirely coded in JavaScript, and the models are made with Blender. The game is multiplayer (no opponent AI) and don't includes all the rules (for example, the king's moves are not validated). The game ends when a player captures the opponent's king.

### How to use
You had to start **start.py**, that is a simple Web Server written in Python in order to make the resources available to the main script. When the local server page has loaded, just open the HTML page **chess.html** (JavaScript and a WebGL supporting PC are required). During the game, you can rotate the view with Right Arrow and Left Arrow.

### Structure
The **start.py** script just start a little Web Server for using the game. There is an HTML page, **chess.html**, that includes the others .js files. The **useScene.js** file contains the functions for moving in the scene. The **useChess.js** file instead contains the chess engine functions. **./libs/three.js** and **./libs/threex.domevents.js** are required library respectively for the 3D graphic creation and the the DOM events handling. The **./models** folder contains all the models for the chessboard pieces. The **./blender** contains the original models made with Blender.

### Contributors
*Ceccarelli Andrea*
+ 3D modelling

*Castellini Jacopo*
+ JavaScript programming
