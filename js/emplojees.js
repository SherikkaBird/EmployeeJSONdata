var employeePromise = d3.json("../employee.json");

var successFCN = function(employee)
{console.log(employee); 
 d3.select("h1")
.text("These are the Employees")
}

var failFCN = function(errMessage)
{console.log("Fail", errMessage);
d3.select("h1")
.text("Not Found...")
}

employeePromise.then(successFCN, failFCN);