// 7jarah - Warqah - Meqass

import { chooseHwm, Chose } from './utils/choose-hwm';
import { compareHmw } from './utils/compare-hwm';
import { getNames } from './utils/get-names';
import { getRandomInt } from './utils/get-random-number';

async function runGame() {
	// 1- Ask for two players names
	// 2- Save these names in variables
	const [name1, name2] = await getNames();

	// 3- Chose randomly player 1 or 2
	const randomNumber = getRandomInt(1, 2);

	// 4- Ask player to chose h || w || m;
	// 5- Ask the other player to chose h || w || m;
	let chose1: Chose, chose2: Chose;

	if (randomNumber === 1) {
		chose1 = await chooseHwm(name1);
		chose2 = await chooseHwm(name2);
	} else {
		chose2 = await chooseHwm(name2);
		chose1 = await chooseHwm(name1);
	}

	// 6- Compare values and declare a winner
	console.log(`${name1} ${chose1} vs ${name2} ${chose2}`);

	const result = compareHmw(chose1, chose2);
	if (result === 0) {
		console.log('No one won.');
	} else if (result === 1) {
		console.log(`${name1} won 🎉!`);
	} else if (result === 2) {
		console.log(`${name2} won 🎉!`);
	}
}

runGame();
