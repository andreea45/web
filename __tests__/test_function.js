const app = require('../index');

beforeAll(() => {
    try {
        if(app.FIRST_NAME.length < 3 && app.LAST_NAME.length < 3 && app.GRUPA.length !== 4) {
            throw new Error('Student details are not completed');
        }
    } catch(err) {
        //You must complete the student details first
        process.exit(1);
    }
})

describe('Testing numberParser function', () => {
    test('Return the integer part of a number (example: numberParser(56) should return 56, numberParser(56.3) should return 56)', (done) => {
        expect(app.numberParser(56)).toBe(56);
        expect(app.numberParser(56.3)).toBe(56);
        done();
    });
    test('Return the integer part of a string that can be coerced to number (example: numberParser("56.3") should return 56)', (done) => {
        expect(app.numberParser('56.3')).toBe(56);
        done();
    });
    test('Treat the case where the input is NaN (take care NaN !== NaN) (numberParser(NaN) should return NaN)', (done) => {
        expect(app.numberParser(NaN)).toBeNaN();
        done();
    })
    test('Treat the case where the input is Infinity and -Infinity (numberParser(Infinity) should return NaN)', (done) => {
        expect(app.numberParser(Infinity)).toBeNaN();
        expect(app.numberParser(-Infinity)).toBeNaN();
        done();
    })
    test('If the input is higher or lower than the Number.MAX_INTEGER_VALUE & Number.MIN_INTEGER_VALUE the function should return NaN', (done) => {
        expect(app.numberParser(Number.MIN_VALUE)).toBe(5);
        expect(app.numberParser(Number.MAX_VALUE)).toBeNaN();
        done();
    })
})
