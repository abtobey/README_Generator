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
      //the next two will open a text editor
      {
        type: 'editor',
        name: 'install',
        message: "installation instructions",
      },
      {
        type: 'editor',
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
//wait for answers, then write text file
inquirer.prompt(questions).then((answers) => {
// console.log(JSON.stringify(answers, null, '  '));
//replace spaces with underscores so link to image will work
let licenseString=answers.license.replace(" ", "_")
let readMeContents=
`![GitHub license](https://img.shields.io/badge/license-${licenseString}-blue.svg)

## ${answers.title}

# ${answers.description}

Table of contents:
  * [Installation Instructions](#installation-instructions)
  * [Usage Instructions](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Contact info](#contact-info)
---

## Installation instructions: 
${answers.install}

---

## Usage: 
${answers.usage}

---

## Contributing: 
${answers.contributing}

---

## Tests:
${answers.tests}

---

##License:

This project is covered under the ${answers.license} license.

---

## Questions: 
email: ${answers.email}
github: ${answers.github}
`

fs.writeFile("generatedREADME.md", readMeContents, function(err) {

if (err) {
  return console.log(err);
}

console.log("Success!");

    });
  });

