// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = ['What is your project title?',
                   'What is project description?',
                   'What is project installation?',
	           'What is project usage information?',
		   'What is project contributing?',
		   'What is project tests?' ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();

//WHEN I enter my project title
//THEN this is displayed as the title of the README
//WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
//THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
inquirer
  .prompt([
    {
      type: 'input',
      name: 'Project_Title',
      message: 'What is your project title?',
    },
    {
      type: 'input',
      name: 'Description',
      message: 'What is project description:',
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'What is project installation?',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'What is project usage information?',
    },
    {
      type: 'input',
      name: 'Contributing',
      message: 'What is project contributing?',
    },
    {
      type: 'input',
      name: 'Tests',
      message: 'What is project tests?',
    },
  ])

.then( (answers) => {
    const writeToFile = writeToFile('README.MD', answers);
  });


