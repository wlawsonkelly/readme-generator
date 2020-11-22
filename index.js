const inquirer = require("inquirer");
const fs = require("fs");
const utils = require("utils");
const generate = require('./generateMarkdown');
const colors = require("colors");

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title'.bgRed,
    },
    {
      type: 'input',
      message: "Enter a description?",
      name: 'description'.bgWhite,
    },
      {
        type: 'list',
        message: "Pick a license?",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
        name: 'license'.bgGreen,
      },
      {
        type: 'input',
        message: 'What is your github username?',
        name: 'username'.bgBlue,
      },
      {
        type: 'input',
        message: 'What is your email?',
        name: 'email'.bgCyan,
      },
      {
        type: 'input',
        message: 'What commands should be run to use your project?',
        default: 'npm i',
        name: 'instals'.bgBlue,
      },
      {
        type: 'input',
        message: 'What commands should run to run tests',
        default: 'npm test',
        name: 'tests'.bgBlue,
      },
      {
        type: 'input',
        message: 'What should the user know about using the repo?',
        name: 'usage'.bgRed,
      },
      {
        type: 'input',
        message: 'What should the user know about contributing to the repo?',
        name: 'contribute'.bgRed,
      },
      
  ])
  .then((response) =>
    fs.appendFile('readme.md', generate(response), (err) =>
  err ? console.error(err) : console.log('Commit logged!')
    )
);
 