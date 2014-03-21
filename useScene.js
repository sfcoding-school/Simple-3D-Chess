// Questa funzione passa dalla prima allla seconda scena e viceversa, impostando ogni volta i giusti parametri della telecamera
function switchScene() {
	if(mode==0) {
		mode=1;
		positionX=camera.position.x;
		positionZ=camera.position.z;
		angleX=camera.rotation.x;
		angleY=camera.rotation.y;
		camera.position.set(0,10,10);
		camera.lookAt(scene.position);
		turn="w";
		fillBoard();
		scene.remove(room);
		scene.add(chess);
		domEvents.unbind(chessboard,"click",function() { });
	} else {
// Elimino eventuali pezzi rimasti dalla vecchia partita
		for(var i=0;i<16;i++) {
			domEvents.unbind(white[i],"click",function() { });
			domEvents.unbind(black[i],"click",function() { });
			chess.remove(white[i]);
			chess.remove(black[i]);
		}
// Rimuove eventuali quadrati delle mosse rimasti attivi
		for(var i=0;i<8;i++)
			for(var j=0;j<8;j++) {
				moves[i][j].name="0";
				chess.remove(moves[i][j]);
			}
		mode=0;
		camera.position.set(positionX,0,positionZ);
		camera.lookAt(scene.position);
		camera.rotation.x=angleX;
		camera.rotation.y=angleY;
		turn="e";
		domEvents.bind(chessboard,"click",function() { switchScene() });
		scene.remove(chess);
		scene.add(room);
	}
}
			
// Questa funzione attiva i movimenti della telecamera in una certa direzione e consente di interrompere una partita e ritornare alla prima scena
function activateMove(key) {
	switch(key) {
		case 27:
			if(mode==1)
				switchScene();
			break;
		case 37:
			if(mode==1)
				rotateRight=true;
			else
				lookRight=true;
			break;
		case 38:
			if(mode==0)
				lookAbove=true;
			break;
		case 39:
			if(mode==1)
				rotateLeft=true;
			else
				lookLeft=true;
			break;
		case 40:
			if(mode==0)
				lookBelow=true;
			break;
		case 65:
			if(mode==0)
				moveLeft=true;
			break;
		case 68:
			if(mode==0)
				moveRight=true;
			break;
		case 83:
			if(mode==0)
				moveBackward=true;
			break;
		case 87:
			if(mode==0)
				moveForward=true;
			break;
	}
}

// Questaa funzione deattiva il movimento della telecamera in una data direzione
function deactivateMove(key) {
	switch(key) {
		case 37:
			if(mode==1)
				rotateRight=false;
			else
				lookRight=false;
			break;
		case 38:
			if(mode==0)
				lookAbove=false;
			break;
		case 39:
			if(mode==1)
				rotateLeft=false;
			else
				lookLeft=false;
			break;
		case 40:
			if(mode==0)
				lookBelow=false;
			break;
		case 65:
			if(mode==0)
				moveLeft=false;
			break;
		case 68:
			if(mode==0)
				moveRight=false;
			break;
		case 83:
			if(mode==0)
				moveBackward=false;
			break;
		case 87:
			if(mode==0)
				moveForward=false;
			break;
	}
}

/* La funzione aggiorna effettivamente la posizione della telecamera
* Prima di muoversi in una direzione viene controllato se si sta sbattendo contro un oggetto con il raycaster
* In tal caso il movimento viene impedito */
function update() {
	if(moveForward) {
		var collide=false;
		raycaster.set(camera.position,rays[3]);
		var collisions=raycaster.intersectObject(room,true);
		if(collisions.length>0 && collisions[0].distance<2)
			collide=true;
		raycaster.set(camera.position,rays[4]);
		collisions=raycaster.intersectObject(room,true);
		if(collisions.length>0 && collisions[0].distance<2)
			collide=true;
		raycaster.set(camera.position,rays[5]);
		collisions=raycaster.intersectObject(room,true);
		if(collisions.length>0 && collisions[0].distance<2)
			collide=true;
		if(!collide)
			camera.position.z-=0.5;
	}
	if(moveBackward) {
		var collide=false;
		raycaster.set(camera.position,rays[0]);
		var collisions=raycaster.intersectObject(room,true);
		if(collisions.length>0 && collisions[0].distance<2)
			collide=true;
		raycaster.set(camera.position,rays[1]);
		collisions=raycaster.intersectObject(room,true);
		if(collisions.length>0 && collisions[0].distance<2)
			collide=true;
		raycaster.set(camera.position,rays[7]);
		collisions=raycaster.intersectObject(room,true);
		if(collisions.length>0 && collisions[0].distance<2)
			collide=true;
		if(!collide)
			camera.position.z+=0.5;
	}
	if(moveLeft) {
		var collide=false;
		raycaster.set(camera.position,rays[3]);
		var collisions=raycaster.intersectObject(room,true);
		if(collisions.length>0 && collisions[0].distance<2)
			collide=true;
		raycaster.set(camera.position,rays[4]);
		collisions=raycaster.intersectObject(room,true);
		if(collisions.length>0 && collisions[0].distance<2)
			collide=true;
		raycaster.set(camera.position,rays[5]);
		collisions=raycaster.intersectObject(room,true);
		if(collisions.length>0 && collisions[0].distance<2)
			collide=true;
		if(!collide)
			camera.position.x-=0.5;
	}
	if(moveRight) {
		var collide=false;
		raycaster.set(camera.position,rays[1]);
		var collisions=raycaster.intersectObject(room,true);
		if(collisions.length>0 && collisions[0].distance<2)
			collide=true;
		raycaster.set(camera.position,rays[2]);
		collisions=raycaster.intersectObject(room,true);
		if(collisions.length>0 && collisions[0].distance<2)
			collide=true;
		raycaster.set(camera.position,rays[3]);
		collisions=raycaster.intersectObject(room,true);
		if(collisions.length>0 && collisions[0].distance<2)
			collide=true;
		if(!collide)
			camera.position.x+=0.5;
	}
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
	if(lookLeft)
		camera.rotation.y-=0.1;
	if(lookRight)
		camera.rotation.y+=0.1;
	if(lookAbove)
		camera.rotation.x+=0.1;
	if(lookBelow)
		camera.rotation.x-=0.1;
}