/**
 * Filename: generateMarkdown.js
 * 
 * Contents:
 * Various functions to produce README.md  file from provided data
 * including:  badges.
 * Imports TODO template literal of required README.md - with optional sections that
 * will only appear if data exists for that particular section.
 * 
 * Requires: fs package built into node.js 
 * No specific npm installs are required for this file.
 */
console.log(`generateMarkdown loading...`);


/**------------------------------
 *  Packages Required
 * ------------------------------*/

const fs = require('fs');




/**---------------------------
 *    Markup
 ----------------------------*/
 

//const MARKUP_EOL = '  ';  // two more spaces at end of line
/* const MARKUP_EOL = '\\\\';  */
/* const MARKUP_EOL = '&nbsp;';  */
 // const MARKUP_EOL = '<br>'; 
 const MARKUP_EOL = '\n\n'; 
 const ROOT_BADGE_URL = 'https://img.shields.io/badge/';

 const MD_HEADER_INSTALLATION = '## Installation'
 const MD_HEADER_USAGE = '## Usage'
 const MD_HEADER_LICENSE = '## License'
 const MD_HEADER_CREDITS = '## Contributing'
 const MD_HEADER_TESTS = '## Tests'
 const MD_HEADER_QUESTIONS = '## Questions'

 
/**
 * Replaces end of line (possibliities) with \\ or @nbsp;
 * <br> is deemed old.
 * @param {} str 
 * @returns 
 */
function replaceEOLWithMarkup(str) {
  return str.replace(/\r?\n|\r/g, MARKUP_EOL);  // /g needed in regexp to iterate for global match

}



/**
 * 
 */
function getLicenseBadgeUrl(license_label) {
  console.log(`license_label = ${license_label}`);

  let LICENSE_PATH = `license-${license_label}-red`;
  return license_label ? `${ROOT_BADGE_URL}${LICENSE_PATH}` : '';

}

/**
 * Provides additional key/value pairs on the existing data provided by user to extend what appears on README.
 * Such as:
 * -  entries to determine if header sections of README are generated or made invisible with ''
 * - license badge link and full string
 * - deployment link
 * used to determine if sections of README will be generated or made to be invisible,
 * creates license badn
 * @param {*} data object of original key/value pairs
 * @returns extended data object with additional info used in README.md template string
 */
function addToData(data) {

  // Any multiline text with EOL needs to be replaced with <br>
  data.desc_EOL_replaced=replaceEOLWithMarkup(data.description);


   //addMarkdownHeaders
  // Show non compulsory section headers only if input entered for section
  data.installation_header = data.installation ?  MD_HEADER_INSTALLATION : '';
  data.usage_header =  data.usage ? MD_HEADER_USAGE : '';
  data.license_header =  data.license ? MD_HEADER_LICENSE : '';
  data.credits_header =  data.credits ? MD_HEADER_CREDITS : '';
  data.tests_header =  data.tests ? MD_HEADER_TESTS : '';
  data.questions_header =  data.git_username ? MD_HEADER_QUESTIONS : '';

  // TODO use if for license and git profile
  // addDeployedLink 
  //data.deployed_app_intro = data.link_to_deployed_app ? `Link to `:'';

  data.deployed_app_instruct = data.link_to_deployed_app ? `To access the app, navigate to the link below in a browser:` :'';
  data.deployed_app = data.link_to_deployed_app ? `[Deployed App](data.link_to_deployed_app)`:'';

  // addLicenseInfo
  data.license_string =  data.license? `This project is licensed under the terms of the  ${data.license} license.` :'';
  data.license_badge = data.license? getLicenseBadgeUrl(data.license) : '';

  data.git_profile_link = data.git_username ? `[Git Hub Profile](https://github.com/${data.git_username})` : '';
  data.git_profile_link_instruct =  data.git_username ? ` For questions or advice, please refer to ` : '';

  return data;
}

function generateMarkdown(data_orig) {

  console.log(`generateMarkdown entered...`);
  // addHeaderData(data_orig);
  // addLicenseData(data_orig);
  // addDeployedLink(data_orig);

  // Use Map

   let data = addToData(data_orig); 


  /* Dynamic markup data to be added */


  return `

  # ${data.title}
  ***
  

  ![Test Badge ](${data.license_badge} "a license badge")


  ***

  ## Description:
   ${data.description} 
   ${data.desc_EOL_replaced} 


   ${data.deployed_app}
   ${data.deployed_app_instruct}
   ${data.link_to_deployed_app}
   ---  
   ***


  ## Table of Content
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#credits)
  - [Tests](#tests)
  - [Questions](#questions)

  ---



  ${data.installation_header} 
  ${data.installation} 

---
  
  ${data.usage_header} 
  ${data.usage} 

 ---
  ${data.license_header}
  ${data.license_string}
  
 ---

  ${data.credits_header} 
  ${data.credits} 

---
  
  ${data.tests_header} 
  ${data.tests} 

 ---
  ${data.questions_header} 
  ${data.git_profile_link_instruct} ${data.git_profile_link} 

  
---
`;
}



/** TODO Move to seperate file
 * Writes provided data to file - 
 * @param {Write} filePathName file path and name of file to be writen to
 * @param {*} markdown - string representing readme file contents
 */
function writeToFile(filePathName, markdown) {
  fs.writeFile(filePathName, markdown, (err) =>
    err ? console.error(err) : console.log(`Success! Your README.md has been saved to ${filePathName}`)
  ); 
}



/**
 * Ensures filePath for output exists.  If not, will make missing directory.
 * @param {*} filePath 
 */
function checkOutputDirExists(filePath) {
  if (!fs.existsSync(filePath)) {
    fs.mkdirSync(filePath, { recursive: true });
  }
}


/**------------------------------
 * Exports
 * ------------------------------*/

module.exports = {
  checkOutputDirExists,
  generateMarkdown,
  writeToFile
};
