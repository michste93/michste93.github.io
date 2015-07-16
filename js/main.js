jQuery(document).ready(function($){
    

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
       $.post('../php/send.php',data,function(response) {
         if (response == "1"){
         	alert("win");
         }
         else{
         	alert("no win");
         }		
       
       
       });
       //,function(x){
 //      alert("in the function");
       	//su php con echo ritorna x e poi da qui alert(x)
 //      	if(x=="1"){
       		
 //      	}
 //      	else{
 //      		alert("nooooo");
 //      	}
 //      })
       
       
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

