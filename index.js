// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// Create an array of names
const names = [ 'Project title:',
                'Description:',
                'Project installation:',
	        'Project usage information:',
		'Project contributing:',
		'Project tests:' ];

// TODO: Create an array of questions for user input
const questions = [ 'What is your project title?',
                    'What is project description?',
                    'What is project installation?',
	            'What is project usage information?',
		    'What is project contributing?',
		    'What is project tests?' ];

"Array index
let index = 0;

//Get array names
function getArrayNames(arrayNames) {

	//return name
	return arrayNames[index];
}

//Get array questions
function getArrayQuestions(arrayQuestions) {

	//return question
	return arrayQuestions[index];
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
}


//WHEN I enter my project title
//THEN this is displayed as the title of the README
//WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
//THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
function inquirerPrompt() {

	inquirer
	  .prompt([
    	{
	      type: 'input',
	      name: getArrayNames(names)),
	      message: getArrayQuestions(questions)),
	    },
	  ])

	//.then( (answers) => {
	//    const writeToFile = writeToFile('README.MD', answers);
	//  });


// TODO: Create a function to initialize app
function init() {

	//Loop through each question
	questions.forEach(inquirerPrompt);

	//Increase index
	index += 1;
}

// Function call to initialize app
init();




