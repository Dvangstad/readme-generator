//Step One: Take Data
const inquirer = require("inquirer")
//Step Two: Organize that data somehow
// function ??
//Step Three: Make a new file with that data
const fs = require("fs");

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: "input",
        name: "title",
        message: "What is the title of this Project?"
    },
    {
        type: "input",
        name: "description",
        message: "How would you decribe this project?"
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install this application?"
    },
    {   type: "input",
        name: "usage",
        message: "What is the usage information for this project?"

    },
    {   type: "input",
        name: "contribution",
        message: "How can people contribute to this file?"
    },
    {   type: "input",
        name: "test",
        message: "What tests need to be run for this application?"
    },

    {   type: "list",
        name: "license",
        message: "What liscense did you use?",
        choices: ["The MIT license", new inquirer.Separator(), "The GNU license", new inquirer.Separator(),
                 "The Apache license ", new inquirer.Separator(), "The GPL license"]
    },
    {   type: "input",
        name: "git",
        message: "Github user name:"
    },
    {
        type: "input",
        name: "email",
        message: "what is your email adddress?"


    },

  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    fs.writeFile("READMETEST.md", organizeData(answers), err => {
        if (err) console.log(err)
    })
  })

function organizeData (object) {
    return `
    ## project title
    
    The name of this project is: ${object.title}

    ## Description

    Project description: ${object.description}

    ##Installation

    The instructions to install this project are: ${object.installation}

    ##Usage

    The usage information for this project is: ${object.usage}

    ##Contributions

    You can contribute to this project by: ${object.contribution}

    ##Tests

    The tests that should be run are: ${object.test}

    ##License

    The liscense used in this project is: ${object.license}

    ##Questions

    Github profile name: ${object.git}

    E-mail address: ${object.email}`


}