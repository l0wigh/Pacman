let maGrille = [
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0],
	[0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
	[0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
	[0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
	[0,2,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,2,0],
	[0,2,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0],
	[0,0,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,0,0],
	[0,1,1,0,2,0,2,2,2,2,2,2,2,0,2,0,1,1,0],
	[0,0,0,0,2,0,2,0,0,1,0,0,2,0,2,0,0,0,0],
	[2,2,2,2,2,2,2,0,1,1,1,0,2,2,2,2,2,2,2],
	[0,0,0,0,2,0,2,0,0,1,0,0,2,0,2,0,0,0,0],
	[0,1,1,0,2,0,2,2,2,2,2,2,2,0,2,0,1,1,0],
	[0,0,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,0,0],
	[0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0],
	[0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
	[0,2,2,0,2,2,2,2,2,2,2,2,2,2,2,0,2,2,0],
	[0,0,2,0,2,0,2,0,0,0,0,0,2,0,2,0,2,0,0],
	[0,2,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0],
	[0,2,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,2,0],
	[0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

let container = document.getElementById("container");
let points = 0;

function show(){
	container.innerHTML = "";
	for(lignes in maGrille){
		for(bloc in maGrille[lignes]){
			let div = document.createElement("div");
			y = parseInt(lignes) + 1;
			x = parseInt(bloc) + 1;
			if(maGrille[lignes][bloc] == 0){
				div.classList.add("mur");
			}
			else if(maGrille[lignes][bloc] == 1){
				div.classList.add("sol");
			}
			else if(maGrille[lignes][bloc] == 2){
				div.classList.add("bonbon");
			}
			div.style.gridColumn = x;
			div.style.gridRow = y;
			container.appendChild(div);
		}
	}
}

function showpacman(){
	let pac = document.createElement("div");
	switch(pacman.direction){
		case "r":
			pac.classList.add("pacmanr");
			break;
		case "l":
			pac.classList.add("pacmanl");
			break;
		case "t":
			pac.classList.add("pacmant");
			break;
		case "b":
			pac.classList.add("pacmanb");
			break;
	}
	pac.style.gridColumn = pacman.x;
	pac.style.gridRow = pacman.y;
	container.appendChild(pac)
}

function positionpacman(){
	if(maGrille[pacman.y-1][pacman.x-1] == 2){
		points++;
		maGrille[pacman.y-1][pacman.x-1] = 1;
	}
	if(pacman.direction == "l" && pacman.x-1 == 0){
		pacman.x = 20
	}
	else if(pacman.direction == "r" && pacman.x == 19){
		pacman.x = 0
	}
	switch(pacman.direction){
		case "r":
			if(maGrille[pacman.y-1][pacman.x] != 0){
				pacman.x++;
			}
			break;
		case "l":
			if(maGrille[pacman.y-1][pacman.x-2] != 0){
				pacman.x--;
			}
			break;
		case "t":
			if(maGrille[pacman.y-2][pacman.x-1] != 0){
				pacman.y--;
			}
			break;
		case "b":
			if(maGrille[pacman.y][pacman.x-1] != 0){
				pacman.y++;
			}
			break;
	}
}

function changeDirection(key){
	if(key.keyCode == "37"){
		pacman.direction = "l";
	}
	else if(key.keyCode == "38"){
		pacman.direction = "t";
	}
	else if(key.keyCode == "39"){
		pacman.direction = "r";
	}
	else if(key.keyCode == "40"){
		pacman.direction = "b";
	}
}

function refreshPoints(){
	document.getElementById("point").innerHTML = "Points : " + points
}

let pacman = {
	y:17,
	x:10,
	direction:"r"
}

function refresh(){
	window.addEventListener("keydown", changeDirection, false);
	positionpacman();
	show();
	showpacman();
	refreshPoints();
	setTimeout(refresh, 200)
}

