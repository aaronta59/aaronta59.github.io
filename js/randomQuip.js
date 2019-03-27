/*=========================================================================
	Random quip generator
=========================================================================*/

window.onload=function randomQuip() {
	var quips =['A guy who probably spends too much time watching bad sitcoms on Netflix',
							'A guy who cares too much about network reality television',
							'A guy who drinks too much caffeine for his own good',
							'A guy who had to look up how to create this random quip generator on StackExchange',
							'A guy who once got lost in an (admittedly large) bathroom',
							'A guy who doesn’t know as much about history as he thinks he does',
							'A guy who only pretends to be up-to-date on politics',
							'A guy who can play very many instruments, very mediocrely',
							'A guy who didn’t know how to properly tie his shoes until middle school',
							'A guy who once read the plot synopses of Black Mirror episodes so he didn’t have to watch them',
							'A guy who pronounces the name ’Sean’ wrong on a regular basis',
							'A guy who thought you needed a passport to fly to Hawaii because it was an island',
							'A guy who once broke a chair at Einstein’s Bagels by standing up too fast (it was an accident)',
							'A guy who had his identity stolen, but then returned because there wasn’t much worth taking',
							'A guy who lets online reviews influence his opinion on things too much',
							'A guy who spends a not-insignificant portion of his day looking at memes',
							'A guy who has taken a lot of language lessons with depressingly little to show for it',
							'A guy who always has too many tabs open on his browsers',
							'A guy who probably peaked after winning his 2nd grade spelling bee',
							'A guy who once lost his trunks in the middle of a swim meet',
							'A guy who flubbed a piano recital at the age of 8 and never really recovered after that'];
	var randomNum = Math.floor(Math.random() * quips.length);
	document.getElementById('randomQuip').innerHTML = quips[randomNum];
}
