// All Classes
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// All Dependencies
const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');
const path = require('path');
//Page Generator
const buildPage = require('./src/generate-page');
//Empty Team Members Array
const teamMembersArray = [];

const promptAddManager = () => {
    console.log(`
    =================================================
    Welcome to the Team Builder!
    The starting questions will be for the manager.
    =================================================`)
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your employee ID? (Required)',
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log ('Please enter a valid work ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your email?",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log ('Please enter an email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is your office Number? (Required)",
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log ('Please enter your office number!');
                    return false;
                }
            }
        },
    ]).then(promptAnswers => {
        console.log(promptAnswers);
        const { name,id, email, officeNumber } = promptAnswers;
        const manager = new Manager(name, id, email, officeNumber);

        teamMembersArray.push(manager);
        promptChoiceMenu();
    })
};

const promptChoiceMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'choiceMenu',
            message: 'Please use the menu below to select which option you would like to continue with:',
            choices: ['add an engineer', 'add an intern', 'finish building your team']
        }])
        .then(choicePicked => {
            switch (choicePicked.choiceMenu) {
                case "add an engineer":
                    promptAddEngineer();
                    break;
                case "add an intern":
                    promptAddIntern();
                    break;
                default:
                    finishTeam();
            }
        });
};

const promptAddEngineer = () => {
    console.log(`
    =====================
    Add a New Engineer ;)
    =====================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Name of Engineer? (Required)',
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    console.log("Please enter engineer's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your work ID? (Required)',
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log ('Please enter a valid work ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your email?",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log ('Please enter an email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is your github? (Required)",
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log ('Please enter your github!');
                    return false;
                }
            }
        },
    ]).then(promptAnswers => {
        console.log(promptAnswers);
        const { engineerName, id, email, github } = promptAnswers;
        const engineer = new Engineer(engineerName, id, email, github);

        teamMembersArray.push(engineer);
        promptChoiceMenu();
    })
};

const promptAddIntern = () => {
    console.log(`
    =====================
    Add a New Intern ;)
    =====================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Name of Intern? (Required)',
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log("Please enter Intern's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your work ID? (Required)',
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log ('Please enter a valid work ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your email?",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log ('Please enter an email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What school do you attend? (Required)",
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log ('Please enter your school!');
                    return false;
                }
            }
        },
    ]).then(promptAnswers => {
        console.log(promptAnswers);
        const { internName, id, email, school } = promptAnswers;
        const intern = new Intern(internName, id, email, school);

        teamMembersArray.push(intern);
        promptChoiceMenu();
    })
};

const finishTeam = () => {
    
}

promptAddManager()