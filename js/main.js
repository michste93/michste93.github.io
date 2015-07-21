jQuery(document).ready(function($){
  var userLang = navigator.language || navigator.userLanguage; 
  if (userLang=="en-US") {
  	window.location.replace("http://berghotelmiramonti.it/en/index.html");
  }  

$('body').on('touchstart',function(e) {
  if (e.currentTarget.scrollTop === 0) {
    e.stopPropagation();
  
  }
});
$('body').on('touchmove',function(e) {
  if (e.currentTarget.scrollTop === 0) {
    e.stopPropagation();
  
  }
});

   
   	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	});
        
  	$('.footer-distributed').load('footer-it.html',function(){
  	
  	});
  	$('head').load('head-it.html',function(){
  	
  	});
    
    
    $("#contact_l").click(function(){
        $("#contact").show(300,function(){
           
        });
        $("#close").click(function(){
            $("#contact").hide(300);
        });
    });
    
    $("#contact form").submit(function(){
        var name = $("#name").val();
        var email = $("#email").val();
        var object = $("#object").val();
        var mex = $("textarea").val();
        var file = "name="+name+"&email="+email+"&object="+object+"&mex="+mex;
        $.post("../php/contact.php",file,function(e){
	        alert(e);
        	$("#contact").hide(300);
        	email="";
        	object="";
        	mex="";
        });
        return false;
    });
	 
	$('.cd-primary-nav').on('click', function(event){
		if($(event.target).is('.cd-primary-nav')) 
		   $(this).children('ul').toggleClass('is-visible');
		   
	});
});

