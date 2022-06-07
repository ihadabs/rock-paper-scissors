import { Chose } from './choose-hwm';

function sa7e7(chose1: Chose, chose2: Chose, win: Chose, lose: Chose): 0 | 1 | 2 {
	if (chose1 === win && chose2 === lose) {
		return 1;
	}
	if (chose2 === win && chose1 === lose) {
		return 2;
	}

	return 0;
}

export function compareHmw(chose1: Chose, chose2: Chose): 0 | 1 | 2 {
	if (chose1 === chose2) return 0;

	/// h, w, m

	return (
		[
			sa7e7(chose1, chose2, 'h', 'm'),
			sa7e7(chose1, chose2, 'm', 'w'),
			sa7e7(chose1, chose2, 'w', 'h'),
		].find((number) => number !== 0) ?? 0
	);
}
