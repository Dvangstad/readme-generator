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
        name: "what",
        message: "What are you?"
    },
    {   type: "input",
        name: "how",
        message: "How do you install this applicaton?"

    },
    {   type: "list",
        name: "size",
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
My name is ${object.who}
I am ${object.what}
The directons to install this project are: ${object.how}
your size choice is: ${object.size}`

}