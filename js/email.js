jQuery(document).ready(function($){
    
           
            
    $('#requestForm').on('submit', function(event){
       var data= $('#requestForm').serialize();
       $.post('../php/send.php',data,function(e) {
         	var res = e.substring(0, 3);
         	if(res == "L'e")
         	  alert(e);
         	else{
         		alert(e);
         		window.location="index.html";
         	}
         	
       });
       return false;
       
              
    });
    
     
    
    
	 
	
});

