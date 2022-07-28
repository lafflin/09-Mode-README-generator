// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
console.log("online");
// TODO: Create an array of questions for user input
const questions = [
	{
		type: "input",
		name: "title",
		message: "What is the title of the project?",
	},
	{
		type: "input",
		name: "description",
		message: "Describe the project",
	},
	{
		type: "input",
		name: "installation",
		message: "How to install the project",
	},
	{
		type: "input",
		name: "usage",
		message: "How to use the project",
	},
	{
		type: "input",
		name: "contribution",
		message: "How to contribute to the project",
	},
	{
		type: "input",
		name: "test",
		message: "How to test the project",
	},
	{
		type: "input",
		name: "questions",
		message: "Preamble for the questions section",
	},
	{
		type: "input",
		name: "github",
		message: "Enter your GitHub username",
	},
	{
		type: "input",
		name: "email",
		message: "Enter your Email address",
	},
	{
		type: "list",
		name: "license",
		message: "What license does this project use?",
		choices: ["MIT", "GNU"],
		filter(val) {
			return val;
		},
	},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
	return inquirer
		.prompt(questions)
		.then((data) => {
			const mark = generateMarkdown.generateMarkdown(data);
			console.log(mark);
			return data;
		})
		.catch((error) => {
			console.error(error);
		});
}

// Function call to initialize app
init();

/*
need to make the readme actually generate to the console
-then need to make the read me generate to a file properly
need a video preview + screenshots(if needed) in the readme
*/
