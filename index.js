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

const promptUser = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
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
            message: 'What is your ID?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ('Please enter a valid work ID!')
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your email?",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is your github username?",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                }
            }
        },
    ]);
}

startPromptUser()