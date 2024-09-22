var cPoint = document.querySelector('.cPoint');
var pPoint = document.querySelector('.pPoint');
var cChoice = document.querySelector('.cChoice');
var pChoice = document.querySelector('.pChoice');
var winner = document.querySelector('.winner');
var computerChoice;
var cCount=0, pCount=0;
console.log(cPoint)
console.log(pPoint)
console.log(cChoice)
console.log(pChoice)
console.log(winner)
function play(playerChoice){
	pChoice.innerText="Player choice:"+playerChoice
	// computer -> 0,1,2 -> 0->rock,1->paper,2->scissors
	var random = Math.floor(Math.random()*3);
	console.log(random)
	if(random==0){
		cChoice.innerText="Computer choice:rock"
		computerChoice='rock'
	}else if(random==1){
		cChoice.innerText="Computer choice:paper"
		computerChoice='paper'
	}else{
		cChoice.innerText='Computer choice:scissors'
		computerChoice='scissors'
	} 
	if(playerChoice=="rock" && computerChoice=='scissors'){
		winner.innerText='Winner:Player';
		pCount++
	}else if(playerChoice=="scissors" && computerChoice=='paper'){
		winner.innerText='Winner:Player';
		pCount++
	}else if(playerChoice=="paper" && computerChoice=='rock'){
		winner.innerText='Winner:Player';
		pCount++
	}else if(playerChoice=="paper" && computerChoice=='paper' || playerChoice=="rock" && computerChoice=='rock' || playerChoice=="scissors" && computerChoice=='scissors'){
		winner.innerText='Tie'
	}else{
		winner.innerText='Winner:Computer';
		// ++ 1-eer nemegduuleh, -- -> 1-eer buuruulna
		cCount++
	}
	cPoint.innerText='Computer:'+cCount
	pPoint.innerText='Player:'+pCount
}
function restart(){
	cCount=0;
	pCount=0;
	cPoint.innerText='Computer:0'
	pPoint.innerText='Player:0'
	cChoice.innerText='Computer choice:'
	pChoice.innerText='Player choice:'
	winner.innerText='Winner:'
}