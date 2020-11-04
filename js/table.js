var employeePromise = d3.json("../employee.json");

var successFCN = function(employee)
{console.log(employee); 
 d3.select("h1")
.text("These are the Employees")
 var rows =d3.select("tbody")
 .append("tr")
 .data(employee)
 .enter()
 .append("img")
 rows.append("td")
}

var failFCN = function(errMessage)
{console.log("Fail", errMessage);
d3.select("h1")
.text("Not Found...")
}

employeePromise.then(successFCN, failFCN);