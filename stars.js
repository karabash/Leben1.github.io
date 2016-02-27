jQuery(function() {

var rating = {
	init: function() {
  	$('.rating').on('mouseover mousedown', '.star', this.doEvent);
  },
  
	doEvent: function(event) {
  	var srcEl = $(this),
    		rate;
    
  	switch(event.type) {
    	case 'mouseover':
      	// turn off all stars
      	srcEl.parent().find('.active').removeClass('active');
        // turn on only affected stars
      	srcEl.addClass('active')
        	.prevAll('.star').addClass('active');
      	break;
    	case 'mousedown':
      	// since elements starts counting with 'zero' as first
      	rate = srcEl.index() + 1;
      	alert(rate);
      	break;
    }
  }
};

rating.init();

});