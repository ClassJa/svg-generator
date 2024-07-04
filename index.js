const inquirer = require('inquirer')
const colors = require('colors')
const fs = require('fs')

// name the array of objects 'questions so you can call it in the init function'
const questions = [
    {
        type: 'input',
        message: 'What 3 letter text would you like your logo to have?',
        name: 'logo'
    },
    {
        type: 'input',
        message: 'What color would you like the text of the logo to be?',
        choices: [colors.color], 
        // how to get the user input to directly form a color by calling it through a variable
        name: 'textColor'
    },
    {
        type: 'list',
        message: 'What shape would you like for your logo?',
        choices: ['square', 'triangle', 'circle'],
        name: 'shape'
    },
    {
        type: 'input',
        message: 'What color would you like the shape to be?',
        name: 'shapeColor'
    }
]


// 
function init() {
    inquirer.prompt(questions)
    .then(fs.writeFile('logo.svg', questions))
    .catch()
}