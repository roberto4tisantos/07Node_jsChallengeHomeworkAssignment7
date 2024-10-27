// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [ 'What is your project title?',
					'What is project description?',
					'What is project installation?',
					'What is project usage information?',
					'What is project contributing?',
					'What is project tests?' ];

// Create an array of names
const names = [ 'Project title:',
                'Description:',
                'Project installation:',
	        	'Project usage information:',
				'Project contributing:',
				'Project tests:' ];

//Array index
let idx = 0;

//Get array names
function getArrayNames() {
	// console.log(`arrayName: ${names[idx]}`);	
	//return name
	return names[idx];
}

//Get array questions
function getArrayQuestions() {
	// console.log(`arrayQuestion: ${questions[idx]}`);
	//return question
	return questions[idx];
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

	let question = prompt(`${getArrayQuestions()}`);

	// // let question = prompt(getArrayQuestions(questions));
	// let name = getArrayNames();
	// // console.log(`inquirerPrompt.name: ${name}`);
	// let qust = getArrayQuestions();  
	// // console.log(`inquirerPrompt.question: ${qust}`);

	let answers = await inquirer.prompt([	
	// inquirer.prompt([		
    	{
	      type: 'input',
	      name: getArrayNames(),
	      message: question,
		  validate: (input) => input ? true : 'answer cannot be empty.',		  		  
	    }
	  ])

	// console.log(`answer: ${answers}`);

	// .then( (answers) => {
	// //    const writeToFile = writeToFile('README.MD', answers);
	// 	console.log('answer:', answers);	 
	//  });

	// const answers = await inquirer.prompt(questions);
	// console.log('Repository Information:', answers);	 

	//Increase index
	// console.log(`Index of Array: ${idx}`)	
	idx ++;	

}


// TODO: Create a function to initialize app
function init() {
	//Loop through each question
	questions.forEach(inquirerPrompt());
}

// Function call to initialize app
init();




