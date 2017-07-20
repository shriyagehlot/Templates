$(function(){
	$("#bttn1").click(function(){
		var status=true;
		
		var fname=$("#fname").val().trim();
	if(fname==""){
		status=false;
		$("#fname").css({"border":"2px solid red"});
		$("#fnameerror").text("please enter name").css({"color":"red"});}
	else{
		$("#fname").css({"border":""});
		$("#fnameerror").text("");}
		
		//email//
		var email=$("#email").val().trim();
	if(email==""){
		status=false;
		$("#email").css({"border":"2px solid red"});
		$("#emailerror").text("please enter email").css({"color":"red"});}
		else{
			$("#email").css({"border":""});
			$("#emailerror").text("");}
			
			//mobile//
			var mobile=$("#mobile").val().trim();
		if(mobile==""){
			status=false;
			$("#mobile").css({"border":"2px solid red"});
			$("#mobileerror").text("please enter mobile number").css({"color":"red"});}
			else{
				$("#mobile").css({"border":""});
				$("#mobileerror").text("");
			}
			
				//address//
				var address=$("#address").val().trim();
				if(address==""){
					status=false;
					$("#address").css({"border":"2px solid red"});
					$("#addresserror").text("enter valid address").css({"color":"red"});
				}else{
					$("#address").css({"border":"2px solid red"});
					$("#addresserror").text("");
				}
		
		
	});
	
});

$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});















