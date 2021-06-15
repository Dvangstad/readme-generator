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
    {   type: "list",
        name: "liscense",
        message: "What size would you like?",
        choices: ["small", new inquirer.Separator(), "medium", new inquirer.Separator(),
                 "large", new inquirer.Separator(), "extralarge"]
    }   
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    fs.writeFile("READMETEST.md", organizeData(answers), err => {
        if (err) console.log(err)
    })
  })

function organizeData (object) {
    return `The name of this project is: ${object.title}
Project description: ${object.description}
The instructions to install this project are: ${object.installation}
The usage information for this project is: ${object.usage}
your size choice is: ${object.size}`

}