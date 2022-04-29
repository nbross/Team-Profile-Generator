const Engineer = require('../lib/Engineer');

test('test if we can create a engineer object', () => {
    const engineer = new Engineer('Nick', 2525, 'nbross2001@gmail.com', 'nbross');

    expect(engineer.github).toEqual(expect.any(String));
});

test('test to get engineer github value', () => {
    const engineer = new Engineer('Nick', 2525, 'nbross2001@gmail.com', 'nbross');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('test to get role of employee', () => {
    const engineer = new Engineer('Nick', 2525, 'nbross2001@gmail.com', 'nbross');

    expect(engineer.getRole()).toEqual("Engineer");
});