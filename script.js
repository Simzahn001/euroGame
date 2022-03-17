$(document).ready(function() {

	var clicks = 0;
	
    $(".button").on("click",function() {

		//increase the counter
		let count = $(".count");
    	count.text(parseInt(count.text()) + 1);


		//make the button disabled
    	$(".button").prop('disabled', true);
    	setTimeout(function() {$(".button").prop('disabled', false)}, 5);


		//keep the cps
		let cps = $(".cps");
		clicks = clicks + 1;
		setTimeout(function () {clicks = clicks-1; refreshCps();}, 3*1000)
		refreshCps()

		function refreshCps() {
			cps.text(parseFloat(clicks/3).toFixed(2));
		}

    });

});

