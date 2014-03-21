// La funzione popola la scacchiera ed avvia una nuova partita ogni volta che viene invocata
function fillBoard() {
// Creo i pezzi bianchi, li dispongo sulle mesh della scacchiera e gli aggancio gli eventi per muoverli
// Da 0 a 7 sono i pedoni, 8 e 15 le torri, 9 e 14 i cavalli, 10 e 13 gli alfieri, 12 il re ed 11 la regina
// Nel name mi memorizzo la loro posizione x-z sulla scacchiera, mentre in id ho colore-posizione nell'array-pezzo
	var piece_geometry=new THREE.CylinderGeometry(0.25,0.25,1);
	var piece_material=new THREE.MeshLambertMaterial({ color:0xefefef });
	for(var i=0;i<8;i++) {
		white[i]=new THREE.Mesh(piece_geometry,piece_material);
		white[i].position.set(plane[i][1].position.x,plane[i][1].position.y+0.5,plane[i][1].position.z);
		white[i].id="w"+i+"p";
		white[i].name=i+"1";
		plane[i][1].name="10";
		chess.add(white[i]);
	}
	white[8]=new THREE.Mesh(piece_geometry,piece_material);
	white[8].position.set(plane[0][0].position.x,plane[0][0].position.y+0.5,plane[0][0].position.z);
	white[8].id="w0r";
	white[8].name="00";
	plane[0][0].name="50";
	chess.add(white[8]);
	white[15]=new THREE.Mesh(piece_geometry,piece_material);
	white[15].position.set(plane[7][0].position.x,plane[7][0].position.y+0.5,plane[7][0].position.z);
	white[15].id="w7r";
	white[15].name="70";
	plane[7][0].name="50";
	chess.add(white[15]);
	white[9]=new THREE.Mesh(piece_geometry,piece_material);
	white[9].position.set(plane[1][0].position.x,plane[1][0].position.y+0.5,plane[1][0].position.z);
	white[9].id="w1n";
	white[9].name="10";
	plane[1][0].name="30";
	chess.add(white[9]);
	white[14]=new THREE.Mesh(piece_geometry,piece_material);
	white[14].position.set(plane[6][0].position.x,plane[6][0].position.y+0.5,plane[6][0].position.z);
	white[14].id="w6n";
	white[14].name="60";
	plane[6][0].name="30";
	chess.add(white[14]);
	white[10]=new THREE.Mesh(piece_geometry,piece_material);
	white[10].position.set(plane[2][0].position.x,plane[2][0].position.y+0.5,plane[2][0].position.z);
	white[10].id="w2b";
	white[10].name="20";
	plane[2][0].name="31";
	chess.add(white[10]);
	white[13]=new THREE.Mesh(piece_geometry,piece_material);
	white[13].position.set(plane[5][0].position.x,plane[5][0].position.y+0.5,plane[5][0].position.z);
	white[13].id="w5b";
	white[13].name="50";
	plane[5][0].name="31";
	chess.add(white[13]);
	white[12]=new THREE.Mesh(piece_geometry,piece_material);
	white[12].position.set(plane[4][0].position.x,plane[4][0].position.y+0.5,plane[4][0].position.z);
	white[12].id="w4k";
  	white[12].name="40";
	plane[4][0].name="100";
	chess.add(white[12]);
 	white[11]=new THREE.Mesh(piece_geometry,piece_material);
	white[11].position.set(plane[3][0].position.x,plane[3][0].position.y+0.5,plane[3][0].position.z);
	white[11].id="w3q";
	white[11].name="30";
	plane[3][0].name="90";
	chess.add(white[11]);
	for(var i=0;i<16;i++)
		domEvents.bind(white[i],"click",function(event) { pieceMove(event.target); });

// Creo anche i pezzi neri, per cui vale quando detto per i bianchi
	piece_material=new THREE.MeshLambertMaterial({ color:0x212121 });
	for(var i=0;i<8;i++) {
		black[i]=new THREE.Mesh(piece_geometry,piece_material);
		black[i].position.set(plane[i][6].position.x,plane[i][6].position.y+0.5,plane[i][6].position.z);
		black[i].id="b"+i+"p";
		black[i].name=i+"6";
		plane[i][6].name="-10";
		chess.add(black[i]);
	}
	black[8]=new THREE.Mesh(piece_geometry,piece_material);
	black[8].position.set(plane[0][7].position.x,plane[0][7].position.y+0.5,plane[0][7].position.z);
	black[8].id="b0r";
	black[8].name="07";
	plane[0][7].name="-50";
	chess.add(black[8]);
	black[15]=new THREE.Mesh(piece_geometry,piece_material);
	black[15].position.set(plane[7][7].position.x,plane[7][7].position.y+0.5,plane[7][7].position.z);
	black[15].id="b7r";
	black[15].name="77";
	plane[7][7].name="-50";
	chess.add(black[15]);
	black[9]=new THREE.Mesh(piece_geometry,piece_material);
	black[9].position.set(plane[1][7].position.x,plane[1][7].position.y+0.5,plane[1][7].position.z);
	black[9].id="b1n";
	black[9].name="17";
	plane[1][7].name="-30";
	chess.add(black[9]);
	black[14]=new THREE.Mesh(piece_geometry,piece_material);
	black[14].position.set(plane[6][7].position.x,plane[6][7].position.y+0.5,plane[6][7].position.z);
	black[14].id="b6n";
	black[14].name="67";
	plane[6][7].name="-30";
	chess.add(black[14]);
	black[10]=new THREE.Mesh(piece_geometry,piece_material);
	black[10].position.set(plane[2][7].position.x,plane[2][7].position.y+0.5,plane[2][7].position.z);
	black[10].id="b2b";
	black[10].name="27";
	plane[2][7].name="-31";
	chess.add(black[10]);
	black[13]=new THREE.Mesh(piece_geometry,piece_material);
	black[13].position.set(plane[5][7].position.x,plane[5][7].position.y+0.5,plane[5][7].position.z);
	black[13].id="b5b";
	black[13].name="57";
	plane[5][7].name="-31";
	chess.add(black[13]);
	black[12]=new THREE.Mesh(piece_geometry,piece_material);
	black[12].position.set(plane[4][7].position.x,plane[4][7].position.y+0.5,plane[4][7].position.z);
	black[12].id="b4k";
	black[12].name="47";
	plane[4][7].name="-100";
	chess.add(black[12]);
	black[11]=new THREE.Mesh(piece_geometry,piece_material);
	black[11].position.set(plane[3][7].position.x,plane[3][7].position.y+0.5,plane[3][7].position.z);
	black[11].id="b3q";
	black[11].name="37";
	plane[3][7].name="-90";
	chess.add(black[11]);
	for(var i=0;i<16;i++)
		domEvents.bind(black[i],"click",function(event) { pieceMove(event.target); });
}
			
// In base al tipo del pezzo contenuto nell'id ed in base al turno di gioco, fa compiere ad ogni pezzo le giuste mosse
function pieceMove(mesh) {
	if(mesh.id.substring(0,1)==turn)  {
		for(var i=0;i<8;i++)
			for(var j=0;j<8;j++) {
				moves[i][j].name="0";
				chess.remove(moves[i][j]);
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
// Se il pezzo non � attivo faccio in modo che cliccarlo sia come cliccare il quadrato su cui si trova
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
		chess.add(moves[x][v-1]);
		if(f*parseInt(plane[x][v-1].name)>0)
			break;
		v=v-1;
	}
	v=z;
	while(v+1<8 && f*parseInt(plane[x][v+1].name)>=0) {
		moves[x][v+1].name="1";
		chess.add(moves[x][v+1]);
		if(f*parseInt(plane[x][v+1].name)>0)
			break;
		v=v+1;
	}
	v=x;
	while(v-1>=0 && f*parseInt(plane[v-1][z].name)>=0) {
		moves[v-1][z].name="1";
		chess.add(moves[v-1][z]);
		if(f*parseInt(plane[v-1][z].name)>0)
			break;
		v=v-1;
	}
	v=x;
	while(v+1<8 && f*parseInt(plane[v+1][z].name)>=0) {
		moves[v+1][z].name="1";
		chess.add(moves[v+1][z]);
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
		chess.add(moves[w-1][v-1]);
		if(f*parseInt(plane[w-1][v-1].name)>0)
			break;
		v=v-1;
		w=w-1;
	}
	v=z;
	w=x
	while(v+1<8 && w-1>=0 && f*parseInt(plane[w-1][v+1].name)>=0) {
		moves[w-1][v+1].name="1";
		chess.add(moves[w-1][v+1]);
		if(f*parseInt(plane[w-1][v+1].name)>0)
			break;
		v=v+1;
		w=w-1;
	}
	v=z;
	w=x;
	while(v+1<8 && w+1<8 && f*parseInt(plane[w+1][v+1].name)>=0) {
		moves[w+1][v+1].name="1";
		chess.add(moves[w+1][v+1]);
		if(f*parseInt(plane[w+1][v+1].name)>0)
			break;
		w=w+1;
		v=v+1;
	}
	v=z;
	w=x;
	while(v-1>=0 && w+1<8 && f*parseInt(plane[w+1][v-1].name)>=0) {
		moves[w+1][v-1].name="1";
		chess.add(moves[w+1][v-1]);
		if(f*parseInt(plane[w+1][v-1].name)>0)
			break;
		w=w+1;
		v=v-1;
	}
	v=z;
	while(v-1>=0 && f*parseInt(plane[x][v-1].name)>=0) {
		moves[x][v-1].name="1";
		chess.add(moves[x][v-1]);
		if(f*parseInt(plane[x][v-1].name)>0)
			break;
		v=v-1;
	}
	v=z;
	while(v+1<8 && f*parseInt(plane[x][v+1].name)>=0) {
		moves[x][v+1].name="1";
		chess.add(moves[x][v+1]);
		if(f*parseInt(plane[x][v+1].name)>0)
			break;
		v=v+1;
	}
	v=x;
	while(v-1>=0 && f*parseInt(plane[v-1][z].name)>=0) {
		moves[v-1][z].name="1";
		chess.add(moves[v-1][z]);
		if(f*parseInt(plane[v-1][z].name)>0)
			break;
		v=v-1;
	}
	v=x;
	while(v+1<8 && f*parseInt(plane[v+1][z].name)>=0) {
		moves[v+1][z].name="1";
		chess.add(moves[v+1][z]);
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
		chess.add(moves[w-1][v-1]);
		if(f*parseInt(plane[w-1][v-1].name)>0)
			break;
		v=v-1;
		w=w-1;
	}
	v=z;
	w=x
	while(v+1<8 && w-1>=0 && f*parseInt(plane[w-1][v+1].name)>=0) {
		moves[w-1][v+1].name="1";
		chess.add(moves[w-1][v+1]);
		if(f*parseInt(plane[w-1][v+1].name)>0)
			break;
		v=v+1;
		w=w-1;
	}
	v=z;
	w=x;
	while(v+1<8 && w+1<8 && f*parseInt(plane[w+1][v+1].name)>=0) {
		moves[w+1][v+1].name="1";
		chess.add(moves[w+1][v+1]);
		if(f*parseInt(plane[w+1][v+1].name)>0)
			break;
		w=w+1;
		v=v+1;
	}
	v=z;
	w=x;
	while(v-1>=0 && w+1<8 && f*parseInt(plane[w+1][v-1].name)>=0) {
		moves[w+1][v-1].name="1";
		chess.add(moves[w+1][v-1]);
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
		chess.add(moves[x+1][z+2]);
	}
	if(x+1<8 && z-2>=0 && f*parseInt(plane[x+1][z-2].name)>=0) {
		moves[x+1][z-2].name="1";
		chess.add(moves[x+1][z-2]);
	}
	if(x-1>=0 && z+2<8 && f*parseInt(plane[x-1][z+2].name)>=0) {
		moves[x-1][z+2].name="1";
		chess.add(moves[x-1][z+2]);
	}
	if(x-1>=0 && z-2>=0 && f*parseInt(plane[x-1][z-2].name)>=0) {
		moves[x-1][z-2].name="1";
		chess.add(moves[x-1][z-2]);
	}
	if(x+2<8 && z+1<8 && f*parseInt(plane[x+2][z+1].name)>=0) {
		moves[x+2][z+1].name="1";
		chess.add(moves[x+2][z+1]);
	}
	if(x+2<8 && z-1>=0 && f*parseInt(plane[x+2][z-1].name)>=0) {
		moves[x+2][z-1].name="1";
		chess.add(moves[x+2][z-1]);
	}
	if(x-2>=0 && z+1<8 && f*parseInt(plane[x-2][z+1].name)>=0) {
		moves[x-2][z+1].name="1";
		chess.add(moves[x-2][z+1]);
	}
	if(x-2>=0 && z-1>=0 && f*parseInt(plane[x-2][z-1].name)>=0) {
		moves[x-2][z-1].name="1";
		chess.add(moves[x-2][z-1]);
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
		chess.add(moves[x][z-f]);
		if((z==6 || z==1) && parseInt(plane[x][z-2*f].name)==0) {
			moves[x][z-2*f].name="1";
			chess.add(moves[x][z-2*f]);
		}
	}
	if(z-f>=0 && x-1>=0 && f*parseInt(plane[x-1][z-f].name)>0) {
		moves[x-1][z-f].name="1";
		chess.add(moves[x-1][z-f]);
	}
	if(z-f>=0 && x+1<8 && f*parseInt(plane[x+1][z-f].name)>0) {
		moves[x+1][z-f].name="1";
		chess.add(moves[x+1][z-f]);
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
		chess.add(moves[x-1][z-1]);
	}
	if(z+1<8 && x-1>=0 && f*parseInt(plane[x-1][z+1].name)>=0) {
		moves[x-1][z+1].name="1";
		chess.add(moves[x-1][z+1]);
	}
	if(z+1<8 && x+1<8 && f*parseInt(plane[x+1][z+1].name)>=0) {
		moves[x+1][z+1].name="1";
		chess.add(moves[x+1][z+1]);
	}
	if(z-1>=0 && x+1<8 && f*parseInt(plane[x+1][z-1].name)>=0) {
		moves[x+1][z-1].name="1";
		chess.add(moves[x+1][z-1]);
	}
	if(z-1>=0 && f*parseInt(plane[x][z-1].name)>=0) {
		moves[x][z-1].name="1";
		chess.add(moves[x][z-1]);
	}
	if(z+1<8 && f*parseInt(plane[x][z+1].name)>=0) {
		moves[x][z+1].name="1";
		chess.add(moves[x][z+1]);
	}
	if(x-1>=0 && f*parseInt(plane[x-1][z].name)>=0) {
		moves[x-1][z].name="1";
		chess.add(moves[x-1][z]);
	}
	if(x+1<8 && f*parseInt(plane[x+1][z].name)>=0) {
		moves[x+1][z].name="1";
		chess.add(moves[x+1][z]);
	}
}
			
// Sposta il pezzo selezionato nella casella scelta ed eventualmente mangia un pezzo avversario
function moveTo(piece) {
	if(parseInt(moves[3.5-piece.position.x][3.5-piece.position.z].name)==1) {
		var end=0;
// Controllo se sto mangiando un pezzo, in tal caso gli sgancio l'evento e lo rimuovo dalla scena
// Se il pezzo mangiato � un re la partita � finita
		if(parseInt(plane[3.5-piece.position.x][3.5-piece.position.z].name)!=0) {
			var killed=chess.getObjectByName((3.5-piece.position.x)+""+(3.5-piece.position.z)).id;
			var name=parseInt(killed.substring(1,2));
			if(killed.substring(2,3)!="p")
				name=name+8;
			if(actual.id.substring(0,1)=="b") {
				domEvents.unbind(white[name],"click",function() { });
				chess.remove(white[name]);
				if(killed.substring(2,3)=="k")
					end=-1;
			} else {
				domEvents.unbind(black[name],"click",function() { });
				chess.remove(black[name]);
				if(killed.substring(2,3)=="k")
					end=1;
			}
		}
// Controllo se per caso un pedone � arrivato in fondo e va cambiato in regina
		if(actual.id.substring(2,3)=="p" && ((3.5-piece.position.z)==7 || (3.5-piece.position.z)==0)) {
			actual.id=actual.id.substring(0,2)+"q"
			if(actual.id.substring(0,1)=="b")
				plane[3.5-actual.position.x][3.5-actual.position.z].name="-90";
			else
				plane[3.5-actual.position.x][3.5-actual.position.z].name="90";
		}
// Sposto il valore del pezzo mosso nella scacchiera
		plane[3.5-piece.position.x][3.5-piece.position.z].name=plane[3.5-actual.position.x][3.5-actual.position.z].name;
		plane[3.5-actual.position.x][3.5-actual.position.z].name="0";
		actual.position.set(piece.position.x,actual.position.y,piece.position.z);
		for(var i=0;i<8;i++)
			for(var j=0;j<8;j++) {
				moves[i][j].name="0";
				chess.remove(moves[i][j]);
			}
		actual.name=(3.5-piece.position.x)+""+(3.5-piece.position.z);
// Se la partita � finita ritorno alla prima scenografia, altrimenti cambio turno e giro la telecamera
		if(end!=0) {
			if(end==-1)
				alert("Black is the winner!");
			else
				alert("White is the winner!");
			switchScene();
		} else {
			if(turn=="b") {
				turn="w";
				camera.position.set(0,10,10);
			} else {
				turn="b";
				camera.position.set(0,10,-10);
			}
		}
		camera.lookAt(scene.position);
	}
}