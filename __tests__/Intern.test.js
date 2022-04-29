const Intern = require('../lib/Intern')

test('test to create the Intern object', () => {
    const intern = new Intern('Nick', 2525 ,'nbross2001@gmail.com', 'CWRU');

    expect(intern.school).toEqual(expect.any(String));
});

test('test to get Intern school', () => {
    const intern = new Intern('Nick', 2525 ,'nbross2001@gmail.com', 'CWRU');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('test to get role of Intern', () => {
    const intern = new Intern('Nick', 2525 ,'nbross2001@gmail.com', 'CWRU');

    expect(intern.getRole()).toEqual("Intern");
});