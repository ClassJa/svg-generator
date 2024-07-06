const inquirer = require('inquirer')
const colors = require('colors')
const fs = require('fs')
// const shapes = require('./shapeExamples')
const { Shape, Circle, Square, Triangle } = require('./shapeExamples/shape')


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

async function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers)
        if (answers.shape === 'circle') {
            const circle = new Circle(colors[answers.shapeColor], answers.shape, answers.logo)
        } else if (answers.shape === 'square') {
            const square = new Square(colors[answers.shapeColor], answers.shape, answers.logo)
        } else {
            const triangle = new Triangle(colors[answers.shapeColor], answers.shape, answers.logo)
        }
        fs.writeFile('logo.svg', JSON.stringify(answers), () => {console.log('Generated logo.svg')})
    })
    .catch((err) => {
        console.error(err)
        throw(new Error('Unable to generate the svg logo, try again.', err))
    })
    // return answers
}

// throw the new error or return it 
// throw stops the program, return new error continues the logic
init()



//   module.exports(answers)