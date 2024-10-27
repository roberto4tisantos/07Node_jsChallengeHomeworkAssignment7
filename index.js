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
	
	//Array index
	let iMessage = -1;
	let iName = -1;	

//Get array names
function getArrayNames(iName) {
	// console.log(`arrayName: ${names[idx]}`);	
	// iName += 1;	
	//return name
	return names[iName];
}

//Get array questions
function getArrayQuestions(iMessage) {
	// console.log(`arrayQuestion: ${questions[idx]}`);
	// iMessage += 1;
	//return question
	return questions[iMessage];
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    // fs.writeFile('index.html', htmlPageContent, (err) =>
    //   err ? console.log(err) : console.log('Successfully created index.html!')
    // );
}

//WHEN I enter my project title
//THEN this is displayed as the title of the README
//WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
//THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
async function inquirerPrompt() {

	// let question = getArrayQuestions();
	// let answer = prompt(question);

	// // let question = prompt(getArrayQuestions(questions));
	// let name = getArrayNames();
	// // console.log(`inquirerPrompt.name: ${name}`);
	// let qust = getArrayQuestions();  
	// // console.log(`inquirerPrompt.question: ${qust}`);

	//Array index
	iMessage ++;
	iName ++;

	// let answer = await inquirer.prompt([	
	// inquirer.prompt([		
	let answer = inquirer
		.prompt([		
    	{
	      type: 'input',
	      name: getArrayNames(iName),
	      message: getArrayQuestions(iMessage),
		  validate: (input) => input ? true : 'answer cannot be empty.',		  		  
	    }
		.then( (answer) => {
			//const writeToFile = writeToFile('README.MD', answers);
			console.log('answer:', answer);	 
		})		
	  ])

	// console.log(`answer: ${answers}`);



	// const answers = await inquirer.prompt(questions);
	// console.log('Repository Information:', answers);	 

	//Increase index
	// console.log(`Index of Array: ${idx}`)	
	

}


// TODO: Create a function to initialize app
function init() {
	//Loop through each question
	questions.forEach(inquirerPrompt);
}

// Function call to initialize app
init();




