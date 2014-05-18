// Questa funzione popola la scacchiera
function fillBoard() {
/* Creo i pezzi bianchi, li dispongo sulla scacchiera e gli aggancio gli eventi per muoverli
* Da 0 a 7 sono i pedoni, 8 e 15 le torri, 9 e 14 i cavalli, 10 e 13 gli alfieri, 12 il re ed 11 la regina
* Nel name mi memorizzo la loro posizione x-z sulla scacchiera, mentre in id ho colore-posizione nell'array-pezzo */
	loader.load("wpawn.js",function(geometry,materials) {
		white[0]=new THREE.Mesh(geometry,new THREE.MeshFaceMaterial(materials));
		white[0].position.set(plane[0][1].position.x,plane[0][1].position.y,plane[0][1].position.z);
		white[0].scale.set(0.6,0.6,0.6);
		white[0].id="w0p";
		white[0].name="01";
		plane[0][1].name="10";
		domEvents.bind(white[0],"click",function(event) { pieceMove(event.target); });
		scene.add(white[0]);
	});
	loader.load("wpawn.js",function(geometry,materials) {
		white[1]=new THREE.Mesh(geometry,new THREE.MeshFaceMaterial(materials));
		white[1].position.set(plane[1][1].position.x,plane[1][1].position.y,plane[1][1].position.z);
		white[1].scale.set(0.6,0.6,0.6);
		white[1].id="w1p";
		white[1].name="11";
		plane[1][1].name="10";
		domEvents.bind(white[1],"click",function(event) { pieceMove(event.target); });
		scene.add(white[1]);
	});
	loader.load("wpawn.js",function(geometry,materials) {
		white[2]=new THREE.Mesh(geometry,new THREE.MeshFaceMaterial(materials));
		white[2].position.set(plane[2][1].position.x,plane[2][1].position.y,plane[2][1].position.z);
		white[2].scale.set(0.6,0.6,0.6);
		white[2].id="w2p";
		white[2].name="21";
		plane[2][1].name="10";
		domEvents.bind(white[2],"click",function(event) { pieceMove(event.target); });
		scene.add(white[2]);
	});
	loader.load("wpawn.js",function(geometry,materials) {
		white[3]=new THREE.Mesh(geometry,new THREE.MeshFaceMaterial(materials));
		white[3].position.set(plane[3][1].position.x,plane[3][1].position.y,plane[3][1].position.z);
		white[3].scale.set(0.6,0.6,0.6);
		white[3].id="w3p";
		white[3].name="31";
		plane[3][1].name="10";
		domEvents.bind(white[3],"click",function(event) { pieceMove(event.target); });
		scene.add(white[3]);
	});
	loader.load("wpawn.js",function(geometry,materials) {
		white[4]=new THREE.Mesh(geometry,new THREE.MeshFaceMaterial(materials));
		white[4].position.set(plane[4][1].position.x,plane[4][1].position.y,plane[4][1].position.z);
		white[4].scale.set(0.6,0.6,0.6);
		white[4].id="w4p";
		white[4].name="41";
		plane[4][1].name="10";
		domEvents.bind(white[4],"click",function(event) { pieceMove(event.target); });
		scene.add(white[4]);
	});
	loader.load("wpawn.js",function(geometry,materials) {
		white[5]=new THREE.Mesh(geometry,new THREE.MeshFaceMaterial(materials));
		white[5].position.set(plane[5][1].position.x,plane[5][1].position.y,plane[5][1].position.z);
		white[5].scale.set(0.6,0.6,0.6);
		white[5].id="w5p";
		white[5].name="51";
		plane[5][1].name="10";
		domEvents.bind(white[5],"click",function(event) { pieceMove(event.target); });
		scene.add(white[5]);
	});
	loader.load("wpawn.js",function(geometry,materials) {
		white[6]=new THREE.Mesh(geometry,new THREE.MeshFaceMaterial(materials));
		white[6].position.set(plane[6][1].position.x,plane[6][1].position.y,plane[6][1].position.z);
		white[6].scale.set(0.6,0.6,0.6);
		white[6].id="w6p";
		white[6].name="61";
		plane[6][1].name="10";
		domEvents.bind(white[6],"click",function(event) { pieceMove(event.target); });
		scene.add(white[6]);
	});
	loader.load("wpawn.js",function(geometry,materials) {
		white[7]=new THREE.Mesh(geometry,new THREE.MeshFaceMaterial(materials));
		white[7].position.set(plane[7][1].position.x,plane[7][1].position.y,plane[7][1].position.z);
		white[7].scale.set(0.6,0.6,0.6);
		white[7].id="w7p";
		white[7].name="71";
		plane[7][1].name="10";
		domEvents.bind(white[7],"click",function(event) { pieceMove(event.target); });
		scene.add(white[7]);
	});
	loader.load("wrook.js",function(geometry,materials) {
		white[8]=new THREE.Mesh(geometry,new THREE.MeshFaceMaterial(materials));
		white[8].position.set(plane[0][0].position.x,plane[0][0].position.y,plane[0][0].position.z);
		white[8].scale.set(0.7,0.7,0.7);
		white[8].id="w0r";
		white[8].name="00";
		plane[0][0].name="50";
		domEvents.bind(white[8],"click",function(event) { pieceMove(event.target); });
		scene.add(white[8]);
	});
	loader.load("wrook.js",function(geometry,materials) {
		white[15]=new THREE.Mesh(geometry,new THREE.MeshFaceMaterial(materials));
		white[15].position.set(plane[7][0].position.x,plane[7][0].position.y,plane[7][0].position.z);
		white[15].scale.set(0.7,0.7,0.7);
		white[15].id="w7r";
		white[15].name="70";
		plane[7][0].name="50";
		domEvents.bind(white[15],"click",function(event) { pieceMove(event.target); });
		scene.add(white[15]);
	});
	loader.load("wknight.js",function(geometry,materials) {
		white[9]=new THREE.Mesh(geometry,new THREE.MeshFaceMaterial(materials));
		white[9].position.set(plane[1][0].position.x,plane[1][0].position.y,plane[1][0].position.z);
		white[9].scale.set(0.7,0.7,0.7);
		white[9].id="w1n";
		white[9].name="10";
		plane[1][0].name="30";
		domEvents.bind(white[9],"click",function(event) { pieceMove(event.target); });
		scene.add(white[9]);
	});
	loader.load("wknight.js",function(geometry,materials) {
		white[14]=new THREE.Mesh(geometry,new THREE.MeshFaceMaterial(materials));
		white[14].position.set(plane[6][0].position.x,plane[6][0].position.y,plane[6][0].position.z);
		white[14].scale.set(0.7,0.7,0.7);
		white[14].id="w6n";
		white[14].name="60";
		plane[6][0].name="30";
		domEvents.bind(white[14],"click",function(event) { pieceMove(event.target); });
		scene.add(white[14]);
	});
	loader.load("wbishop.js",function(geometry,materials) {
		white[10]=new THREE.Mesh(geometry,new THREE.MeshFaceMaterial(materials));
		white[10].position.set(plane[2][0].position.x,plane[2][0].position.y,plane[2][0].position.z);
		white[10].scale.set(0.7,0.7,0.7);
		white[10].id="w2b";
		white[10].name="20";
		plane[2][0].name="31";
		domEvents.bind(white[10],"click",function(event) { pieceMove(event.target); });
		scene.add(white[10]);
	});
	loader.load("wbishop.js",function(geometry,materials) {
		white[13]=new THREE.Mesh(geometry,new THREE.MeshFaceMaterial(materials));
		white[13].position.set(plane[5][0].position.x,plane[5][0].position.y,plane[5][0].position.z);
		white[13].scale.set(0.7,0.7,0.7);
		white[13].id="w5b";
		white[13].name="50";
		plane[5][0].name="31";
		domEvents.bind(white[13],"click",function(event) { pieceMove(event.target); });
		scene.add(white[13]);
	});
	loader.load("wking.js",function(geometry,materials) {
		white[12]=new THREE.Mesh(geometry,new THREE.MeshFaceMaterial(materials));
		white[12].position.set(plane[4][0].position.x,plane[4][0].position.y,plane[4][0].position.z);
		white[12].scale.set(0.7,0.7,0.7);
		white[12].id="w4k";
		white[12].name="40";
		plane[4][0].name="100";
		domEvents.bind(white[12],"click",function(event) { pieceMove(event.target); });
		scene.add(white[12]);
	});
	loader.load("wqueen.js",function(geometry,materials) {
		white[11]=new THREE.Mesh(geometry,new THREE.MeshFaceMaterial(materials));
		white[11].position.set(plane[3][0].position.x,plane[3][0].position.y,plane[3][0].position.z);
		white[11].scale.set(0.7,0.7,0.7);
		white[11].id="w3q";
		white[11].name="30";
		plane[3][0].name="90";
		domEvents.bind(white[11],"click",function(event) { pieceMove(event.target); });
		scene.add(white[11]);
	});
// Creo i pezzi neri, per cui vale quando detto per i bianchi
	loader.load("bpawn.js",function(geometry,materials) {
		black[0]=new THREE.Mesh(geometry,new THREE.MeshFaceMaterial(materials));
		black[0].position.set(plane[0][6].position.x,plane[0][6].position.y,plane[0][6].position.z);
		black[0].scale.set(0.6,0.6,0.6);
		black[0].id="b0p";
		black[0].name="06";
		plane[0][6].name="-10";
		domEvents.bind(black[0],"click",function(event) { pieceMove(event.target); });
		scene.add(black[0]);
	});
	loader.load("bpawn.js",function(geometry,materials) {
		black[1]=new THREE.Mesh(geometry,new THREE.MeshFaceMaterial(materials));
		black[1].position.set(plane[1][6].position.x,plane[1][6].position.y,plane[1][6].position.z);
		black[1].scale.set(0.6,0.6,0.6);
		black[1].id="b1p";
		black[1].name="16";
		plane[1][6].name="-10";
		domEvents.bind(black[1],"click",function(event) { pieceMove(event.target); });
		scene.add(black[1]);
	});
	loader.load("bpawn.js",function(geometry,materials) {
		black[2]=new THREE.Mesh(geometry,new THREE.MeshFaceMaterial(materials));
		black[2].position.set(plane[2][6].position.x,plane[2][6].position.y,plane[2][6].position.z);
		black[2].scale.set(0.6,0.6,0.6);
		black[2].id="b2p";
		black[2].name="26";
		plane[2][6].name="-10";
		domEvents.bind(black[2],"click",function(event) { pieceMove(event.target); });
		scene.add(black[2]);
	});
	loader.load("bpawn.js",function(geometry,materials) {
		black[3]=new THREE.Mesh(geometry,new THREE.MeshFaceMaterial(materials));
		black[3].position.set(plane[3][6].position.x,plane[3][6].position.y,plane[3][6].position.z);
		black[3].scale.set(0.6,0.6,0.6);
		black[3].id="b3p";
		black[3].name="36";
		plane[3][6].name="-10";
		domEvents.bind(black[3],"click",function(event) { pieceMove(event.target); });
		scene.add(black[3]);
	});
	loader.load("bpawn.js",function(geometry,materials) {
		black[4]=new THREE.Mesh(geometry,new THREE.MeshFaceMaterial(materials));
		black[4].position.set(plane[4][6].position.x,plane[4][6].position.y,plane[4][6].position.z);
		black[4].scale.set(0.6,0.6,0.6);
		black[4].id="b4p";
		black[4].name="46";
		plane[4][6].name="-10";
		domEvents.bind(black[4],"click",function(event) { pieceMove(event.target); });
		scene.add(black[4]);
	});
	loader.load("bpawn.js",function(geometry,materials) {
		black[5]=new THREE.Mesh(geometry,new THREE.MeshFaceMaterial(materials));
		black[5].position.set(plane[5][6].position.x,plane[5][6].position.y,plane[5][6].position.z);
		black[5].scale.set(0.6,0.6,0.6);
		black[5].id="b5p";
		black[5].name="56";
		plane[5][6].name="-10";
		domEvents.bind(black[5],"click",function(event) { pieceMove(event.target); });
		scene.add(black[5]);
	});
	loader.load("bpawn.js",function(geometry,materials) {
		black[6]=new THREE.Mesh(geometry,new THREE.MeshFaceMaterial(materials));
		black[6].position.set(plane[6][6].position.x,plane[6][6].position.y,plane[6][6].position.z);
		black[6].scale.set(0.6,0.6,0.6);
		black[6].id="b6p";
		black[6].name="66";
		plane[6][6].name="-10";
		domEvents.bind(black[6],"click",function(event) { pieceMove(event.target); });
		scene.add(black[6]);
	});
	loader.load("bpawn.js",function(geometry,materials) {
		black[7]=new THREE.Mesh(geometry,new THREE.MeshFaceMaterial(materials));
		black[7].position.set(plane[7][6].position.x,plane[7][6].position.y,plane[7][6].position.z);
		black[7].scale.set(0.6,0.6,0.6);
		black[7].id="b7p";
		black[7].name="76";
		plane[7][6].name="-10";
		domEvents.bind(black[7],"click",function(event) { pieceMove(event.target); });
		scene.add(black[7]);
	});
	loader.load("brook.js",function(geometry,materials) {
		black[8]=new THREE.Mesh(geometry,new THREE.MeshFaceMaterial(materials));
		black[8].position.set(plane[0][7].position.x,plane[0][7].position.y,plane[0][7].position.z);
		black[8].scale.set(0.7,0.7,0.7);
		black[8].id="b0r";
		black[8].name="07";
		plane[0][7].name="-50";
		domEvents.bind(black[8],"click",function(event) { pieceMove(event.target); });
		scene.add(black[8]);
	});
	loader.load("brook.js",function(geometry,materials) {
		black[15]=new THREE.Mesh(geometry,new THREE.MeshFaceMaterial(materials));
		black[15].position.set(plane[7][7].position.x,plane[7][7].position.y,plane[7][7].position.z);
		black[15].scale.set(0.7,0.7,0.7);
		black[15].id="b7r";
		black[15].name="77";
		plane[7][7].name="-50";
		domEvents.bind(black[15],"click",function(event) { pieceMove(event.target); });
		scene.add(black[15]);
	});
	loader.load("bknight.js",function(geometry,materials) {
		black[9]=new THREE.Mesh(geometry,new THREE.MeshFaceMaterial(materials));
		black[9].position.set(plane[1][7].position.x,plane[1][7].position.y,plane[1][7].position.z);
		black[9].scale.set(0.7,0.7,0.7);
		black[9].id="b1n";
		black[9].name="17";
		plane[1][7].name="-30";
		domEvents.bind(black[9],"click",function(event) { pieceMove(event.target); });
		scene.add(black[9]);
	});
	loader.load("bknight.js",function(geometry,materials) {
		black[14]=new THREE.Mesh(geometry,new THREE.MeshFaceMaterial(materials));
		black[14].position.set(plane[6][7].position.x,plane[6][7].position.y,plane[6][7].position.z);
		black[14].scale.set(0.7,0.7,0.7);
		black[14].id="b6n";
		black[14].name="67";
		plane[6][7].name="-30";
		domEvents.bind(black[14],"click",function(event) { pieceMove(event.target); });
		scene.add(black[14]);
	});
	loader.load("bbishop.js",function(geometry,materials) {
		black[10]=new THREE.Mesh(geometry,new THREE.MeshFaceMaterial(materials));
		black[10].position.set(plane[2][7].position.x,plane[2][7].position.y,plane[2][7].position.z);
		black[10].scale.set(0.7,0.7,0.7);
		black[10].id="b2b";
		black[10].name="27";
		plane[2][7].name="-31";
		domEvents.bind(black[10],"click",function(event) { pieceMove(event.target); });
		scene.add(black[10]);
	});
	loader.load("bbishop.js",function(geometry,materials) {
		black[13]=new THREE.Mesh(geometry,new THREE.MeshFaceMaterial(materials));
		black[13].position.set(plane[5][7].position.x,plane[5][7].position.y,plane[5][7].position.z);
		black[13].scale.set(0.7,0.7,0.7);
		black[13].id="b5b";
		black[13].name="57";
		plane[5][7].name="-31";
		domEvents.bind(black[13],"click",function(event) { pieceMove(event.target); });
		scene.add(black[13]);
	});
	loader.load("bking.js",function(geometry,materials) {
		black[12]=new THREE.Mesh(geometry,new THREE.MeshFaceMaterial(materials));
		black[12].position.set(plane[4][7].position.x,plane[4][7].position.y,plane[4][7].position.z);
		black[12].scale.set(0.7,0.7,0.7);
		black[12].id="b4k";
		black[12].name="47";
		plane[4][7].name="-100";
		domEvents.bind(black[12],"click",function(event) { pieceMove(event.target); });
		scene.add(black[12]);
	});
	loader.load("bqueen.js",function(geometry,materials) {
		black[11]=new THREE.Mesh(geometry,new THREE.MeshFaceMaterial(materials));
		black[11].position.set(plane[3][7].position.x,plane[3][7].position.y,plane[3][7].position.z);
		black[11].scale.set(0.7,0.7,0.7);
		black[11].id="b3q";
		black[11].name="37";
		plane[3][7].name="-90";
		domEvents.bind(black[11],"click",function(event) { pieceMove(event.target); });
		scene.add(black[11]);
	});
}
			
// Questa funzione abbina ad ogni pezzo la giusta funzione per calcolarne le mosse in base al tipo contenuto nell'id
function pieceMove(mesh) {
	if(mesh.id.substring(0,1)==turn && !changeViewpoint)  {
// Eventuali mosse di altri pezzi vengono nascoste
		for(var i=0;i<8;i++)
			for(var j=0;j<8;j++) {
				moves[i][j].name="0";
				scene.remove(moves[i][j]);
			}
		actual=mesh;
		switch(mesh.id.substring(2,3)) {
			case "p":
				pawnGo(mesh);
				break;
			case "r":
				rookGo(mesh);
				break;
			case "b":
				bishopGo(mesh);
				break;
			case "n":
				knightGo(mesh);
				break;
			case "q":
				queenGo(mesh);
				break;
			case "k":
				kingGo(mesh);
				break;
		}
// Se il pezzo non è attivo faccio in modo che cliccandolo ci si muova sul quadrato su cui esso si trova
	} else
		if(parseInt(moves[parseInt(mesh.name.substring(0,1))][parseInt(mesh.name.substring(1,2))].name)==1)
			moveTo(moves[parseInt(mesh.name.substring(0,1))][parseInt(mesh.name.substring(1,2))]);
}
			
// Calcola le mosse delle torri
function rookGo(rook) {
	var x=parseInt(rook.name.substring(0,1));
	var z=parseInt(rook.name.substring(1,2));
	var v,f;
	if(rook.id.substring(0,1)=="b")
		f=1;
	else
		f=-1;
	v=z;
	while(v-1>=0 && f*parseInt(plane[x][v-1].name)>=0) {
		moves[x][v-1].name="1";
		scene.add(moves[x][v-1]);
		if(f*parseInt(plane[x][v-1].name)>0)
			break;
		v=v-1;
	}
	v=z;
	while(v+1<8 && f*parseInt(plane[x][v+1].name)>=0) {
		moves[x][v+1].name="1";
		scene.add(moves[x][v+1]);
		if(f*parseInt(plane[x][v+1].name)>0)
			break;
		v=v+1;
	}
	v=x;
	while(v-1>=0 && f*parseInt(plane[v-1][z].name)>=0) {
		moves[v-1][z].name="1";
		scene.add(moves[v-1][z]);
		if(f*parseInt(plane[v-1][z].name)>0)
			break;
		v=v-1;
	}
	v=x;
	while(v+1<8 && f*parseInt(plane[v+1][z].name)>=0) {
		moves[v+1][z].name="1";
		scene.add(moves[v+1][z]);
		if(f*parseInt(plane[v+1][z].name)>0)
			break;
		v=v+1;
	}
}
			
// Calcola le mosse delle regine
function queenGo(queen) {
	var x=parseInt(queen.name.substring(0,1));
	var z=parseInt(queen.name.substring(1,2));
	var v,w,f;
	if(queen.id.substring(0,1)=="b")
		f=1;
	else
		f=-1;
	v=z;
	w=x;
	while(v-1>=0 && w-1>=0 && f*parseInt(plane[w-1][v-1].name)>=0) {
		moves[w-1][v-1].name="1";
		scene.add(moves[w-1][v-1]);
		if(f*parseInt(plane[w-1][v-1].name)>0)
			break;
		v=v-1;
		w=w-1;
	}
	v=z;
	w=x
	while(v+1<8 && w-1>=0 && f*parseInt(plane[w-1][v+1].name)>=0) {
		moves[w-1][v+1].name="1";
		scene.add(moves[w-1][v+1]);
		if(f*parseInt(plane[w-1][v+1].name)>0)
			break;
		v=v+1;
		w=w-1;
	}
	v=z;
	w=x;
	while(v+1<8 && w+1<8 && f*parseInt(plane[w+1][v+1].name)>=0) {
		moves[w+1][v+1].name="1";
		scene.add(moves[w+1][v+1]);
		if(f*parseInt(plane[w+1][v+1].name)>0)
			break;
		w=w+1;
		v=v+1;
	}
	v=z;
	w=x;
	while(v-1>=0 && w+1<8 && f*parseInt(plane[w+1][v-1].name)>=0) {
		moves[w+1][v-1].name="1";
		scene.add(moves[w+1][v-1]);
		if(f*parseInt(plane[w+1][v-1].name)>0)
			break;
		w=w+1;
		v=v-1;
	}
	v=z;
	while(v-1>=0 && f*parseInt(plane[x][v-1].name)>=0) {
		moves[x][v-1].name="1";
		scene.add(moves[x][v-1]);
		if(f*parseInt(plane[x][v-1].name)>0)
			break;
		v=v-1;
	}
	v=z;
	while(v+1<8 && f*parseInt(plane[x][v+1].name)>=0) {
		moves[x][v+1].name="1";
		scene.add(moves[x][v+1]);
		if(f*parseInt(plane[x][v+1].name)>0)
			break;
		v=v+1;
	}
	v=x;
	while(v-1>=0 && f*parseInt(plane[v-1][z].name)>=0) {
		moves[v-1][z].name="1";
		scene.add(moves[v-1][z]);
		if(f*parseInt(plane[v-1][z].name)>0)
			break;
		v=v-1;
	}
	v=x;
	while(v+1<8 && f*parseInt(plane[v+1][z].name)>=0) {
		moves[v+1][z].name="1";
		scene.add(moves[v+1][z]);
		if(f*parseInt(plane[v+1][z].name)>0)
			break;
		v=v+1;
	}
}
			
// Calcola le mosse degli alfieri
function bishopGo(bishop) {
	var x=parseInt(bishop.name.substring(0,1));
	var z=parseInt(bishop.name.substring(1,2));
	var v,w,f;
	if(bishop.id.substring(0,1)=="b")
		f=1;
	else
		f=-1;
	v=z;
	w=x;
	while(v-1>=0 && w-1>=0 && f*parseInt(plane[w-1][v-1].name)>=0) {
		moves[w-1][v-1].name="1";
		scene.add(moves[w-1][v-1]);
		if(f*parseInt(plane[w-1][v-1].name)>0)
			break;
		v=v-1;
		w=w-1;
	}
	v=z;
	w=x
	while(v+1<8 && w-1>=0 && f*parseInt(plane[w-1][v+1].name)>=0) {
		moves[w-1][v+1].name="1";
		scene.add(moves[w-1][v+1]);
		if(f*parseInt(plane[w-1][v+1].name)>0)
			break;
		v=v+1;
		w=w-1;
	}
	v=z;
	w=x;
	while(v+1<8 && w+1<8 && f*parseInt(plane[w+1][v+1].name)>=0) {
		moves[w+1][v+1].name="1";
		scene.add(moves[w+1][v+1]);
		if(f*parseInt(plane[w+1][v+1].name)>0)
			break;
		w=w+1;
		v=v+1;
	}
	v=z;
	w=x;
	while(v-1>=0 && w+1<8 && f*parseInt(plane[w+1][v-1].name)>=0) {
		moves[w+1][v-1].name="1";
		scene.add(moves[w+1][v-1]);
		if(f*parseInt(plane[w+1][v-1].name)>0)
			break;
		w=w+1;
		v=v-1;
	}
}
			
// Calcola le mosse dei cavalli
function knightGo(knight) {
	var x=parseInt(knight.name.substring(0,1));
	var z=parseInt(knight.name.substring(1,2));
	var f;
	if(knight.id.substring(0,1)=="b")
		f=1;
	else
		f=-1;
	if(x+1<8 && z+2<8 && f*parseInt(plane[x+1][z+2].name)>=0) {
		moves[x+1][z+2].name="1";
		scene.add(moves[x+1][z+2]);
	}
	if(x+1<8 && z-2>=0 && f*parseInt(plane[x+1][z-2].name)>=0) {
		moves[x+1][z-2].name="1";
		scene.add(moves[x+1][z-2]);
	}
	if(x-1>=0 && z+2<8 && f*parseInt(plane[x-1][z+2].name)>=0) {
		moves[x-1][z+2].name="1";
		scene.add(moves[x-1][z+2]);
	}
	if(x-1>=0 && z-2>=0 && f*parseInt(plane[x-1][z-2].name)>=0) {
		moves[x-1][z-2].name="1";
		scene.add(moves[x-1][z-2]);
	}
	if(x+2<8 && z+1<8 && f*parseInt(plane[x+2][z+1].name)>=0) {
		moves[x+2][z+1].name="1";
		scene.add(moves[x+2][z+1]);
	}
	if(x+2<8 && z-1>=0 && f*parseInt(plane[x+2][z-1].name)>=0) {
		moves[x+2][z-1].name="1";
		scene.add(moves[x+2][z-1]);
	}
	if(x-2>=0 && z+1<8 && f*parseInt(plane[x-2][z+1].name)>=0) {
		moves[x-2][z+1].name="1";
		scene.add(moves[x-2][z+1]);
	}
	if(x-2>=0 && z-1>=0 && f*parseInt(plane[x-2][z-1].name)>=0) {
		moves[x-2][z-1].name="1";
		scene.add(moves[x-2][z-1]);
	}
}
			
// Calcola le mosse dei pedoni
function pawnGo(pawn) {
	var x=parseInt(pawn.name.substring(0,1));
	var z=parseInt(pawn.name.substring(1,2));
	var f;
	if(pawn.id.substring(0,1)=="b")
		f=1;
	else
		f=-1;
	if(z-f>=0 && parseInt(plane[x][z-f].name)==0) {
		moves[x][z-f].name="1";
		scene.add(moves[x][z-f]);
		if((z==6 || z==1) && parseInt(plane[x][z-2*f].name)==0) {
			moves[x][z-2*f].name="1";
			scene.add(moves[x][z-2*f]);
		}
	}
	if(z-f>=0 && x-1>=0 && f*parseInt(plane[x-1][z-f].name)>0) {
		moves[x-1][z-f].name="1";
		scene.add(moves[x-1][z-f]);
	}
	if(z-f>=0 && x+1<8 && f*parseInt(plane[x+1][z-f].name)>0) {
		moves[x+1][z-f].name="1";
		scene.add(moves[x+1][z-f]);
	}
}
			
// Calcola le mosse dei re
function kingGo(king) {
	var x=parseInt(king.name.substring(0,1));
	var z=parseInt(king.name.substring(1,2));
	var f;
	if(king.id.substring(0,1)=="b")
		f=1;
	else
		f=-1;
	if(z-1>=0 && x-1>=0 && f*parseInt(plane[x-1][z-1].name)>=0) {
		moves[x-1][z-1].name="1";
		scene.add(moves[x-1][z-1]);
	}
	if(z+1<8 && x-1>=0 && f*parseInt(plane[x-1][z+1].name)>=0) {
		moves[x-1][z+1].name="1";
		scene.add(moves[x-1][z+1]);
	}
	if(z+1<8 && x+1<8 && f*parseInt(plane[x+1][z+1].name)>=0) {
		moves[x+1][z+1].name="1";
		scene.add(moves[x+1][z+1]);
	}
	if(z-1>=0 && x+1<8 && f*parseInt(plane[x+1][z-1].name)>=0) {
		moves[x+1][z-1].name="1";
		scene.add(moves[x+1][z-1]);
	}
	if(z-1>=0 && f*parseInt(plane[x][z-1].name)>=0) {
		moves[x][z-1].name="1";
		scene.add(moves[x][z-1]);
	}
	if(z+1<8 && f*parseInt(plane[x][z+1].name)>=0) {
		moves[x][z+1].name="1";
		scene.add(moves[x][z+1]);
	}
	if(x-1>=0 && f*parseInt(plane[x-1][z].name)>=0) {
		moves[x-1][z].name="1";
		scene.add(moves[x-1][z]);
	}
	if(x+1<8 && f*parseInt(plane[x+1][z].name)>=0) {
		moves[x+1][z].name="1";
		scene.add(moves[x+1][z]);
	}
}
			
// Questa funzione sposta il pezzo selezionato nella casella scelta ed eventualmente mangia il pezzo avversario
function moveTo(piece) {
	if(parseInt(moves[3.5-piece.position.x][3.5-piece.position.z].name)==1) {
		var end=0;
// Controllo se sto mangiando un pezzo, in tal caso gli sgancio l'evento e lo rimuovo dalla scena
		if(parseInt(plane[3.5-piece.position.x][3.5-piece.position.z].name)!=0) {
			var killed=scene.getObjectByName((3.5-piece.position.x)+""+(3.5-piece.position.z)).id;
			var name=parseInt(killed.substring(1,2));
			if(killed.substring(2,3)!="p")
				name=name+8;
			if(actual.id.substring(0,1)=="b") {
				domEvents.unbind(white[name],"click",function() { });
				scene.remove(white[name]);
// Se il pezzo mangiato è un re la partita è finita
				if(killed.substring(2,3)=="k")
					end=-1;
			} else {
				domEvents.unbind(black[name],"click",function() { });
				scene.remove(black[name]);
				if(killed.substring(2,3)=="k")
					end=1;
			}
		}
// Controllo se il pezzo è un pedone ed è arrivato in fondo, e lo cambio in regina
		if(actual.id.substring(2,3)=="p" && ((3.5-piece.position.z)==7 || (3.5-piece.position.z)==0)) {
			actual.id=actual.id.substring(0,2)+"q"
			if(actual.id.substring(0,1)=="b") {
				loader.load("bqueen.js",function(geometry,materials) {
					black[actual.id.substring(1,2)]=new THREE.Mesh(geometry,new THREE.MeshFaceMaterial(materials));
					black[actual.id.substring(1,2)].position=actual.position;
					black[actual.id.substring(1,2)].scale.set(0.7,0.7,0.7);
					black[actual.id.substring(1,2)].id="b"+actual.id.substring(1,2)+"q";
					black[actual.id.substring(1,2)].name=actual.name;
					plane[3.5-actual.position.x][3.5-actual.position.z].name="-90";
					domEvents.bind(black[actual.id.substring(1,2)],"click",function(event) { pieceMove(event.target); });
					scene.add(black[actual.id.substring(1,2)]);
				});
				var temp=actual;
				actual=black[actual.id.substing(1,2)];
				scene.remove(temp);
			} else {
				loader.load("wqueen.js",function(geometry,materials) {
					black[actual.id.substring(1,2)]=new THREE.Mesh(geometry,new THREE.MeshFaceMaterial(materials));
					black[actual.id.substring(1,2)].position=actual.position;
					black[actual.id.substring(1,2)].scale.set(0.7,0.7,0.7);
					black[actual.id.substring(1,2)].id="w"+actual.id.substring(1,2)+"q";
					black[actual.id.substring(1,2)].name=actual.name;
					plane[3.5-actual.position.x][3.5-actual.position.z].name="90";
					domEvents.bind(black[actual.id.substring(1,2)],"click",function(event) { pieceMove(event.target); });
					scene.add(black[actual.id.substring(1,2)]);
				});
				var temp=actual;
				actual=black[actual.id.substing(1,2)];
				scene.remove(temp);
			}
		}
// Sposto il valore del pezzo mosso nella scacchiera
		plane[3.5-piece.position.x][3.5-piece.position.z].name=plane[3.5-actual.position.x][3.5-actual.position.z].name;
		plane[3.5-actual.position.x][3.5-actual.position.z].name="0";
		actual.position.set(piece.position.x,actual.position.y,piece.position.z);
		for(var i=0;i<8;i++)
			for(var j=0;j<8;j++) {
				moves[i][j].name="0";
				scene.remove(moves[i][j]);
			}
		actual.name=(3.5-piece.position.x)+""+(3.5-piece.position.z);
// Se la partita è finita ritorno alla prima scena, altrimenti cambio turno e giro la telecamera
		if(end!=0) {
			if(end==-1)
				alert("Black is the winner!");
			else
				alert("White is the winner!");
			location.reload();
		} else {
			if(turn=="b") {
				turn="w";
			} else {
				turn="b";
			}
			changeViewpoint=true;
		}
		camera.lookAt(scene.position);
	}
}