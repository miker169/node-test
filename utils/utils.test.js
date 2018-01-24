const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {
    describe('#add' ,() => {
        it('should add 2 numbers', () => {
            let res = utils.add(34, 11);
            expect(res).toBe(45).toBeA('number');
        });

        it('should add asynchronously two numbers', (done) => {
            utils.asyncAdd(4, 3, (sum) => {
                expect(sum).toBe(7).toBeA('number');
                done();
            });
        });
    });

    describe('#square', () => {
        it('should square asynchronously one number', (done) => {
            utils.asyncSquare(4, (sum) => {
                expect(sum).toBe(16).toBeA('number');
                done();
            })
        });

        it('should square a number', () => {
            let res = utils.square(3);
            expect(res).toBe(9).toBeA('number');
        });
    });

    it('Should split the fullname into first and lastname', () => {
        let res = utils.setName({location: 'Leeds'}, 'Mike Rayner');
        expect(res).toInclude({
            firstName: 'Mike',
            lastName: 'Rayner',
            location: 'Leeds'
        });
    });

});

