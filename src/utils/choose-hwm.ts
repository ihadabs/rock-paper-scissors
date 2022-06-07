import { prompt } from 'inquirer';

export type Chose = 'h' | 'w' | 'm';

async function askHwm(name: string): Promise<string> {
	const result = await prompt([
		{
			type: 'password',
			message: `${name} choose h or w or m.`,
			name: 'chose',
		},
	]);

	return (result.chose as string).toLowerCase();
}

export async function chooseHwm(name: string): Promise<Chose> {
	while (true) {
		let chose = await askHwm(name);
		if (['h', 'w', 'm'].includes(chose)) {
			return chose as Chose;
		}
	}
}
