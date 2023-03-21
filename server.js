const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');

const mysqlConfig = require('./config');

const db = mysql.createConnection(mysqlConfig)

require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const promptUser = [
  {
    type: "list",
    message: "What would you like to do?",
    choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department"],
    name: "choice",
  }
];

const inquireEmployee = [
  {
    type: "input",
    message: "What is the employee's first name",
    name: "first name"
  },
  {
    type: "input",
    message: "What is the employee's last name",
    name: "last name"
  },
  {
    type: "list",
    message: "What is the employee's role",
    choices: [],
    name: "role"
  },
  {
    type: "list",
    message: "Who is the employee's manager",
    choices: [],
    name: "manager"
  },
]



menu = () => {

  inquirer.prompt(promptUser)
  .then(answer => {
    
    switch (answer.choice)
    {
      case 'View All Employees':
        viewAllEmployees();
        break;

      // case "Add Employee": 

      //   addEmployee();
      //   await menu();
      //   break;

      // case "Update Employee Role": 
      //   updateRole();
      //   await menu();
      //   break;
      
      case "View All Roles": 
        viewAllRoles();
        break;
      
      // case "Add Role": 
      //   addRole();
      //   break;
      
      case "View All Departments": 
        viewAllDepartments();
        break;
      
      // case "Add Department": 
      //   addDepartment();
      //   break;

      default:
        console.error("Option not available!")
        return;
      
    };
  })
}

menu();

const viewAllEmployees = () => {
  let sql = `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager
  FROM employee
  JOIN role ON employee.role_id=role.id
  JOIN department ON role.department_id=department.id
  LEFT OUTER JOIN employee AS manager ON manager.manager_id=employee.id`;
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log('')
    console.table(result);
  })
  menu();
};

const viewAllRoles = () => {
  let sql = `SELECT role.id, role.title, department.name AS department, role.salary 
  FROM role
  JOIN department ON role.department_id=department.id`;
   db.query(sql, function (err, result) {
    if (err) throw err;
    console.log('')
    console.table(result)
    menu();
    
  })
}

const viewAllDepartments = () => {
  let sql = `SELECT department.id, department.name 
  FROM department`;
   db.query(sql, function (err, result) {
    if (err) throw err;
    console.log('')
    console.table(result)
    menu();
  })
}

const addDepartment() {
  inquirer.prompt([
    {
      
    }
  ])
}