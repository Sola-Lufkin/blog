$(document).ready(function() {
	// $.get(
	// 	// "https://api.weibo.com/2/statuses/mentions.json?filter_by_type=0&access_token=2.00I28PyBlvrPeC4f0f439b1aioR6GD",
	// 	'http://127.0.0.1:8000/ajax/listener/&callback=?http://localhost:4000/blog/test2.html',
	// 	function() {
 //  				console.log( "success" );
	// 	})
		$.ajax({
		    // type: "GET",
		    url: "https://api.weibo.com/2/statuses/mentions.json?filter_by_type=0&access_token=2.00I28PyBlvrPeC4f0f439b1aioR6GD",
		    // dataType: "jsonp"
		    success: function(){
						console.log( "success" );
					}
		})
});