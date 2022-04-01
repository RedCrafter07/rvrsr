#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';

const log = console.log;

log(chalk.yellowBright('Press Ctrl+C at any time to exit.'));

(async () => {
	while (true) {
		const q = await inquirer.prompt([
			{
				type: 'input',
				message: 'Text to reverse:',
				name: 'reverse',
			},
		]);

		const input: string = q.reverse;
		const letters = [...input];
		let out = '';
		for (var i = letters.length - 1; i >= 0; i--) {
			out += letters[i];
		}

		log(out);
	}
})();
