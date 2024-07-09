const {Circle, Square, Triangle}  = require('./shape')

describe('circle-render', () => {
    it('should render a green circle with pink text that reads "ABC" in the logo', () => {
    const expectedCircleSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="80" fill="green"/> <text x="150" y="125" font-size="60" text-anchor="middle" fill="pink">ABC</text> </svg>`
    const circleSVG = new Circle('green', 'ABC', 'pink')
    expect(circleSVG.render()).toEqual(expectedCircleSvg)
    })
}
)

describe('square-render', () => {
    it('should render a blue square with grey text that reads "DEF" in the logo', () => {
        const expectSquareSVG = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <rect x="60" y="10" rx="10" ry="10" width="300" height="200" fill="blue"/> <text x="175" y="125" font-size="60" text-anchor="middle" fill="grey">DEF</text> </svg>`
        const squareSVG = new Square('blue', 'DEF', 'grey')
    expect(squareSVG.render()).toEqual(expectSquareSVG)
    })
})

describe('triangle-render', () => {
    it('should render a green triangle with black text that reads "ABC" within the logo', () => {
        const expectedTriangleSVG = `<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"> <polygon  points="150, 18 244, 182 56, 182" fill="green"/> <text x="145" y="158" font-size="60" text-anchor="middle" fill="black">ABC</text> </svg>`
        const triangleSVG = new Triangle('green', 'ABC', 'black')
    expect(triangleSVG.render()).toEqual(expectedTriangleSVG)
    })
})