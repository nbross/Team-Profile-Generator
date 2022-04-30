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
        const { name,id, email, officeNumber } = managerInput;
        const manager = new Manager(name, id, email, officeNumber);

        teamMembersArray.push(manager);
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

}

promptAddManager()