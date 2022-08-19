// packages/requires for the app to work
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// questions for user to answers to generate the readme
const questions = [
	{
		type: "input",
		name: "title",
		message: "What is the title of your project?",
	},
	{
		type: "input",
		name: "description",
		message: "Describe your project",
	},
	{
		type: "input",
		name: "installation",
		message: "How to install your project",
	},
	{
		type: "input",
		name: "usage",
		message: "How to use your project",
	},
	{
		type: "input",
		name: "contribution",
		message: "How to contribute to your project",
	},
	{
		type: "input",
		name: "test",
		message: "How to test your project",
	},
	{
		type: "input",
		name: "github",
		message: "Enter your GitHub username (for contact purposes)",
	},
	{
		type: "input",
		name: "email",
		message: "Enter your Email address (for contact purposes)",
	},
	{
		type: "list",
		name: "license",
		message: "What license does this project use?",
		choices: ["MIT", "GPL3.0", "APACHE2.0", "None"],
		// filter(val) {
		// 	return val;
		// },
	},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	fs.writeFile(fileName, mark, (err) => {
		if (err) {
			console.error(err);
		}
	});
}

// TODO: Create a function to initialize app
function init() {
	return inquirer
		.prompt(questions)
		.then((data) => {
			// console.log(data);
			mark = generateMarkdown(data);
			// console.log(mark);
			writeToFile("exampleReadME.md", mark);
			return data;
		})
		.catch((error) => {
			console.error(error);
		});
}

// init app
init();

/*
need to make the readme actually generate to the console
-then need to make the read me generate to a file properly
need a video preview + screenshots(if needed) in the readme
*/
