

//461907d1493ba089
//Visa receptbetyg     GET https://edu.oscarb.se/sjk15/api/recipe/?api_key=461907d1493ba089&recipe=tiger_kaka




//Rösta på ett recept   GET https://edu.oscarb.se/sjk15/api/recipe/?api_key=461907d1493ba089&recipe=tiger_kaka&rating=4



// JavaScript (jQuery) för att hämta SMHI data (med AJAX)
 
 
$('.rating a').click(function() {
    // Kod som körs när man klickar på knappen
	console.log("dsada");
    $.ajax({
        method: "GET",
        url: "https://edu.oscarb.se/sjk15/api/recipe/?api_key=461907d1493ba089&recipe=tiger_kaka",
        success: function(data) {
            // JSON.stringify(data) gör om JavaScript objekt till en sträng
            // Den första temperaturen på första dagen ges med
            // data["timeseries"][0]["t"]
            // data.timeseries[0].t
		            $('#rating1').text(data.rating);
					$('#vote').text(data.votes);
				   $('#recipe').text(data.recipe);

			
				
             
             
        }
    });
 
});
$('.rating a').click(function() {
$(document).ready( function(){
    $.ajax({
        method: "GET",
		data: { user_rating: rating},
        url: "https://edu.oscarb.se/sjk15/api/recipe/?api_key=461907d1493ba089&recipe=tiger_kaka&rating={user_rating}", 
        success: function(data) {
            $('#vote').text(data.votes);      
        },     
    });
});

});


    
  