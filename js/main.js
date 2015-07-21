jQuery(document).ready(function($){
  
var content = document.getElementsById('scrollDiv');
content.addEventListener('touchstart', function (event) {
    this.allowUp = (this.scrollTop > 0);
    this.allowDown = (this.scrollTop < this.scrollHeight - this.clientHeight);
    this.slideBeginY = event.pageY;
});

content.addEventListener('touchmove', function (event) {
    var up = (event.pageY > this.slideBeginY);
    var down = (event.pageY < this.slideBeginY);
    this.slideBeginY = event.pageY;
    if ((up && this.allowUp) || (down && this.allowDown)) {
        event.stopPropagation();
    }
    else {
        event.preventDefault();
    }
});
    
    
   
   	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	});
        
//  	$('.footer-distributed').load('footer-it.html',function(){
  	
//  	});
//  	$('head').load('head-it.html',function(){
  	
//  	});
    
    
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

