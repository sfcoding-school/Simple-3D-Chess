// La funzione passa dal primo al secondo scenario e viceversa
function switchScene() {
	camera.position.set(0,10,15);
	camera.lookAt(scene.position);
	if(mode==0) {
		mode=1;
		camera.position.set(0,10,15);
		camera.lookAt(scene.position);
		turn="w";
		fillBoard();
		scene.remove(room);
		scene.add(chess);
		domEvents.unbind(chessboard,"click",function() { 	});
		render();
	} else {
		// Svuoto eventuali pezzi rimasti dalla vecchia partita
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
		// Riattivo la prima scena
		mode=0;
		camera.position.set(lateral,0,forward);
		camera.lookAt(scene.position);
		turn="e";
		domEvents.bind(chessboard,"click",function() { switchScene() });
		scene.remove(chess);
		scene.add(room);
		render();
	}
}
			
// La funzione muove la telecamera e consente di interrompere una partita e ritornare alla prima scena
function cameraMove(key) {
	switch(key) {
		case 27:
			if(mode==1)
				switchScene();
			break;
		case 37:
			if(mode==1) {
				rotation+=0.1;
				camera.position.x=Math.sin(rotation)*10;
				camera.position.z=Math.cos(rotation)*15;
				camera.lookAt(scene.position);
			} else
				camera.rotation.y+=0.1;
			render();
			break;
		case 38:
			if(mode==0) {
				camera.rotation.x+=0.1;
				render();
			}
			break;
		case 39:
			if(mode==1) {
				rotation-=0.1;
				camera.position.x=Math.sin(rotation)*10;
				camera.position.z=Math.cos(rotation)*15;
				camera.lookAt(scene.position);
			} else
				camera.rotation.y-=0.1;
			render();
			break;
		case 40:
			if(mode==0) {
				camera.rotation.x-=0.1;
				render();
			}
			break;
		case 65:
			if(mode==0) {
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
				if(!collide) {
					lateral-=0.5;
					camera.position.x=lateral;
					render();
				}
			}
			break;
		case 68:
			if(mode==0) {
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
				if(!collide) {
					lateral+=0.5;
					camera.position.x=lateral;
					render();
				}
			}
			break;
		case 83:
			if(mode==0) {
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
				if(!collide) {
					forward+=0.5;
					camera.position.z=forward;
					render();
				}
			}
			break;
		case 87:
			if(mode==0) {
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
				if(!collide) {
					forward-=0.5;
					camera.position.z=forward;
					render();
				}
			}
			break;
	}
}