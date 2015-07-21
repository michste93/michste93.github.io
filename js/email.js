jQuery(document).ready(function($){
    
    $("#request_l").click(function(){
        $("#request").show(300,function(){
          });
          
       });
       
    $("#close").click(function(){
            $("#contact").hide(300);
        });
     });
        
    $('#requestForm').on('submit', function(event){
       alert("you are in");
       var data= $('#requestForm').serialize();
       alert(data);
 //      $.ajax({
 //       type: "POST",
 //       url: "../php/send.php",
 //       data: data,
 //       success: function(){
 //       alert("success")
 //      }
 //      });
       $.post('../php/send.php',data,function(e) {
         	alert(e);
         		
       });
       return false;
       
              
    });
    
    }); 
    
    
	 
	
});

