// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './generateMarkdown.js';

// TODO: Create an array of questions for user input
// questions for user inputt
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'what is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'provide a short description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'what are the installation instructions?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'how do you use this application?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'how can others contribute to this project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'how can the application be tested?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'choose a license for your application:',
      choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'enter your email address:',
    }
  ];  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();