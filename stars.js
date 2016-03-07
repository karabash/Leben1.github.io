
var currentSelectedStarCount = 0;

$('.rating a').hover(function ()
{
	console.log("hover");
	var star = $(this);
	var checkedStarsCount = $(".checked-star").length;
	var currentStarNr = star.text();
	console.log(currentStarNr + " " + currentStarNr);

	if (!star.hasClass("checked-star") && (currentSelectedStarCount == 0 || currentStarNr > currentSelectedStarCount))
	{
		var previousStars = $(star.parent().prevAll("li").find(".unchecked-star"));
		console.log("has not " + previousStars.length);
		previousStars.addClass("checked-star");
		previousStars.removeClass("unchecked-star");
		star.addClass("checked-star");
		star.removeClass("unchecked-star");
	}
	return false;
});

$('.rating a').mouseout(function () {
	console.log("mouseout");
	var star = $(this);
	var checkedStarsCount = $(".checked-star").length;
	var currentStarNr = star.text();
	console.log(currentStarNr + " " + currentStarNr);

	if (star.hasClass("checked-star") && (currentSelectedStarCount == 0))
	{
		var previousStars = $(star.parent().prevAll("li").find(".checked-star"));
		previousStars.removeClass("checked-star");
		previousStars.addClass("unchecked-star");
		star.removeClass("checked-star");
		star.addClass("unchecked-star");
	}
	else
	{
		if (currentStarNr > currentSelectedStarCount) {
			star.removeClass("checked-star");
			star.addClass("unchecked-star");
		}
	}
	return false;
});

$('.rating a').click(function ()
{
	var star = $(this);
	$(".checked-star").addClass("unchecked-star");
	$(".checked-star").removeClass("checked-star");
	var previousStars = $(star.parent().prevAll("li").find(".unchecked-star"));
	previousStars.removeClass("unchecked-star");
	previousStars.addClass("checked-star");
	star.addClass("checked-star");
	star.removeClass("unchecked-star");
	currentSelectedStarCount = $(".checked-star").length;
	$("#debug").text(currentSelectedStarCount);
=======
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

$('.rating a').click(function () {
	var star = $(this);
	star.closest('ul').find('.checked').removeClass('checked');
	star.addClass('checked');
	return false;


});
