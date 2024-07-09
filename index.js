const inquirer = require('inquirer')
const fs = require('fs')
const { Shape, Circle, Square, Triangle } = require('./lib/shape')


// array of questions that will be asked of the user
const questions = [
    {
        name: 'logo',
        type: 'input',
        message: 'What 3 letters would you like your logo to have?',
        validate: (logoLetters) => {
            return logoLetters.length <= 3 || 'Must be 3 characters or less. Remove characters'
        },
    },
    {
        type: 'input',
        message: 'What color would you like the text of the logo to be?',
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

function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const inputShape = answers.shape 
        // const shapeObject = JSON.parse(inputShape)
        console.log(answers)
        if (inputShape === 'circle') {
            const generatedShape = new Circle(answers.shapeColor, answers.logo, answers.textColor)
            fs.writeFile('logo.svg', generatedShape.render(), () => {console.log('Generated logo.svg')})
        } else if (inputShape === 'square') {
            const generatedShape = new Square(answers.shapeColor, answers.logo, answers.textColor)
            fs.writeFile('logo.svg', generatedShape.render(), () => {console.log('Generated logo.svg')})
        } else {
            const generatedShape = new Triangle(answers.shapeColor, answers.logo, answers.textColor)
            fs.writeFile('logo.svg', generatedShape.render(), () => {console.log('Generated logo.svg')})
        }
    })
    .catch((err) => {
        console.error(err)
        throw(new Error('Unable to generate the svg logo, try again.', err))
    })
}

// throw stops the program, return new error continues the logic
init()
