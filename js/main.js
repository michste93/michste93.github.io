jQuery(document).ready(function($){
      $(function() {
      
$( "#depart" ).datepicker( $.datepicker.regional[ "it" ] );
$( "#return" ).datepicker( $.datepicker.regional[ "it" ] );     
        $("#depart").datepicker();
        $("#return").datepicker();
        });
        
  $('.submit-button').on('click', function(event){
    $.post("./send.php", $("#requestForm").serialize(), function(response) {
      alert(response);
	  $('#success').html(response);
	  
	//$('#success').html(response);
	//$('#success').hide('slow');
	});
	});
	
  
 /* var arrivo = document.forms["request-form"]["arrivalDate"].value;
 var partenza = document.forms["request-form"]["departureDate"].value;
  var pensione = document.forms["request-form"]["board"].value;
  var camera = document.forms["request-form"]["room"].value;
  var adulti = document.forms["request-form"]["adults"].value;
  var bimbo1 = document.forms["request-form"]["child1"].value;
  var bimbo2 = document.forms["request-form"]["child2"].value;
  var bimbo3 = document.forms["request-form"]["child3"].value;
  
  var messaggio = document.forms["request-form"]["textarea"].value;
  var email_to = "michste93@gmail.com";
  var oggetto = "Richiesta informazioni";
  var titolo = document.forms["request-form"]["title"].value;
  var nome = document.forms["request-form"]["name"].value;
  var cognome = document.forms["request-form"]["surname"].value;
  var email = document.forms["request-form"]["email"].value; 
  var indirizzo = document.forms["request-form"]["address"].value;
  var zip = document.forms["request-form"]["zip"].value;
  var città = document.forms["request-form"]["city"].value;
  var stato = document.forms["request-form"]["country"].value;
  var telefono = document.forms["request-form"]["phone"].value;
  var newsletter = document.forms["request-form"]["news"].value; 
  

  if ((email.indexOf("@") == (-1)) || (email == "undefined")) {
    alert("Inserire un indirizzo email valido.");
    document.forms["request-form"]["email"].focus;
    
  }
  else{
    var link = "Arrivo: "+arrivo +
    "Partenza: "+partenza +
    "Pensione: "+pensione +
    "Camera: "+camera +
    "Adulti: "+adulti +
    "Bambino 1: "+bimbo1 +
    "Bambino 2: "+bimbo2 +
    "Bambino 3: "+bimbo3 +
    "Messaggio: "+messaggio +
    "Titolo: "+titolo +
    "Nome: "+nome +
    "Cognome: "+cognome +
    "Email: "+email +
    "Indirizzo: "+indirizzo +
    "Zip: "+zip +
    "Città: "+città +
    "Stato: "+stato +
    "Telefono: "+telefono +
    "Newsletter: "+newsletter ;
     
    alert("done saving");
  }
 /*     $.ajax({
      alert("in ajax");
      type: "POST",
      data: link,
      url: "../php/php.php",
      succes: function(){
      	alert("it was a succes");
      }
      })
   return false;   
      });*/
/*        var url = window.location.href;
     if (url.charAt(url.length-1) == '/') {
         url = url.substr(0,url.length - 1);
   }
   var curPage = url.split('/').pop().toLowerCase();
   
   
 if (curPage.toLowerCase() == "summer.html"){
        $('head').append('<style>#cd-intro-fix::after{background: transparent url(../img/summer.jpg) no-repeat;}</style>');
        //document.getElementById("cd-intro-fix::after").style.backgroundImage="url('img/summer.jpg')";
    }
   */ 

	 //on mobile - open/close primary navigation clicking/tapping the menu icon
	 
	$('.cd-primary-nav').on('click', function(event){
		if($(event.target).is('.cd-primary-nav')) 
		   $(this).children('ul').toggleClass('is-visible');
		   
	});
});

