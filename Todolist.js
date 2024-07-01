import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
console.log(chalk.greenBright.bold("\n \t Welcome to my Project-TodoList Appication\n"));
while (conditions) {
    let addTask1 = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your New Task :"
        }
    ]);
    todoList.push(addTask1);
    console.log(`${addTask1.task} Task added in todo-List successfully`);
    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: "Do you wanna add more task?",
            default: "false",
        }
    ]);
    conditions = addMoreTask.addmore;
}
console.log("Your Updated todo-List: ", todoList);
