$(document).ready(
    function()
    {

		$('#switch').click(function() {
			// var a = $('#english').attr('display');
			// alert(a);		
			// if ( a == 'none'){

			// 	$('#english').fadeToggle('slow', 'linear');
			// 	$('#chinese').fadeToggle('slow', 'linear');
			// }
			// else {
			// 	// $('#chinese').fadeToggle('slow', 'linear');
			//  //    $('#english').fadeToggle('slow', 'linear');
			// }
			  
			// });
			document.getElementById('player').play();
	        $(".blog-main-content:visible").fadeOut("normal");
	        $(".blog-main-content:hidden").fadeIn("slow");

    		});

    }
);