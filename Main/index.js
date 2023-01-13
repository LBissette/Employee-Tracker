const inquirer = require('inquirer');

function employeeManager() {
    console.log('Welcome to Employee Manager');
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'actions',
          message: "What would you like to do?",
          choices: ["View All Departments", "View All Roles", "View All Employees", "Add Department", "Add Role", "Add Employee", "Update Employee Role"]
  
        },
        {
          type: 'input',
          name: 'addDepartment',
          message: "What is the name of the department you would like to add?",
          when: (answers) => answers['actions'] === 'Add Department'
  
        },
        {
          type: 'input',
          name: 'addRoleName',
          message: "What is the name of the role you would like to add?",
          when: (answers) => answers['actions'] === 'Add Role'
  
        },
        {
          type: 'input',
          name: 'addRoleSalary',
          message: "What is the salary of the role you would like to add?",
          when: (answers) => answers['actions'] === 'addRoleName'
  
        },
        {
          type: 'input',
          name: 'addRoleDepartment',
          message: "What department does the role belong to?",
          when: (answers) => answers['actions'] === 'addRoleSalary'
  
        },
        {
          type: 'input',
          name: 'addEmployeeFName',
          message: "What is the first name of the employee you would like to add?",
          when: (answers) => answers['actions'] === 'Add Employee'
  
        },
        {
          type: 'input',
          name: 'addEmployeeLName',
          message: "What is the last name of the employee you would like to add?",
          when: (answers) => answers['actions'] === 'addEmployeeFName'
  
        },
        {
          type: 'input',
          name: 'addEmployeeRole',
          message: "What is the last name of the employee you would like to add?",
          when: (answers) => answers['actions'] === 'addEmployeeLName'
  
        },
        {
          type: 'input',
          name: 'addEmployeeManager',
          message: "What is the last name of the employee you would like to add?",
          when: (answers) => answers['actions'] === 'addEmployeeRole'
  
        },


        {
            type: 'input',
            name: 'updateEmployeeRole',
            message: "What is the name of the department you would like to update the employee to?",
            when: (answers) => answers['actions'] === 'Update Employee Role'
    
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber
        );
        teamArray.push(manager);
        displayMenu();
      })
    }