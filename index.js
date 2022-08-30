// Release 0
let student = {};
student.firstName = `Petr`;
student.lasttName = `Perviy`;
student.firstName = `Petya`;
delete student.firstName;

// Release 1

let group = [];
group.push(student);
group.push({ firstName: "Vanila", lasttName: "Kola" });
group.push({ firstName: "Cola", lasttName: "Pepsi" });
