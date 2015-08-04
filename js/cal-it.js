jQuery(document).ready(function($){
     if (!sessionStorage.alreadyClicked) {
     alert("ensoma dai");
    var userLang = navigator.language || navigator.userLanguage;
    alert(userLang); 
   if(userLang=="it-IT" || "it"){
   $(window).load(function() {
   	 	$(".load-it").fadeOut("slow");
   	 	
   	 	
	});
   }
   else if(userLang=="de-DE" || "de"){
     window.location="../de/index.html";
     $(window).load(function() {
   	 	$(".load-de").fadeOut("slow");
	});
     
   }
   else{
    window.location="../eng/index.html";
    $(window).load(function() {
   	 	$(".load-eng").fadeOut("slow");
	});
   	
   }
    sessionStorage.alreadyClicked = "true";
}
     
	$(window).ready(function() {
		$(".load-it").hide();
		$(".load-eng").hide();
		$(".load-de").hide();
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

