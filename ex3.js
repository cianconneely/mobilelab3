"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tasks = /** @class */ (function () {
    function Tasks() {
        this.Tasks = [];
    }
    Tasks.prototype.addTask = function (task) {
        var length;
        length = this.Tasks.push(task);
        console.log(task + "has been added to our Tasks Array.");
        return length;
    };
    Tasks.prototype.listAllTasks = function () {
        this.Tasks.forEach(function (element) {
            console.log("Task " + element + " is our Tasks Array.");
        });
    };
    Tasks.prototype.deleteTask = function (task) {
        var index;
        index = this.Tasks.indexOf(task);
    };
    return Tasks;
}());
