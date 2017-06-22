console.log("connected");

var input = prompt("What would you like to do?");

while(input !== "quit"){
	//handle input
	if(input === "pR"){
		printReverse();
	}else if(input === "iU"){
		isUniform();
	}else if(input === "sA"){
		sumArray();
	}else if(input === "max"){
		max();
	}
	//ask for new input
	input = prompt("What would you like to do?");
}
console.log("Ok, you quit the app!");


function printReverse(){
	var itemNum = 1;
	var pArray = [0,0,0,0];
	for(i=0;i<4;i++){
		pArray[i] = prompt("Please enter in for index: " + i);
	}
	for(i=0;i<pArray.length;i++){
		console.log(pArray[3-i]);
	}

}

function isUniform(){
	var array1 = [0,0,0,0];

	for(i=0;i<array1.length;i++){
		array1[i] = prompt("Please enter in for index: "  + i);
	}

	for(i=0;i<array1.length;i++){
		if(array1[0] !== array1[i]){
			console.log("not uniform");
			return false;
		}
	}
	console.log("is Uniform");
	return true;
}

function sumArray(){
	var sArray = [0,0,0,0,];
	var total=0;
	for(i=0;i<sArray.length;i++){
		sArray[i]=prompt("Enter in a value for index: " + i);
	}

	sArray.forEach(function(val){
		total+= parseInt(val);
	});
	console.log("The total sum is: " + total);
}

function max(){
	var mArray = [0,0,0,0];
	var highest = 0;
	for(i=0;i<mArray.length;i++){
		mArray[i] = prompt("Enter in a value for index: " + i);
	}

	for(i=0;i<mArray.length;i++){
		if(mArray[i] > highest){
			highest = mArray[i];
		}
	}

	mArray.forEach(function(val){
		console.log(val);
	});
	console.log("The maximum value is: " + highest);
}