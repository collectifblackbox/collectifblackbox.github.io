
$( document ).ready(function() {

	var $grid = $('.grid').imagesLoaded( function() {
	  	$grid.masonry({
		    itemSelector: '.grid-item',
		    percentPosition: true,
		    columnWidth: '.grid-sizer'
	  	});
	 });
  	var $grid_artistes = $('.grid2').imagesLoaded( function() {
	  	$grid_artistes.masonry({
		    itemSelector: '.grid-item2',
		    percentPosition: true,
		    columnWidth: '.grid-sizer2'
	  	});
	});
});

$(window).scroll(init);
function init(){

}
