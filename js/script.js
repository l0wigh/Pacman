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

function show(){
	for(lignes in maGrille){
		for(bloc in maGrille[lignes]){
			let div = document.createElement("div");
			y = parseInt(lignes) + 1
			x = parseInt(bloc) + 1
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
	pac.classList.add("pacman")
	pac.style.gridColumn = pacman.x;
	pac.style.gridRow = pacman.y;
	container.appendChild(pac)
}

let pacman = {
	y:2,
	x:5,
	direction:1
}

function refresh(){
	show();
	showpacman();
	//setTimeout(refresh, 1000)
}

