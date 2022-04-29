const Manager = require('../lib/Manager')

test('test to create the Manager object', () => {
    const manager = new Manager('Nick', 2525 ,'nbross2001@gmail.com', 2);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('test to get Manager role', () => {
    const manager = new Manager('Nick', 2525 ,'nbross2001@gmail.com', 2);

    expect(manager.getRole()).toEqual("Manager");
});