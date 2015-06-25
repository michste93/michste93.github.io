jQuery(document).ready(function($){
      $(function() {
      
$.datepicker.regional['de'] = {
	                closeText: 'Schliessen',
	                prevText: '&#x3c;Zur',
	                nextText: 'Weit&#x3e;',
	                currentText: 'Heute',
	                monthNames:['Januar','Febraur','Marz','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],
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
	        $.datepicker.setDefaults($.datepicker.regional['de']);
        
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
	
  
 
	 
	$('.cd-primary-nav').on('click', function(event){
		if($(event.target).is('.cd-primary-nav')) 
		   $(this).children('ul').toggleClass('is-visible');
		   
	});
});

