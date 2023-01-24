/**
 * Filename: index.js
 * 
 * Contents:
 * Initiates the node.js terminal app to automatically create a git README.md
 * file based on answers to set of user prompts.
 * 
 * Requires: internal package: utils/promptUser.js
 */


/** Packages required */
const promptUser = require("./utils/promptUser.js"); 


const MSG_WELCOME = `
    Welcome to the GIT Readme file generator
    -----------------------------------------
    Please follow the prompts.  
    When prompted to enter into your preferred editor,
    save and close editor before continuing.
    Text can be formatted further using markup.
`;



// function to initialize program
function init() {
    console.log(MSG_WELCOME);
    promptUser();   // RENAME
}



// function call to initialize program
init();




