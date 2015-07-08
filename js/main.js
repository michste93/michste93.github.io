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
        
  $('.submit-button').on('click', function(event){
    $.post("./send.php", $("#requestForm").serialize(), function(response) {
      alert(response);
	  $('#success').html(response);
	  
	//$('#success').html(response);
	//$('#success').hide('slow');
	});
	});
	
    $('#requestForm').on('submit', function(event){
       var data= $('#requestForm').serialize();
       $.post("../php/php.php",data,function(x){
       	//su php con echo ritorna x e poi da qui alert(x)
       })
       
       return false;
    }
 
	 
	$('.cd-primary-nav').on('click', function(event){
		if($(event.target).is('.cd-primary-nav')) 
		   $(this).children('ul').toggleClass('is-visible');
		   
	});
});

