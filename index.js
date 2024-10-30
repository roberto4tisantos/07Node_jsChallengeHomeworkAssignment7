// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
      {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the project description?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the project installation instructions?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is the project usage information?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What is the project license?',
        choices: ['None', 'MIT'],
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'What are the project contribution guidelines?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What are the project test instructions?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is the project GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the project email address?',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log('README.md generated successfully!');
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile('README.md', markdown);
      });
}

// Function call to initialize app
init();