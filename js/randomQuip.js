/*=========================================================================
	Random quip generator
=========================================================================*/

window.onload=function randomQuip() {
	var quips =['A guy who probably spends too much time watching bad sitcoms on Netflix',
							'A guy who cares too much about network reality television',
							'A guy who drinks too much caffeine for his own good',
							'A guy who had to look up how to create this random quip generator on StackExchange',
							'A guy who once got lost in an admittedly large bathroom'];
	var randomNum = Math.floor(Math.random() * quips.length);
	document.getElementById('randomQuip').innerHTML = quips[randomNum];
}
