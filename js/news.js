jQuery(document).ready(function($){
  	
  	
	 $('#newsletter').on('submit', function(event){
       var data= $('newsletter').serialize();
       $.post('../php/newsletter.php',data,function(e) {
         	alert(e);
         	
       });
      
       return false;
       
              
    });
});

