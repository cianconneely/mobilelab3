//Problem sheet Typescript two 2a 

let Tasks:Array<string>= [];


// Question 2b 

function addTask(task:string):number{
let length:number;


   length = Tasks.push(task);
   console.log(task+ "has been added to our Tasks Array.")
   return length;

}

// Question 2c 

function listAllTasks():void{

    Tasks.forEach(function(element){
    console.log("Task "+element+"is in our Tasks Array.");

    }   
    
)}

function deleteTask(task:string):number{

let index:number;
index = Tasks.indexOf(task);
if(index > -1){
Tasks.splice(index, 1);
console.log(task+" has been deleted from our Task Array")
} else {

console.log(task + "was not found in our Task Array.");

}

return Tasks.length;

}


listAllTasks();
addTask("Eat Lunch");
deleteTask("Eat Lunch1");
