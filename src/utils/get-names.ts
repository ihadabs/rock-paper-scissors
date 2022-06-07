import { prompt } from 'inquirer';

export async function getNames(): Promise<string[]> {
	const result = await prompt([
		{
			type: 'input',
			message: 'Whats 1️⃣  player name?',
			name: 'name1',
		},
		{
			type: 'input',
			message: 'Whats 2️⃣  player name?',
			name: 'name2',
		},
	]);

	return [result.name1, result.name2];
}
