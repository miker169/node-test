const expect = require('expect');
const rewire = require('rewire');
const App = rewire('./app');

describe('App', () => {

    var db = {
        'saveUser': expect.createSpy()
    };
    app.__set__('db', db);

    it('should call the spy correctly', () => {
        let spy = expect.createSpy();
        spy({name: 'Mike', age: 25});
        expect(spy).toHaveBeenCalledWith({name: 'Mike', age: 25});
    });

    it('shoudl call save user with user object', () => {
        let email = 'mike@example.com';
        let password = '123455';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});