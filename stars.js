/*,


$('.tomStar1').hover(function()//on over			
{

    $(this).prevAll().attr('src', '2.png');
		
	$(this).attr('src', '2.png');
	
	
	function()//on out
{
	$('.tomStar1').attr('src', '1.png');
})
	.click(function(){
	var src = $(this).attr('src');
	console.log(src);
	$(this).prevAll().attr('src', '2.png');
	$(this).attr('src', '2.png');
});

/*$('.star').hover(function(){
	$(this).addClass('active');
	$(this).prevAll.addClass('active');
},
function(){
	$(this).removeClass('active');
	
});*/

<<<<<<< HEAD
$('.rating a').click(function () {
	var star = $(this);
	star.closest('ul').find('.checked').removeClass('checked');
	star.addClass('checked');
=======
$('.rating a').click(function(){
    var star = $(this);
    star.closest('ul').find('.checked').removeClass('checked');
    star.addClass('checked');
>>>>>>> origin/master
	return false;

});