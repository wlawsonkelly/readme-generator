const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./generateMarkdown');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: "Enter a description?",
      name: 'description',
    },
      {
        type: 'list',
        message: "Pick a license?",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
        name: 'license',
      },
      {
        type: 'input',
        message: 'What is your github username?',
        name: 'username',
      },
      {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What commands should be run to use your project?',
        default: 'npm i',
        name: 'instals',
      },
      {
        type: 'input',
        message: 'What commands should run to run tests',
        default: 'npm test',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'What should the user know about using the repo?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'What should the user know about contributing to the repo?',
        name: 'contribute',
      },
      
  ])
  .then((response) =>
    fs.writeFile('readme.md', generateMarkdown(response), (err) =>
  err ? console.error(err) : console.log('Commit logged!')
    )
);
 