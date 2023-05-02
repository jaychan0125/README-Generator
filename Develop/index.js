// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = inquirer
  .prompt([
    {
      type: "input",
      message: "What is your project title?",
      name: "title",
    },
    {
      type: "editor",
      message: "Please write a description about your project.",
      name: "description",
    },
    {
      type: "input",
      message: "Please let the user know if they need to install anything to use the application.",
      name: "installation",
    },
    {
      type: "input",
      message: "How would you describe the usage of your application?",
      name: "usage",
    },
    {
      type: "input",
      message: "What are the project's contributors' gitHub username?",
      name: "contributor",
    },
    {
      type: "input",
      message: "How would you like to test the project?",
      name: "test",
    },
    {
      type: "list",
      message: "Which license would you like to use for your project?",
      choices: ['MIT', 'Apache 2.0', 'GNU GPL v3', 'none'],
      name: "license",
    },
  ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`${fileName}`, data, (err) => {
    err ? console.error(err) : console.log(`${fileName} has been made!`)
  });
}


// TODO: Create a function to initialize app
function init() {
  questions
    .then((answers) => {
      const markdown = generateMarkdown(answers);
      writeToFile('qREADME.md', markdown);
    })
    .catch((err) => {
      console.error(err)
    });
}

// Function call to initialize app
init();
