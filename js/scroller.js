
$(document).ready(initScroller);
$(window).bind('scroll', stopScroll );
$(document.documentElement).keyup(initK);

var timer;
var tabSection = new Array();
tabSection[0] = 'acceuil';
tabSection[1] = 'realisation';
tabSection[2] = 'apropos';
tabSection[3] = 'contact';

var position = 0;

function initK(){

	var scrollTop = $(window).scrollTop();


	position = 0

if( scrollTop > ($(realisation).offset().top)-(($(realisation).offset().top)/4)) {

		if(scrollTop < ($(realisation).offset().top)+(($(realisation).offset().top)))
			{
				position = 1;

			}

	}

	if( scrollTop > ($(apropos).offset().top)-(($(apropos).offset().top)/2)) {

		if(scrollTop < ($(apropos).offset().top)+(($(apropos).offset().top)))
			{

				position = 2
				
			}

	}

	if( scrollTop > ($(contact).offset().top)-(($(contact).offset().top)/2)) {

		if(scrollTop < ($(contact).offset().top)+(($(contact).offset().top)))
			{
				position = 3
			}

	}




if (event.keyCode == 40) {
	
	position ++;

  } 
else if (event.keyCode == 38) {

	position --;
  	

}


	hauteur=$(tabSection[position]).offset().top;


	$('html,body').animate({scrollTop:hauteur},1000);

}

function initScroller(){

	$("a[href^='#']").click(go);	
	
}

function stopScroll(){
	

        clearTimeout(timer);
        timer = setTimeout( refresh , 300 );
    	

}

var refresh = function () { 

	/*var scrollTop = $(window).scrollTop();
      
    if( scrollTop > ($(realisation).offset().top)-(($(realisation).offset().top)/2)) {

		if(scrollTop < ($(realisation).offset().top)+(($(realisation).offset().top)/2))
			{
				hauteur=$(realisation).offset().top;
				
			}

	}

	if( scrollTop > ($(apropos).offset().top)-(($(apropos).offset().top)/2)) {

		if(scrollTop < ($(apropos).offset().top)+(($(apropos).offset().top)/2))
			{
				hauteur=$(apropos).offset().top;
				
			}

	}

	if( scrollTop > ($(contact).offset().top)-(($(contact).offset().top)/2)) {

		if(scrollTop < ($(contact).offset().top)+(($(contact).offset().top)/2))
			{
				hauteur=$(contact).offset().top;
				
			}


	}

	$('html,body').stop(true,false).animate({scrollTop:hauteur},800);
	*/

 }

function go(){

		cible = $(this).attr('href');
		
		/*if(cible == '#haut'){
			$('.logodiv	').animate({height:'180px'},1000);
		}
		else{
			$('.logodiv	').animate({height:'85px'},500);	
		}*/
		
		if($(cible).length>=1){
			hauteur=$(cible).offset().top;	
			
		}

		else{
			hauteur=$('a[name=' + cible.substr(1,cible.length-1) + ']').offset().top;
		}
		$('html,body').animate({scrollTop:hauteur},1000);
		
		return false;
}

