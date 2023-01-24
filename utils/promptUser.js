/**
 * Filename:
 * 
 * Contents:
 * Using inquirer terminal prompts are displayed to question the user for information
 * required for README.  User will be taken through various steps where some
 * inputs are required and some are optional.
 * 
 * This file provides functionality not only to prompt user but to validate inputs
 * before creating README and saving to file.
 * 
 * 
 * Requires: 
 * Install of inquirer:
 *      npm install inquirer@^8.0.0
 * See https://github.com/SBoudrias/Inquirer.js#documentation
 * 
 * Additionally uses 
 * -  fs package built into node.js 
 * -- internal ./util/generateMarkdown.js
 * but no further npm installs are required for these.
 * 
 */



console.log(`promptUser loading...`);


/**------------------------------
 *    Packages required 
 * ------------------------------*/
 

const fs = require('fs');
const inquirer = require('inquirer');
const tools = require('../utils/generateMarkdown.js'); 


/* Default readme details */
const OUTPUT_FILEPATH="./output/";  
const OUTPUT_FILENAME="README.md";
/* const OUTPUT_FILEPATH="./"; */  // TODO: Change to this once tested



/**
 * array of questions for user
 * Title and desc are minimum requirements and should not be blank
 * TODO: Move to seperate file  readme_template.js
 */
const questions = [
    {
        name: 'user_name',
        message: 'Please enter your name.',
        type: 'input', 
        validate(answer) {
            if(!answer) {
                return "Please enter your name." // or type ? to escape?
            }
            return true
        }

    },
    {
        name: 'title',
       /*  message: 'Please enter your project title.', */
        type: 'input', 
        message(answers) {
            return `Hello ${answers.user_name}! Please enter your project title. ?`
        },
        validate(answer) {
            if(!answer) {
                return "Please enter a title for your project." // or type ? to escape?
            }
            return true
        }
    },
    {
        name: 'description',
        message: 'Please enter project description.',
        type: 'editor',
        validate(input_desc) {
            if(!input_desc) {
                return "Please enter a description for your project." 
            }
            return true
        },
        waitUserInput: true 
    },
    {
        name: 'link_to_deployed_app',
        message: 'If deployed, please give link to deployed app.',
        type: 'input'
    },
    {
        name: 'installation',
        message: 'Please enter installation instructions: a step by step description of how to get the dev environment running. ',
        type: 'editor',
        waitUserInput: true 
    },
    {
        name: 'usage',
        message: 'Please provide instructions and examples for use. Inlcude screens shots as needed. ',
        type: 'editor',
        waitUserInput: true 
    },
    {
        // What are the steps required to install your project? 
        // Provide a step-by-step description of how to get the development environment running.

        name: 'credits',
        message: 'Please list your collaborators, if any, with links to their GitHub profiles.  Any 3rd party assets? ',
        type: 'editor',
        waitUserInput: true 
    },
    {
        name: 'readme_path',
        message: `Please enter file path README has to be saved to.(Defaults to ${OUTPUT_FILEPATH})`,
        type: 'text',   // TODO: change to pluggin inqurier-file-tree-selection-prompt if poassible
       /*  default: '.' */
        default: OUTPUT_FILEPATH
    },    
    {
        name: 'license',
        message: 'Which license is this project licensed under?',
        type: 'checkbox',
        choices: [
           // note choices must use '-' for string seperator  - for img.shields.io images work
          'Academic_Free_3.0', 'Apache_2.0', 'Artistic-2.0', 'Boost-Software-1.0',
          'BSD 2-clause-Simplified','BSD-3-clause-New-or-Revised','Creative-Commons',
          'Creative-Commons-Attribution-4.0', 'Creative-Commons-Attribution-Share-Alike-4.0',
          'Educational-Community-2.0', 'Eclipse-Public-1.0', 'Eclipse-Public-2.0', 'gpl',
          'Microsoft-Public', 'MIT'
        ],
        
        validate(answer) {
            if (answer.length != 1 && answer.length != 0) {
            return 'You must choose only 1 license or remove this section.';
            }

            return true;
        }
      },
      {
        name: 'tests',
        message: 'Please provide test instructions.',
        type: 'editor',
        waitUserInput: true 
     },
     {
        name: 'git_username',
        message: 'Please provide your git hub username.',
        type: 'input',
        validate(answer) {
            if(!answer) {
                return "Please provide your git hub username so a link to your profile can be included."
            }
            return true
        }
     },
    {
        name: 'email_address',
        message: 'Please provide an email address for questions. ',
        type: 'input'
    }
     
];




/**------------------------------
 *  UTIL FUNCTIONS
 * ------------------------------*/




/**------------------------------
 *  PROMPTS 
 * ------------------------------*/

/**
 * TODO: Rather than put all in then section.  save to a const and use elsewhere
 */
function promptUser() {

    inquirer.prompt(questions
        ).then(answers => {

            console.log(JSON.stringify(answers, null, '  '));

            let markdown = tools.generateMarkdown(answers);
            // console.log(`markdown = ${markdown}`); 

            // ensure output dir exists
            tools.checkOutputDirExists(OUTPUT_FILEPATH);

            // TODO EXTENSION: please clarify want to create readme or exit

            tools.writeToFile(`${OUTPUT_FILEPATH}${OUTPUT_FILENAME}`, markdown);

        }).catch(error => {
           

            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
                console.error("Apologies: your console environment is not supported.")
              } else {
                // Something else went wrong
                console.error(error);
              }

        });
}




/**------------------------------
 *  Exports
 * ------------------------------*/

module.exports = promptUser;