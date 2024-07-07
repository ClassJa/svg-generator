const inquirer = require('inquirer')
const colors = require('colors')
const fs = require('fs')
// const shapes = require('./shapeExamples')
const { Shape, Circle, Square, Triangle } = require('./lib/shape')



class SVG {
    constructor(shape, text, textColor) {
      this.shape = shape
      this.text = text
      this.textColor = textColor
    }
    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}${this.textColor}</svg>`;
    //   need guidance here
    }
    setText(text, color) {
        this.text = text
        this.color = color
  
    }
    setShape(shape) {
        this.shape = shape
  
    }
  }


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
        const inputShape = answers.shape 
        // const shapeObject = JSON.parse(inputShape)
        console.log(answers)
        if (inputShape === 'circle') {
            const generatedShape = new Circle(colors[answers.shapeColor], answers.shape, answers.logo, answers.textColor)
            // generatedShape.render()
            fs.writeFile('logo.svg', generatedShape.render(), () => {console.log('Generated logo.svg')})
            // return generatedShape
        } else if (inputShape === 'square') {
            const generatedShape = new Square(colors[answers.shapeColor], answers.shape, answers.logo, answers.textColor)
            // generatedShape.render()
            fs.writeFile('logo.svg', generatedShape.render(), () => {console.log('Generated logo.svg')})
            // return generatedShape
        } else {
            const generatedShape = new Triangle(colors[answers.shapeColor], answers.shape, answers.logo, answers.textColor)
            // generatedShape.render()
            fs.writeFile('logo.svg', generatedShape.render(), () => {console.log('Generated logo.svg')})
            // return generatedShape
        }
        // fs.writeFile('logo.svg', JSON.stringify(answers), () => {console.log('Generated logo.svg')})
        // fs.writeFile('logo.svg', generatedShape.render(), () => {console.log('Generated logo.svg')})
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