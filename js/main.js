jQuery(document).ready(function($){
  	
  	$(".footer-distributed").load("footer.html"); 
        
//  	$('.footer-distributed').load('footer-it.html',function(){
  	
//  	});
//  	$('head').load('head-it.html',function(){
  	
//  	});
    
     
	$('.cd-primary-nav').on('click', function(event){
		if($(event.target).is('.cd-primary-nav')) 
		   $(this).children('ul').toggleClass('is-visible');
		   $(".logo").toggleClass('no-visible');
		   $(".phone").toggleClass('no-visible');
		   $(".lang-switch").toggleClass('no-visible');
		   
	});
	 $('#newsletter').on('submit', function(event){
       var data= $('newsletter').serialize();
       $.post('../php/newsletter.php',data,function(e) {
         	alert(e);
         	
       });
      
       return false;
       
              
    });
});

