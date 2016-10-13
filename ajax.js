//461907d1493ba089
//Visa receptbetyg     GET https://edu.oscarb.se/sjk15/api/recipe/?api_key=461907d1493ba089&recipe=tiger_kaka

//Rösta på ett recept   GET https://edu.oscarb.se/sjk15/api/recipe/?api_key=461907d1493ba089&recipe=tiger_kaka&rating=4


// JavaScript (jQuery) för att hämta SMHI data (med AJAX)
function showVotes() {
	$("#messageDiv").html("<b>Hämtar röster... Var god vänta...</b>");
	$.ajax({
		method: "GET",
		url: "https://edu.oscarb.se/sjk15/api/recipe/?api_key=461907d1493ba089&recipe=tiger_kaka",
		success: function (data) {
			$('#rating1').text(data.rating);
			$('#vote').text(data.votes);
			$('#recipe').text(data.recipe);
			$("#messageDiv").empty();
		}
	});
}



$('.rating a').click(function () {
	var star = $(this);
	var rateValue = star.text();
	// Kod som körs när man klickar på knappen
	var url = "https://edu.oscarb.se/sjk15/api/recipe/?api_key=461907d1493ba089&";
	var params = "recipe=tiger_kaka&rating=" + rateValue;
	$("#messageDiv").html("<b>Skickar din röst... Var god vänta...</b>");

	$.ajax({
		method: "GET",
		data: { user_rating: rateValue },
		url: url + params,
		success: function (data) {
			showVotes();
			$("#messageDiv").empty();
		}
	});
});

$(document).ready( function(){
	showVotes();
});