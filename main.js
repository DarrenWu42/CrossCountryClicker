var clicks = 0;
var cycleSpeed = 1000;
var nextCost = 0;
var multiplier = [1,1,1,1,1,1,1];
var ticking = setInterval(function(){doTick();}, cycleSpeed);
var saver = setInterval(function(){saveGame();}, 60000);

var clickers = [0,0,0,0,0,0,0];
var clickersBought = [0,0,0,0,0,0,0];
var nextCostClicker = [10,250,10000,1000000,1000000000,10000000000000,1000000000000000000];

var OGCost = [10,250,10000,1000000,1000000000,10000000000000,1000000000000000000];

var upgrades ={ 
	cycleSpeedUGCost:1000,
	multiplierUGCost:[100,2500,100000,10000000,10000000000,100000000000000,10000000000000000000],
	cycleSpeedUG: function(){
		if(clicks >= upgrades.cycleSpeedUGCost){
			cycleSpeed -= 100;
			clicks -= upgrades.cycleSpeedUGCost;
			document.getElementById('cycleSpeed').innerHTML = commaThat(cycleSpeed);
			nextCost = Math.floor(upgrades.cycleSpeedUGCost*1000);
			upgrades.cycleSpeedUGCost = nextCost;
			document.getElementById('upgrades.cycleSpeedUGCost').innerHTML = commaThat(upgrades.cycleSpeedUGCost);
			clearInterval(ticking);
			ticking = setInterval(function(){doTick();}, cycleSpeed);
		}
	},
	multiplierUG: function(multiplierNumber){
		if(clicks>= upgrades.multiplierUGCost[multiplierNumber]){
			multiplier[multiplierNumber]*=2;
			clicks -= upgrades.multiplierUGCost[multiplierNumber];
			nextCost = Math.floor(upgrades.multiplierUGCost[multiplierNumber]*1000);
			upgrades.multiplierUGCost[multiplierNumber] = nextCost;
			document.getElementById('upgrades.multiplierUGCost' + (multiplierNumber + 1)).innerHTML = commaThat(upgrades.multiplierUGCost[multiplierNumber]);
			document.getElementById('multiplier' + (multiplierNumber + 1)).innerHTML = commaThat(multiplier[multiplierNumber]);
		}
	}
};

function addClicks(number){
	clicks += number;
    document.getElementById("clicks").innerHTML = commaThat(clicks);
}

function buyClicker(clickerNumber){
	 var clickerCost = nextCostClicker[clickerNumber];
	 if (clicks >= clickerCost){
		 clickers[clickerNumber]++;
		 clickersBought[clickerNumber]++;
		 clicks -= clickerCost;
		 
		 document.getElementById('clicker'+(clickerNumber+1)).innerHTML = commaThat(clickers[clickerNumber]);
		 document.getElementById('clicks').innerHTML = commaThat(clicks);
		 
		 nextCostClicker[clickerNumber] = Math.floor(OGCost[clickerNumber] * Math.pow(1.15,clickersBought[clickerNumber]));
	 	 document.getElementById('nextCostClicker'+(clickerNumber+1)).innerHTML = commaThat(nextCostClicker[clickerNumber]);
	 }
}
function reloadPage(){
	loadGame();
}
function doTick(){
	var i;
	for(i = clickers.length - 2; i >= 0; i--){
		clickers[i] += clickers[i + 1] * multiplier[i];
		document.getElementById('clicker' + (i + 1)).innerHTML = commaThat(clickers[i]);
	}
	addClicks(clickers[0]*multiplier[0]);
}
function saveGame(){
	var save={
		clicks:clicks,
		cycleSpeed:cycleSpeed,
		multiplier:multiplier,
		clickers:clickers,
		clickersBought:clickersBought,
		nextCostClicker:nextCostClicker,
		cycleSpeedCost:upgrades.cycleSpeedUGCost,
		multiplierCost:upgrades.multiplierUGCost
	};
	localStorage.setItem("save",JSON.stringify(save));
}
function loadGame(){
	var savegame = JSON.parse(localStorage.getItem("save"));
	if (typeof savegame.clicks !== "undefined"){ clicks = savegame.clicks;}
	if (typeof savegame.cycleSpeed !== "undefined"){ cycleSpeed = savegame.cycleSpeed;}
	if (typeof savegame.multiplier !== "undefined"){ multiplier = savegame.multiplier;}
	if (typeof savegame.clickers !== "undefined"){ clickers = savegame.clickers;}
	if (typeof savegame.clickersBought !== "undefined"){ clickersBought = savegame.clickersBought;}
	if (typeof savegame.nextCostClicker !== "undefined"){ nextCostClicker = savegame.nextCostClicker;}
	if (typeof savegame.cycleSpeedCost !== "undefined"){ upgrades.cycleSpeedUGCost = savegame.cycleSpeedCost;}
	if (typeof savegame.multiplierCost !== "undefined"){ upgrades.multiplierUGCost = savegame.multiplierCost;}
	sync();
}
function sync(){
	var i;
	document.getElementById("clicks").innerHTML = commaThat(clicks);
	document.getElementById('cycleSpeed').innerHTML = commaThat(cycleSpeed);
	document.getElementById('upgrades.cycleSpeedUGCost').innerHTML = commaThat(upgrades.cycleSpeedUGCost);
	for(i = 0; i < clickers.length; i++){
		document.getElementById('multiplier' + (i + 1)).innerHTML = commaThat(multiplier[i]);
		document.getElementById('clicker' + (i + 1)).innerHTML = commaThat(clickers[i]);
		document.getElementById('nextCostClicker' + (i + 1)).innerHTML = commaThat(nextCostClicker[i]);
		document.getElementById('upgrades.multiplierUGCost' + (i + 1)).innerHTML = commaThat(upgrades.multiplierUGCost[i]);
	}
}

function commaThat(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}