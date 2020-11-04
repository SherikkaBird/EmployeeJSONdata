var employeePromise = d3.json("../employee.json");

var successFCN = function(employees)
{console.log("Success, employees");}

var failFCN = function(errMessage)
{console.log("Fail", errMessage);}

employeePromise.then(successFCN, failFCN);