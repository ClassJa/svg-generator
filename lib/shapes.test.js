const {Shape, Circle, Square, Triangle}  = require('./shape')

describe('circle-render', () => {
    it('should render a green circle with pink text that reads "abc" in the logo', () => {
    const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="80" fill="green"/> <text x="150" y="125" font-size="60" text-anchor="middle" fill="pink">ABC</text> </svg>`
    const circle = new Circle('green', 'ABC', 'pink')
    expect(circle.render()).toEqual(expectedSvg)
    })
}
)

describe('triangle-render', () => {
    it('shoukd render a blue square with grey text that reads DEF in the logo', () => {
        const expectSquareSVG = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <rect x="60" y="10" rx="10" ry="10" width="300" height="200" fill="blue"/> <text x="175" y="125" font-size="60" text-anchor="middle" fill="grey">DEF</text> </svg>`
    const squareSVG = new Square('blue', 'DEF', 'grey')
    expect(squareSVG.render()).toEqual(expectSquareSVG)
    })
})