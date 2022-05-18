$(".getstarted").click(function(){
	$(".opening").hide();
    $(".choice").fadeIn();
});

$(".flpic").dblclick(function(){
    $(".choice").fadeOut();
    $(".choicefelicia").slideDown();
});

$(".kkpic").dblclick(function(){
    $(".choice").fadeOut();
    $(".choicekim").slideDown();
});

$(".beypic").click(function(){
    $(".choicekim").hide();
    $(".finalkim").fadeIn();
    $(".finalkim").css("background-color","black");
    $(".finalkim").css("color","aqua");
});

$(".flightpic").click(function(){
    $(".choicefelicia").hide();
    $(".finalfelicia").fadeIn();
});