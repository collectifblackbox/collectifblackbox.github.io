
$( document ).ready(function() {
	/*	var $grid = $('.grid').imagesLoaded( function() {
	  $grid.masonry({
	    itemSelector: '.grid-item',
	    percentPosition: true,
	    columnWidth: '.grid-sizer'
	  }); 
	});*/

	logofolder = "black"
	colorReserve = Math.round(Math.random());
	//console.log(colorReserve)
	if(colorReserve == 1){
	  logofolder = "white"
	  $(".white").css("background-color", "#fff");
	  $("#warpMenu").css("background-color", "#010101");
	  $("body").css("background-color", "#010101");
	  $("footer").css("background-color", "#010101");
	  $(".menu a").css("color", "#ccc");
	  $(".menu a.active").css("color", "#fff");
	  $(".content .left").css("color", "#010101");
	  $(".content .project_team").css("color", "#010101");
	  //border: 1vw solid #010101;
	  $(".item").css('border', '1vw solid #fff'); 
	  $(".empty").css("background-color", "#fff");
	  $(".artist").css('border', '1vw solid #fff'); 
	  $(".artist").css("background-color", "#fff");
	  //$(".name").css("background-color", "#010101");
	  $("mark").css("background-color", "#010101");
	  $("mark").css("color", "#fff");
	  $(".contact h2").css("color", "#010101");
	  $(".contact h3 a").css("color", "#010101");
	  $(".blank").css("background-color", "#fff");
	}

	$(".logo").css("background-image", "url('img/logo/"+logofolder+"/"+Math.floor((Math.random() * 3) + 1)+".png')");

	$(".empty").each(function (index, value){
		isDisplayed =  Math.round(Math.random());
		if (isDisplayed == 1){
			$(this).css('display', 'table')
		}
		else{
			$(this).css('display', 'none')
		}
	});

	var artists = $(".artist");
	
	artists.sort(function() { return 0.5 - Math.random() });

	$(".artist").each(function (index, value){
		//$(value).replaceWith(artists[index]);
	});
});

$(window).scroll(init);

function init(){

}
