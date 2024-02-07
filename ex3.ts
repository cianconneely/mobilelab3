export interface tasksInterface {
Tasks: Array<string>;
addTask(task: string): number

}

class Tasks implements tasksInterface {
static splice: any;
constructor() {}

Tasks: Array<string>= [];

addTask(task: string): number {
    let length: number;

    
   length = this.Tasks.push(task);
   console.log(task+ "has been added to our Tasks Array.")
   return length;

}

listAllTasks(): void{
this.Tasks.forEach(function (element) {
console.log("Task " + element + " is our Tasks Array.")
})


}

deleteTask(task: string): number {
let index: number;
index = this.Tasks.indexOf(task);

    if(index > -1){
    Tasks.splice(index, 1);
    console.log(task+" has been deleted from our Task Array")
    } else {
    
    console.log(task + "was not found in our Task Array.");
    
    }
    
    return Tasks.length;
}
}