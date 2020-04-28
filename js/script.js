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
let fantomemove = ["lol", "r", "l", "t", "b"];
let fantomelist = {
	fan1:{
		x:10,
		y:10,
		direction:"t"
	},
	fan2:{
		x:10,
		y:12,
		direction:"b"
	},
	fan3:{
		x:11,
		y:11,
		direction:"l"
	},
	fan4:{
		x:9,
		y:11,
		direction:"r"
	},
}

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

function showfantome(){
	for(ghost in fantomelist){
		let fantomeA = fantomelist[ghost];
		let fan = document.createElement("div");
		fan.classList.add("ghost")
		fan.style.gridColumn = fantomeA.x;
		fan.style.gridRow = fantomeA.y;
		container.appendChild(fan)
	}
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

function positionfantome(){
	for(ghost in fantomelist){
		let fantomeA = fantomelist[ghost];
		fantomeA.direction = fantomemove[Math.ceil(Math.random() * 4)]
		if(fantomeA.direction == "l" && fantomeA.x-1 == 0){
			fantomeA.x = 20
		}
		else if(fantomeA.direction == "r" && fantomeA.x == 19){
			fantomeA.x = 0
		}
		switch(fantomeA.direction){
			case "r":
				if(maGrille[fantomeA.y-1][fantomeA.x] != 0){
					fantomeA.x++;
				}
				break;
			case "l":
				if(maGrille[fantomeA.y-1][fantomeA.x-2] != 0){
					fantomeA.x--;
				}
				break;
			case "t":
				if(maGrille[fantomeA.y-2][fantomeA.x-1] != 0){
					fantomeA.y--;
				}
				break;
			case "b":
				if(maGrille[fantomeA.y][fantomeA.x-1] != 0){
					fantomeA.y++;
				}
				break;
		}
	}
}

function pacHittingFan(){
	for(ghost in fantomelist){
		let fantomeA = fantomelist[ghost];
		if(pacman.x == fantomeA.x && pacman.y == fantomeA.y){
			pacman.x = 1;
			pacman.y = 1;
		}
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
	if (pacman.x != 1 && pacman.y != 1){
		window.addEventListener("keydown", changeDirection, false);
		positionpacman();
		pacHittingFan();
		positionfantome();
		pacHittingFan();
		show();
		showpacman();
		showfantome();
		refreshPoints();
		setTimeout(refresh,250)
	}
	else{
		document.getElementById("mort").innerHTML = "Vous avez perdu";
	}
}

