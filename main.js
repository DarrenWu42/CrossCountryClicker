var clicks = 0;
var cycleSpeed = 1000;
var nextCost = 0;
var multiplier = [1,1,1,1,1,1,1];
var clickers = [0,0,0,0,0,0,0];
var clickersBought = [0,0,0,0,0,0,0];
var nextCostClicker = [10,250,10000,1000000,1000000000,10000000000000,1000000000000000000];

var clicker1 = 0;
var nextCostClicker1 = 10;
var clicker1Bought = 0;

var clicker2 = 0;
var nextCostClicker2 = 250;
var clicker2Bought = 0;

var clicker3 = 0;
var nextCostClicker3 = 10000;
var clicker3Bought = 0;

var clicker4 = 0;
var nextCostClicker4 = 1000000;
var clicker4Bought = 0;

var clicker5 = 0;
var nextCostClicker5 = 1000000000;
var clicker5Bought = 0;

var clicker6 = 0;
var nextCostClicker6 = 10000000000000;
var clicker6Bought = 0;

var clicker7 = 0;
var nextCostClicker7 = 1000000000000000000;
var clicker7Bought = 0;

var upgrades ={ 
	cycleSpeedUGCost:1000,
	multiplierUGCost:[100,2500,100000,10000000,10000000000,100000000000000,10000000000000000000],
	cycleSpeedUG: function(){
		if(clicks >= upgrades.cycleSpeedUGCost){
			cycleSpeed -= 100;
			document.getElementById('cycleSpeed').innerHTML = cycleSpeed;
			nextCost = Math.floor(upgrades.cycleSpeedUGCost*1000);
			upgrades.cycleSpeedUGCost = nextCost;
			document.getElementById('upgrades.cycleSpeedUGCost').innerHTML = upgrades.cycleSpeedUGCost;
		}
	},
	multiplierUG: function(multiplierNumber){
		if(clicks>= upgrades.multiplierUGCost[multiplierNumber]){
			multiplier[multiplierNumber]*=2;
			nextCost = Math.floor(upgrades.multiplierUGCost[multiplierNumber]*1000);
			upgrades.multiplierUGCost[multiplierNumber] = nextCost;
			document.getElementById('upgrades.multiplier'+multiplierNumber).innerHTML = upgrades.multiplierUGCost[multiplierNumber];
		}
	}
};

function addClicks(number){
	clicks += number;
    document.getElementById("clicks").innerHTML = clicks;
}

function buyClicker(clickerNumber){
	 var clickerCost = nextCostClickers[clickerNumber];
	 if (clicks >= clickerCost){
		 clickers[clickerNumber]++;
		 clickersBought[clickerNumber]++;
		 clicks = clicks-clickerCost;
		 document.getElementById('clicker'+(clickerNumber+1)).innerHTML = clickers[clickerNumber];
		 document.getElementById('clicks').innerHTML = clicks;
		 nextCostClicker[clickerNumber] = Math.floor(10 * Math.pow(1.15,clickersBought[clickerNumber]));
	 	 document.getElementById('nextCostClicker').innerHTML = nextCostClicker[clickerNumber];
	 }
}

function buyClicker1(){
	 var clickerCost = nextCostClicker1;
	 if (clicks >= clickerCost){
		 clicker1++;
		 clicker1Bought++;
		 clicks = clicks-clickerCost;
		 document.getElementById('clicker1').innerHTML = clicker1;
		 document.getElementById('clicks').innerHTML = clicks;
		 nextCostClicker1 = Math.floor(10 * Math.pow(1.15,clicker1Bought));
	 	 document.getElementById('nextCostClicker1').innerHTML = nextCostClicker1;
	 }
}
function buyClicker2(){
	var clicker2Cost = nextCostClicker2;
	if (clicks >= clicker2Cost){
		clicker2++;
		clicker2Bought++;
		clicks = clicks-clicker2Cost;
		document.getElementById('clicker2').innerHTML = clicker2;
		document.getElementById('clicks').innerHTML = clicks;
		nextCostClicker2 = Math.floor(250 * Math.pow(1.15,clicker2Bought));
	 	document.getElementById('nextCostClicker2').innerHTML = nextCostClicker2;
	}
}
function buyClicker3(){
	var clicker3Cost = nextCostClicker3;
	if (clicks >= clicker3Cost){
		clicker3++;
		clicker3Bought++;
		clicks = clicks-clicker3Cost;
		document.getElementById('clicker3').innerHTML = clicker3;
		document.getElementById('clicks').innerHTML = clicks;
		nextCostClicker3 = Math.floor(10000 * Math.pow(1.15,clicker3Bought));
	 	document.getElementById('nextCostClicker3').innerHTML = nextCostClicker3;
	}
}
function buyClicker4(){
	var clicker4Cost = nextCostClicker4;
	if (clicks >= clicker4Cost){
		clicker4++;
		clicker4Bought++;
		clicks = clicks - clicker4Cost;
		document.getElementById('clicker4').innerHTML = clicker4;
		document.getElementById('clicks').innerHTML = clicks;
		nextCostClicker4 = Math.floor(1000000 * Math.pow(1.15,clicker4Bought));
	 	document.getElementById('nextCostClicker4').innerHTML = nextCostClicker4;
	}
}
function buyClicker5(){
	var clicker5Cost = nextCostClicker5;
	if (clicks >= clicker5Cost){
		clicker5++;
		clicker5Bought++;
		clicks = clicks - clicker5Cost;
		document.getElementById('clicker5').innerHTML = clicker5;
		document.getElementById('clicks').innerHTML = clicks;
		nextCostClicker5 = Math.floor(1000000000 * Math.pow(1.15,clicker5Bought));
	 	document.getElementById('nextCostClicker5').innerHTML = nextCostClicker5;
	}
}
function buyClicker6(){
	var clicker6Cost = nextCostClicker6;
	if (clicks >= clicker6Cost){
		clicker6++;
		clicker6Bought++;
		clicks = clicks - clicker6Cost;
		document.getElementById('clicker6').innerHTML = clicker6;
		document.getElementById('clicks').innerHTML = clicks;
		nextCostClicker6 = Math.floor(10000000000000 * Math.pow(1.15,clicker6Bought));
	 	document.getElementById('nextCostClicker6').innerHTML = nextCostClicker6;
	}
}
function buyClicker7(){
	var clicker7Cost = nextCostClicker7;
	if (clicks >= clicker7Cost){
		clicker7++;
		clicker7Bought++;
		clicks = clicks - clicker7Cost;
		document.getElementById('clicker7').innerHTML = clicker7;
		document.getElementById('clicks').innerHTML = clicks;
		nextCostClicker7 = Math.floor(1000000000000000000 * Math.pow(1.15,clicker7Bought));
	 	document.getElementById('nextCostClicker7').innerHTML = nextCostClicker7;
	}
}

function reloadPage(){
	document.getElementById('clicks').innerHTML = clicks;
	document.getElementById('clicker1').innerHTML = clicker1;
	document.getElementById('clicker2').innerHTML = clicker2;
	document.getElementById('clicker3').innerHTML = clicker3;
	document.getElementById('clicker4').innerHTML = clicker4;
	document.getElementById('clicker5').innerHTML = clicker5;
	document.getElementById('clicker6').innerHTML = clicker6;
	document.getElementById('clicker7').innerHTML = clicker7;
	document.getElementById('cycleSpeed').innerHTML = cycleSpeed;
	
	nextCostClicker1 = Math.floor(10 * Math.pow(1.15,clicker1Bought));
	document.getElementById('nextCostClicker1').innerHTML = nextCostClicker1;
	
	nextCostClicker2 = Math.floor(250 * Math.pow(1.15,clicker2Bought));
	document.getElementById('nextCostClicker2').innerHTML = nextCostClicker2;
	
	nextCostClicker3 = Math.floor(10000 * Math.pow(1.15,clicker3Bought));
	document.getElementById('nextCostClicker3').innerHTML = nextCostClicker3;
	
	nextCostClicker4 = Math.floor(1000000 * Math.pow(1.15,clicker4Bought));
	document.getElementById('nextCostClicker4').innerHTML = nextCostClicker4;
	
	nextCostClicker5 = Math.floor(1000000000 * Math.pow(1.15,clicker5Bought));
	document.getElementById('nextCostClicker5').innerHTML = nextCostClicker5;
	
	nextCostClicker6 = Math.floor(10000000000000 * Math.pow(1.15,clicker6Bought));
	document.getElementById('nextCostClicker6').innerHTML = nextCostClicker6;
	
	nextCostClicker7 = Math.floor(1000000000000000000 * Math.pow(1.15,clicker7Bought));
	document.getElementById('nextCostClicker7').innerHTML = nextCostClicker7;
}

window.setInterval(function(){
	clicker6 += clicker7*multiplier[6];
	document.getElementById('clicker6').innerHTML = clicker6;
	clicker5 += clicker6*multiplier[5];
	document.getElementById('clicker5').innerHTML = clicker5;
	clicker4 += clicker5*multiplier[4];
	document.getElementById('clicker4').innerHTML = clicker4;
	clicker3 += clicker4*multiplier[3];
	document.getElementById('clicker3').innerHTML = clicker3;
	clicker2 += clicker3*multiplier[2];
	document.getElementById('clicker2').innerHTML = clicker2;
	clicker1 += clicker2*multiplier[1];
	document.getElementById('clicker1').innerHTML = clicker1;
	addClicks(clicker1*multiplier[0]);
	move();
	function move() {
		var elem = document.getElementById("myBar");   
		var width = 0;
		var id = setInterval(frame, (cycleSpeed/1000));
		function frame() {
			if (width === 100) {
				clearInterval(id);
			} else {
				width++; 
				elem.style.width = width + '%'; 
			}
		}
	}
}, cycleSpeed);
window.setInterval(function(){
	document.getElementByID("tenQuick").play();
	//add stuff for clicking 10 times
}, Math.floor((Math.random()*1500000)+300000));