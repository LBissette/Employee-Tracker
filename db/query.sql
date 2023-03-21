-- viewAllEmployees
SELECT 
    employee.id,
    first_name, 
    last_name, title, 
    department_name AS department, 
    salary, 
    CONCAT_WS(first_name, '', last_name) AS manager
FROM employee
JOIN role ON employee.role_id = role.id
JOIN department ON role.department_id = department.id
Join employee AS manager ON employee.manager_id

-- viewAllRoles
SELECT * FROM role

-- viewAllDepartments
SELECT * FROM department

-- addEmployee
INSERT INTO employee 

-- addRole
INSERT INTO role

-- addDepartment
INSERT INTO department (department_name)
    VALUES (?)


