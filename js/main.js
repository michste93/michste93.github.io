jQuery(document).ready(function($){
      $(function() {
      
$.datepicker.regional['it'] = {
	                closeText: 'Chiudi',
	                prevText: '&#x3c;Prec',
	                nextText: 'Succ&#x3e;',
	                currentText: 'Oggi',
	                monthNames:['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],
	                monthNamesShort:['Gen','Feb','Mar','Apr','Mag','Giu','Lug','Ago','Set','Ott','Nov','Dic'],
	                dayNames: ['Domenica','Luned&#236','Marted&#236','Mercoled&#236','Gioved&#236','Venerd&#236','Sabato'],
	                dayNamesShort: ['Dom','Lun','Mar','Mer','Gio','Ven','Sab'],
	                dayNamesMin: ['Do','Lu','Ma','Me','Gi','Ve','Sa'],
	                weekHeader: 'Sm',
	                dateFormat: 'dd/mm/yy',
	                firstDay: 1,
	                isRTL: false,
	                showMonthAfterYear: false,
	                yearSuffix: ''};
	        $.datepicker.setDefaults($.datepicker.regional['it']);
        
        $("#depart").datepicker();
        $("#return").datepicker();
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
	 
	$('.cd-primary-nav').on('click', function(event){
		if($(event.target).is('.cd-primary-nav')) 
		   $(this).children('ul').toggleClass('is-visible');
		   
	});
});

