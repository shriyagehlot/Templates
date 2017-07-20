
$(function(){

$("#bttn1").click(function(){
	var status=true;
	
	var fname=$("#fname").val().trim();
	if(fname==""){
		status=false;
		$("#fname").css({"border":"2px solid red"});
		$("#fnamerror").text("please enter name").css({"color":"red"});}
	else{
		$("#fname").css({"border":""});
		$("#fnamerror").text("");}
		
    var email=$("#email").val().trim();
	if(email==""){
		status=false;
		$("#email").css({"border":"2px solid red"});
		$("#emailerror").text("please enter name").css({"color":"red"});}
	else{
		$("#email").css({"border":""});
		$("#emailerror").text("");}

	var mobile=$("#mobile").val().trim();
	if(mobile==""){
		
		status=false;
		$("#mobile").css({"border":"2px solid red"});
		$("#mobileerror").text("please enter name").css({"color":"red"});}
	else{
		$("#mobile").css({"border":""});
		$("#mobileerror").text("");}

	
	var city=$("#city").val().trim();
	if(city==""){
		status=false;
		$("#city").css({"border":"2px solid red"});
		$("#cityerror").text("please enter name").css({"color":"red"});}
	else{
		$("#city").css({"border":""});
		$("#cityerror").text("");}

	var address=$("#address").val().trim();
	if(address==""){
		status=false;
		$("#address").css({"border":"2px solid red"});
		$("#addresserror").text("please enter name").css({"color":"red"});}
	else{
		$("#address").css({"border":""});
		$("#addresserror").text("");}


});
	
});