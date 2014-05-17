// Questa funzione inizia una nuova partita
function newGame() {
// Elimino eventuali pezzi rimasti dalla vecchia partita
	for(var i=0;i<16;i++) {
		domEvents.unbind(white[i],"click",function() { });
		domEvents.unbind(black[i],"click",function() { });
		scene.remove(white[i]);
		scene.remove(black[i]);
	}
// Rimuove eventuali quadrati delle mosse rimasti attivi
	for(var i=0;i<8;i++)
		for(var j=0;j<8;j++) {
			moves[i][j].name="0";
			scene.remove(moves[i][j]);
		}
	camera.position.set(0,10,10);
	camera.lookAt(scene.position);
	turn="w";
	fillBoard();
}
			
// Questa funzione attiva i movimenti della telecamera in una certa direzione
function activateMove(key) {
	switch(key) {
		case 37:
			rotateRight=true;
			break;
		case 39:
			rotateLeft=true;
			break;
	}
}

// Questaa funzione deattiva il movimento della telecamera in una data direzione
function deactivateMove(key) {
	switch(key) {
		case 37:
			rotateRight=false;
			break;
		case 39:
			rotateLeft=false;
			break;
	}
}

// La funzione aggiorna effettivamente la posizione della telecamera
function update() {
// Controllo se sta avvenendo una rotazione di fine turno
	if(changeViewpoint) {
		if(turn=="b") {
			if(change!=Math.PI) {
				change+=Math.PI/8;
				camera.position.x=Math.sin(change)*10;
				camera.position.z=Math.cos(change)*10;
				camera.lookAt(scene.position);
			} else
				changeViewpoint=false;
		} else {
			if(change!=0) {
				change-=Math.PI/8;
				camera.position.x=Math.sin(change)*10;
				camera.position.z=Math.cos(change)*10;
				camera.lookAt(scene.position);
			} else
				changeViewpoint=false;
		}
// Altrimenti controllo se sto ruotando a mano
	} else {
		if(rotateRight) {
			rotation+=0.1;
			camera.position.x=Math.sin(rotation)*10;
			camera.position.z=Math.cos(rotation)*10;
			camera.lookAt(scene.position);
		}
		if(rotateLeft) {
			rotation-=0.1;
			camera.position.x=Math.sin(rotation)*10;
			camera.position.z=Math.cos(rotation)*10;
			camera.lookAt(scene.position);
		}
	}
}