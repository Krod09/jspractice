var $panels = $('.panel');
var $tab1 = $('#page1');
var $tab2 = $('#page2');
var $tab3 = $('#page3');

$tab1.click(function(){
var name = "whatever your name is...";
name = prompt("What's your name, kid?");
alert("You're a pretty cool kid, " +name);
});

$('#submitbtn').click(function(){
     alert("Thanks for subscribing! Click the confirmation link in your inbox.");
});
