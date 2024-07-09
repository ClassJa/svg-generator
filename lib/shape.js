// const questions = require('../index')
const answers = require('../index')

// Blueprint shape class constructor that will be extended to create custom instances of this class
class Shape {
  constructor(shapeColor) {
    this.shapeColor = shapeColor
  }
  render() {
    return `<"${new Shape}" cx="150" cy="100" r="80" fill="${this.color}" />`
  }
  setColor(color){
    this.color = color
  }
}

// Class for the circle shape
class Circle extends Shape {
  constructor(shapeColor, logo, textColor) {
    super(shapeColor)
    this.logo = logo
    this.textColor = textColor
  }
    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logo}</text>
    </svg>`
    }
  } 

  // Class for the square shape
  class Square extends Shape {
    constructor(shapeColor, logo, textColor) {
      super(shapeColor)
      this.logo = logo
      this.textColor = textColor
    }
    render() {
      return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
      <rect x="60" y="10" rx="10" ry="10" width="300" height="200" fill="${this.shapeColor}"/>
      <text x="175" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logo}</text>
  </svg>`
    }
  } 

// Class for the triangle shape
  class Triangle extends Shape {
    constructor(shapeColor, logo, textColor) {
      super(shapeColor)
      this.logo = logo
      this.textColor = textColor
    }
    render() {
      return `<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" >
      <polygon  points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>
      <text x="145" y="158" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logo}</text>
    </svg>`
    }
  } 


  module.exports = {Shape, Circle, Square, Triangle} 