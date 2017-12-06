var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",

    password: "3pqxt7138Herb",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    loadProducts();
});

function loadProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;

        console.table(res);

        promptCustomerForItem(res);
    })
}

function promptCustomerForItem(inventory) {

    inquirer
        .prompt([{
            name: "action",
            type: "input",
            message: "What is the ID of the product you would like to buy?"
            // ,
            // validate: function (val) {
            //     return !isNaN(val)
            // }
        }])
        .then(function (answer) {
            // answer that is passed through is a object with a property called 'action' that has our selection
            var choiceId = parseInt(answer.action);
            // var product = checkInventory(choiceId, inventory)
            console.log(inventory[2]);
            if (inventory) {
                promptCustomerForQuantity();
            } else {
                console.log("\nThat item doesn\'t exist.");
                loadProducts()
            }
        });
}

function checkInventory(inventory) {

    
}

function promptCustomerForQuantity(product) {

    inquirer
        .prompt([{
                name: "action",
                type: "input",
                message: "How many would you like"
            //     ,
            //    validate: function (val) {
            //         return !isNaN(val)
            //     }
            }

        ])
        .then(function (answer) {
            answer = item.selection;
            checkInventory()
        })}