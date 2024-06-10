import inquirer from "inquirer"

//todolist
//array done
//operation done
//function

let todos: string[] = ["iraj"]
async function createtodo(todos: string[]) {
    do {
        let wellcome = console.log("Wellcome to the todo list app");

        const operation = await inquirer.prompt([
            {
                type: "list",
                name: "operator",
                message: "what you want to do?",
                choices: ["Add", "View", "Update", "Delete"]

            }
        ])
        if (operation.operator === "Add") {
            const add = await inquirer.prompt({
                type: "input",
                name: "additems",
                message: "Please add items"
            })
            todos.push(add.additems)
            console.log(todos)
        }
        if (operation.operator === "View") {
            console.log(todos)
        }

        if (operation.operator === "Update") {
            const update = await inquirer.prompt({
                name: "updateitems",
                type: "list",
                message: "select item to update",
                choices: todos
            })
            let update2 = await inquirer.prompt({
                name: "upadateitems2",
                type: "input",
                message: "update items"
            })

            let newtodos = todos.filter(val => val != update.updateitems)
            todos = [...newtodos, update2.upadateitems2]
            if (operation.operator === "Delete") {
                let remove = await inquirer.prompt({
                    type: "list",
                    name: "removeitems",
                    message: "select item to delete",
                    choices: todos
                })
            }
        }
    }
    while (true) 
}
createtodo(todos)

