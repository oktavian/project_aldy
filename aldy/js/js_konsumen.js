$(document).ready(function(){
   // config default datepicker 
   $('.tgl').datepicker({
        dateFormat: 'yy-mm-dd',
        changeMonth: true,
	changeYear: true,
        showOn:"button",
        buttonImage: "../css/images/icon/calendar.gif",
	buttonImageOnly: true
    });
    $('.tgl').css("margin-right","5px");
    $('div.ui-datepicker').css("font-size","13px");
    
    
    //config slider
    $('#slidebisnis').coinslider({ width: 700, delay: 7000 });
    
  
  
});