'use strict';
var inquirer = require('inquirer');
var fs = require("fs");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your application?",
      },
      {
        type: 'input',
        name: 'description',
        message: "Give a brief description of your application",
      },
      {
        type: 'input',
        name: 'install',
        message: "installation instructions",
      },
      {
        type: 'input',
        name: 'usage',
        message: "usage instructions",
      },
      {
        type: 'input',
        name: 'contributing',
        message: "contributing",
      },
      {
        type: 'input',
        name: 'tests',
        message: "tests",
      },
      {
          type: "list",
          name: "license",
          message: "License",
          choices: ["MIT", "Apache 2.0", "Mozilla 2.0","BSD 3-Clause","BSD 2-Clause","GNU General Public License"]
      },
      //validate that email contains an @ and a .
      {
          type: "input",
          name: "email",
          message: "enter your email address",
          validate: function(text){
              if(text.split("@").length <2 || text.split(".").length <2 ){
                  return "please enter valid email";
              }
              return true
          },
      },
      {
        type: 'input',
        name: 'github',
        message: "enter github username",
      },

     
    ];

// function to write README file
// function writeToFile(fileName, data) {
// }
inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
let readMeContents=`
## ${answers.title}

# ${answers.description}

Table of contents:
  * Installation Instructions
  * Usage Instructions
  * Contributing
  * Tests
  * Contact info

Installation instructions: ${answers.installation}

Usage: ${answers.usage}

Contributing: ${answers.contributing}

Tests: ${answers.tests}

Contact: ${answers.email}
${answers.github}
`
fs.writeFile("READMEtest.md", readMeContents, function(err) {

if (err) {
  return console.log(err);
}

console.log("Success!");

    });
  });
// function to initialize program
function init() {

}

// function call to initialize program
init();



