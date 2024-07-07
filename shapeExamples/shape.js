// const questions = require('../index')
const answers = require('../index')


// function Shape(shapeColor) {
//     this.shapeColor = shapeColor
// }


class Shape {
  constructor(shapeColor, shape) {
    this.shapeColor = shapeColor
    this.shape = shape
  }
  render() {
    // this is for circle, how to align it for all shapes
    return `<${shape} cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

class SVG {
  constructor(shape, text) {
    this.shape = shape
    this.text = text
  }
  render() {

  }
  setText() {

  }
  setShape() {

  }
}


class Circle extends Shape {
  constructor(shapeColor, shape, logo) {
    super(shapeColor, shape)
    this.logo = logo
  }
    // logo = 'Circle'
    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="80" fill="green" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.color}>${this.logo}</text>
    </svg>`
    }
  } 

  class Square extends Shape {
    render() {
      return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
      <rect x="60" y="10" rx="10" ry="10" width="300" height="200"/>
      <text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.color}>${this.logo}</text>
  </svg>`
    }
  } 


  class Triangle extends Shape {
    render() {
      return `<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" >
      <polygon  points="150, 18 244, 182 56, 182" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.color}>${this.logo}</text>
    </svg>`
    }
  } 

  module.exports = {Shape, Circle, Square, Triangle} 