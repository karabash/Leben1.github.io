//$('.rating a').click(function () {
//	var star = $(this);
//	star.addClass('checked');
//	return false;
//});
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
	return false;
});
