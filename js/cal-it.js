jQuery(document).ready(function($){
     if (!sessionStorage.alreadyClicked) {
     var userLang = navigator.language;
     
    if(userLang == "it-IT" || userLang == "it"){
    	
   }
   else if(userLang == "de-DE" || userLang == "de" || userLang == "de-AU"){
     window.location="de/index.html";
     }
   else{
    window.location="eng/index.html";
    
   }
    sessionStorage.alreadyClicked = "true";
}     
	
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
        
  
	
  
 
	 
	
});

