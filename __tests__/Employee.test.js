const Employee = require('../lib/Employee');

test(' test to create a employee object', () => {
    const employee = new Employee('Nick', 2525, 'nbross2001@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('test to get employee name', () => {
    const employee = new Employee('Nick', 2525, 'nbross2001@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('test to get employee ID', () => {
    const employee = new Employee('Nick', 2525, 'nbross2001@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('test to get employee email', () => {
    const employee = new Employee('Nick', 2525, 'nbross2001@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('test to get role of employee', () => {
    const employee = new Employee('Nick', 2525, 'nbross2001@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 