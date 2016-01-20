jQuery(document).ready(function($){
  	
  	
	 $('#newsletter').on('submit', function(event){
       var data= $('#newsletter').serialize();
       $.post('../php/newsletter.php',data,function(e) {
         	var res = e.substring(0, 3);
         	if(res == "The")
         	  alert(e);
         	else{
         		alert(e);
         		window.location="index.html";
         	}
         	
       });
      
       return false;
       
              
    });
});

