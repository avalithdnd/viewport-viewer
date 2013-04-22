/* ===========================================
	onLoad
   =========================================== */

$('figure').hide();
$('#welcome').show();

$('#iphone_loading').hide();
$('#iphoneL_loading').hide();
$('#iphone5_loading').hide();
$('#iphone5L_loading').hide();
$('#smallTablet_loading').hide();
$('#smallTabletL_loading').hide();
$('#ipad_loading').hide();
$('#ipadL_loading').hide();



/* ===========================================
	Global Declarations
   =========================================== */

var activeFrame = 'welcome';
var activeButton = 'welcomeButton';



/* ===========================================
	Functions
   =========================================== */

function swapFrames(newFrame,newButton) {
	$('#' + activeFrame).hide();
	$('#' + newFrame).fadeIn();
	activeFrame = newFrame;

	if (newButton != activeButton) {
		$('#' + activeButton).removeClass('active');
		$('#' + newButton).addClass('active');
		activeButton = newButton;
	}
}



function respond() {
	var location = document.getElementById('input').value;

	if ((location.substring(0, 7) == 'http://') || (location == '')) {

		$('#iphone_loading').show();
		$('#iphoneL_loading').show();
		$('#iphone5_loading').show();
		$('#iphone5L_loading').show();
		$('#smallTablet_loading').show();
		$('#smallTabletL_loading').show();
		$('#ipad_loading').show();
		$('#ipadL_loading').show();

		$('#iphone_icon').hide();
		$('#iphoneL_icon').hide();
		$('#iphone5_icon').hide();
		$('#iphone5L_icon').hide();
		$('#smallTablet_icon').hide();
		$('#smallTabletL_icon').hide();
		$('#ipad_icon').hide();
		$('#ipadL_icon').hide();


		document.getElementById('iphone_iframe').src = location;
		document.getElementById('iphoneL_iframe').src = location;
		document.getElementById('iphone5_iframe').src = location;
		document.getElementById('iphone5L_iframe').src = location;
		document.getElementById('smallTablet_iframe').src = location;
		document.getElementById('smallTabletL_iframe').src = location;
		document.getElementById('ipad_iframe').src = location;
		document.getElementById('ipadL_iframe').src = location;

		$('#input').blur();

		if (activeFrame == 'welcome') {
			swapFrames('iphone','iphone_button');
		}
	}

	else {

		alert('Please make sure your destination begins with \'http://\'.');

	}
}



function callRespond(url) {
	document.getElementById('input').value = url;
	respond();
}



function themeSwap(toTheme) {
	if (toTheme == 1) {
		//light
		$('#main-nav').removeClass('navbar-inverse');
		$('#logo').removeClass('inverse');
		$('.btn').removeClass('btn-inverse');
		$('body').css({'background-color':'#fff','color':'#333'});
		$('.hero-unit').css({'background-color':'#eee','color':'#333'});
		$('i').css('color','#000');
		$('#signature').removeClass('inverse');
		$('hr').removeClass('inverse');
		$('iframe').css('background-color','rgba(0,0,0,0.1)');
	}
	else {
		//dark
		$('#main-nav').addClass('navbar-inverse');
		$('#logo').addClass('inverse');
		$('.btn').addClass('btn-inverse');
		$('body').css({'background-color':'#000','color':'#ccc'});
		$('.hero-unit').css({'background-color':'#111','color':'#eee'});
		$('i').css('color','#fff');
		$('#signature').addClass('inverse');
		$('hr').addClass('inverse');
		$('iframe').css('background-color','rgba(255,255,255,0.1)');
	}
} 