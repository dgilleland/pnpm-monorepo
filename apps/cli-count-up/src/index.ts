#!/usr/bin/env node
import { Command } from 'commander';
import inquirer from 'inquirer';
import { countUp } from 'count-up';

const program = new Command();

async function main() {
  program
    .name('cli-count-up')
    .description('Display numbers as words')
    .version('0.1.0');

  program.parse(process.argv);

  const { number } = await inquirer.prompt([
    {
      type: 'input',
      name: 'number',
      message: 'Enter a positive number up to 100:',
      validate: (input: string) => {
        const n = Number(input);
        if (!Number.isInteger(n) || n < 1 || n > 100) {
          return 'Please enter a whole number between 1 and 100.';
        }
        return true;
      },
      filter: (input: string) => Number(input),
    },
  ]);

  const { lineMode } = await inquirer.prompt([
    {
      type: 'list',
      name: 'lineMode',
      message: 'How do you want the numbers displayed?',
      choices: [
        { name: 'All on one line', value: 'one' },
        { name: 'Each on a separate line', value: 'multi' },
      ],
      default: 'one',
    },
  ]);

  const words = countUp(number);
  if (lineMode === 'one') {
    console.log(words.join(', '));
  } else {
  words.forEach((w: string) => console.log(w));
  }
}

main();
