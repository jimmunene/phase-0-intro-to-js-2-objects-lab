// Write your solution in this file!
const employee ={
  name: "Jim Brian",
  streetAddress : " 30031 Kasarani Nairobi"
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee };
    console.log(newEmployee);
    newEmployee[key] = value;
    return newEmployee;

}

console.log(updateEmployeeWithKeyAndValue(employee, "streetAddress", "200 Embu"));




function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

console.log(destructivelyUpdateEmployeeWithKeyAndValue(
  employee,
  "streetAddress",
  "200 Embu"
));


function deleteFromEmployeeByKey(employee, key){
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

console.log(deleteFromEmployeeByKey(employee, "name"));


function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
