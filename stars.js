$(function()
  {
$('.tomStar1').hover(function()//on over			
{

    $(this).prevAll().attr('src', '2.png');
	$(this).attr('src', '2.png');

	
},
	function()//on out
{
	$('.tomStar1').attr('src', '1.png');
})
})