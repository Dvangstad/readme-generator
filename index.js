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
        name: "who",
        message: "Who are you?"
    },
    {
        type: "input",
        name: "what",
        message: "What are you?"
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    fs.writeFile("READMETEST.md", organizeData(answers), err => {
        if (err) console.log(err)
    })
  })

function organizeData (object) {
    return `Hello this is my project: ${object.title}
My name is ${object.who}
I am ${object.what}`
}