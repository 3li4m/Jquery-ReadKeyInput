$("h1").css("color", "red");
$("a").attr("href", "https://www.yahoo.com")

$("h1").click(function(){
	$("h1").css("color", "purple");
});
/*
$("input").keydown(function(event){
	console.log(event.key);
});
*/
$(document).keydown(function(event){
	$("h1").text(event.key);
});

$("h1").on("mouseover", function(){
	$("h1").css("color", "green");
});