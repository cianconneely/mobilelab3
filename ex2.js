//Problem sheet Typescript two 2a 
var Tasks = [];
// Question 2b 
function addTask(task) {
    var length;
    length = Tasks.push(task);
    console.log(task + "has been added to our Tasks Array.");
    return length;
}
addTask("Eat Lunch");
