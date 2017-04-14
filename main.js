var clicks = 0;
var cycleSpeed = 1000;
var nextCost = 0;
var multiplier = [1,1,1,1,1,1,1];
var ticking = setInterval(function(){doTick();}, cycleSpeed);

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
			document.getElementById('cycleSpeed').innerHTML = cycleSpeed;
			nextCost = Math.floor(upgrades.cycleSpeedUGCost*1000);
			upgrades.cycleSpeedUGCost = nextCost;
			document.getElementById('upgrades.cycleSpeedUGCost').innerHTML = upgrades.cycleSpeedUGCost;
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
			document.getElementById('upgrades.multiplierUGCost' + (multiplierNumber + 1)).innerHTML = upgrades.multiplierUGCost[multiplierNumber];
			document.getElementById('multiplier' + (multiplierNumber + 1)).innerHTML = multiplier[multiplierNumber];
		}
	}
};

function addClicks(number){
	clicks += number;
    document.getElementById("clicks").innerHTML = clicks;
}

function buyClicker(clickerNumber){
	 var clickerCost = nextCostClicker[clickerNumber];
	 if (clicks >= clickerCost){
		 clickers[clickerNumber]++;
		 clickersBought[clickerNumber]++;
		 clicks -= clickerCost;
		 
		 document.getElementById('clicker'+(clickerNumber+1)).innerHTML = clickers[clickerNumber];
		 document.getElementById('clicks').innerHTML = clicks;
		 
		 nextCostClicker[clickerNumber] = Math.floor(OGCost[clickerNumber] * Math.pow(1.15,clickersBought[clickerNumber]));
	 	 document.getElementById('nextCostClicker'+(clickerNumber+1)).innerHTML = nextCostClicker[clickerNumber];
	 }
}
function reloadPage(){
	var i;
	for(i = 0; i < clickers.length; i++){
		document.getElementById('clicker' + (i + 1)).innerHTML = clickers[i];
		document.getElementById('multiplier' + (i + 1)).innerHTML = multiplier[i];
		nextCostClicker[i] = OGCost[i];
		document.getElementById('nextCostClicker' + (i + 1)).innerHTML = nextCostClicker [i];
	}

	document.getElementById('clicks').innerHTML = clicks;
	document.getElementById('cycleSpeed').innerHTML = cycleSpeed;
}
function doTick(){
	var i;
	for(i = clickers.length - 2; i >= 0; i--){
		clickers[i] += clickers[i + 1] * multiplier[i];
		document.getElementById('clicker' + (i + 1)).innerHTML = clickers[i];
	}
	addClicks(clickers[0]*multiplier[0]);
}

/*
window.setInterval(function(){
	document.getElementByID("tenQuick").play();
	//add stuff for clicking 10 times
}, Math.floor((Math.random()*1500000)+300000));
*/