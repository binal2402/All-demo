$(document).ready(function(){
	// $('.mobile_menu_bar').hide();
	$('.menu_icon').click(function(){
		
		$('.side_menu').toggleClass('side_open side_close');

		$(this).find('i').toggleClass('fa-times fa-bars');
	});
});