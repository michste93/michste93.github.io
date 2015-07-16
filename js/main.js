jQuery(document).ready(function($){
    
//uses body because jquery on events are called off of the element they are
//added to, so bubbling would not work if we used document instead.
$('body').on('touchstart','.scrollable',function(e) {
  if (e.currentTarget.scrollTop === 0) {
    e.currentTarget.scrollTop = 1;
  } else if (e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.offsetHeight) {
    e.currentTarget.scrollTop -= 1;
  }
});
//prevents preventDefault from being called on document if it sees a scrollable div
$('body').on('touchmove','.scrollable',function(e) {
  e.stopPropagation();
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

