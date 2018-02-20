var $panels = $('.panel');
var $navitem = $('.navitem');
var name;
var $changebtn = document.getElementById('changebtn');

// CHANGE BUTTON
document.getElementById('changebtn').addEventListener('click', function(){
     if($changebtn.classList.contains('change')){
          $changebtn.classList.remove('change');
          $changebtn.classList.add('changed');
          $changebtn.innerHTML = "Yay you. Now change it back.";
     }
     else if ($changebtn.classList.contains('changed')){
          $changebtn.classList.remove('changed');
          $changebtn.classList.add('change');
          $changebtn.innerHTML = "Click here to change my text!";
     }
});


//INPUT / ALERT
$('#random').click(function(name){
name = prompt("What's your name, kid?");
alert("You're a pretty cool kid, " +name);
});

// NAVIGATION ITEMS
$navitem.on('click', function(){
     $navitem.find('[aria-selected="true"]').attr('aria-selected', false);

});
