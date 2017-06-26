//Check off Specific Todos by clicking
$("ul").on("click", "li", function(){
	// alert("Clicked Li");
	// $(this).css("color","gray");
	// $(this).css("text-decoration","line-through");

	//if li is gray
	// console.log($(this).css("color"));
	// if($(this).css("color") === "rgb(128, 128, 128)"){
	// 	//turn it black
	// 	$(this).css({
	// 		color: "black",
	// 		textDecoration: "none"
	// 	});
	// //else
	// }else{
	// 	//turn it gray
	// 	$(this).css({
	// 		color: "gray",
	// 		textDecoration: "line-through"
	// 	});
	// }


	//final one-line code version
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
	// alert("Clicked on a span");
	// $(this).parent().remove();
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});

	event.stopPropagation();  //this stops other events from triggering that would also be caught (code is commented below)
});

// $("ul").click(function(){
// 	alert("Clicked on a ul");
// });

// $("#container").click(function(){
// 	alert("Clicked on a container div");
// });

// $("body").click(function(){
// 	alert("Clicked on a body");
// });



//Add a Todo
$("input[type='text']").keypress(function(event){
	// console.log("Key Pressed");
	if(event.which === 13){
		//enter key
		// console.log("You hit enter!");

		//grab new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
			// $("ul").append("<li>This is a new li that we appended</li>");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
		//set input to empty string

	}
});


//toggle new input
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})