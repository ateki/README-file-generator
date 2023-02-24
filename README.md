

  # README file generator
  ***
  

  ![Test Badge ](https://img.shields.io/badge/license-MIT-red "a license badge")


  ***

  ## Description:
   

This is a command line application to generate a README file. The user will be taken through a sequence of prompts . 
The information provided by the user will be used to dynamically genearte a professional README.md file.

As it is important that any open source project on GitHub has a professional high quality README for the open source project, developers
should include a professional high

Developers are recommended to provide a professional, high quality README for any open source project they create on GitHub.
With professionalism and quality key, this app can be used to help the developer create a professional, high quality README.md file quickly 
without too much effort.  Thus they can spend more time on the project yet have the required README with little effort or fuss.






The application will be invoked by using the following command:

```bash
node index.js
```

## User Story

* As a developer, I want a README generator so that I can quickly create a professional README for a new project

## Acceptance Criteria

* Create a command-line application that accepts user input.
  * When a user is prompted for information about the application repository then a high-quality, professional README.md is generated with:
    * The title of my project 
    * Sections entitled:
      * Description 
      * Table of Contents 
      * Installation 
      * Usage 
      * License 
      * Contributing 
      * Tests 
      * Questions
    * When a user enters the project title then it is displayed as the title of the README
    * When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
    * When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled **License** that explains which license the application is covered under
    * When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
    * When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
    * When a user clicks on the links in the **Table of Contents** then they are taken to the corresponding section of the README
 
  

   ***


  ## Table of Content
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ---



  ## Installation 
  From terminal 


  ### Step 1 — Checkout the following :
    GitHub Repo:  https://github.com/ateki/README-file-generator

  ### Step 2 — Run the Program

  ```bash
  cd  README-file-generator
  node index.js

  ```

 

---
  
  ## Usage 
  Start the program using command  <b>node index.js</b> in  your terminal. This will trigger a series of question prompts as shown below.
  

  ![Example Prompts ](../assets/images/MenuPrompts.png)


  * Single line answer

    Several of the prompts require single line answers.   Enter and press return to go to next prompt.  

  * Defaults 

    Questions where defaults are availble, will state this as part of the prompt, providing the default value in parenthesis.  For example, the file path README has to be saved to appears as:
    (Defaults to ./output/)
    To select default, hit return.
  
  * License drop down

    A list of licenses are presented.  Use your arrow keys to move through list of availble licenses.  To select press return key which will mark selection with '*'.

  *  Multiline answers
     
     Some questions will allow multiple line answers. For those you will be prompted to:
  
          Press <enter> to launch your preferred editor.


      At this point an editor window will open.  Enter the appropriate text to answer the question.  Note that md markup language will be understood and appear in your final answer.


 
   

 ---
  ## License
  This project is licensed under the terms of the  MIT license.
  
 ---

   
   

 ---

  ## Questions
   For questions or advice, please refer to  
  - [Irene's Git Hub Profile](https://github.com/ateki) 
    
---
