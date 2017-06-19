// console.log("connected");

var todos = ["Buy some cheez-its"];

var input = prompt("What would you like to do?");


while(input !== "quit"){
	//handle input
	if(input === "list") {
		listTodos();
	} else if (input === "new") {
		addTodo();
	} else if(input=== "delete") {
		deleteTodo();
	}
	//ask for new input
	input = prompt("What would you like to do?");
}
console.log("OK, you quit the app");

function listTodos(){
	todos.forEach(function(todo, i){
		console.log(i + ": " + todo);
	});
}
function addTodo(){
	//ask for a new todo
	var newTodo = prompt("Enter new todo");
	//add to todos array
	todos.push(newTodo);
	console.log("Added Todo");
}
function deleteTodo(){
	//ask for index of item to be deleted
	var index = prompt("Enter index of todo to delete");
	//delete that todo
	//splice()
	todos.splice(index,1);
	console.log("Deleted todo");
}