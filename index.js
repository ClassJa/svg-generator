const inquirer = require('inquirer')
const colors = require('colors')
const fs = require('fs')
// const shapes = require('./shapeExamples')
const { Shape } = require('./shapeExamples/shape')

// name the array of objects 'questions so you can call it in the init function'
const questions = [
    {
        type: 'input',
        message: 'What 3 letters would you like your logo to have?',
        name: 'logo'
    },
    {
        type: 'input',
        message: 'What color would you like the text of the logo to be?',
        // choices: [colors.color], 
        // how to get the user input to directly form a color by calling it through a variable
        name: 'textColor'
        // fill 
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

function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers)
        fs.writeFile('logo.svg', JSON.stringify(answers), () => {console.log('Generated logo.svg')})
    })
    .catch((err) => {
        console.error(err)
        throw(new Error('Unable to generate the svg logo, try again.', err))
    })
    return answers
}

if (questions.shape === 'square') {
    return Shape.square
}

// if (questions.shape === 'square') {

// } else if (questions.shape === 'triangle') {
//     shapes

// } else {
//    const circle = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

//   <circle cx="150" cy="100" r="80" fill="green" />

//   <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

// </svg>`
// }
// throw the new error or return it 
// throw stops the program, return new error continues the logic
init()


  // .then(fs.writeFile('logo.svg', questions, err => err ? ), console.log('Generated logo.svg')) 


  module.exports(answers)