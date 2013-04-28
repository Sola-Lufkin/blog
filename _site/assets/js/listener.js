$(document).ready(function() {
	// $.get(
	// 	// "https://api.weibo.com/2/statuses/mentions.json?filter_by_type=0&access_token=2.00I28PyBlvrPeC4f0f439b1aioR6GD",
	// 	'http://127.0.0.1:8000/ajax/listener/&callback=?http://localhost:4000/blog/test2.html',
	// 	function() {
 //  				console.log( "success" );
	// 	})

		lastid = 3570921833385620;
		console.log(lastid);

		var iMaxX = 1366-100;
		var iMaxY = 443-100;
		//The distance between two Div
		var iDivWidth = 130;
		var iDivHeight = 130;

		var oPosition = new Object();
			oPosition.x = 0;
			oPosition.y = 0;

		var aX = new Array();
		var aY = new Array();		

		var sleep = function(n)
		{
		  var start=new Date().getTime();
		  console.log("pause")
		  while(true) if(new Date().getTime()-start>n) break;
		}

		var showeffct = function(div)
		{
			div.animate({height:'200px',width:'200px',opacity:'0.4'},'slow');
			div.animate({height:'100px',width:'100px',opacity:'1'},'slow');
		}

		//Check is there interact on each onther
		var isInteractOnEachOther = function(oPos)
		{
		    // For debug only.
		    //alert(aX+"\n"+aY+"\n"+oPos.x+"\n"+oPos.y);
		    var bIsInteract = false;

		    for (var i=0; i<aX.length; i++)
		    {
		        if ( ((oPos.x>(aX[i]-iDivWidth))&&(oPos.x<(aX[i]+iDivWidth)))
		            && ((oPos.y>(aY[i]-iDivHeight))&&(oPos.y<(aY[i]+iDivHeight))) )
		        {
		            bIsInteract = true;
		            break;
		        }
		    }

		    if (!bIsInteract)
		    {
		        aX[aX.length] = oPos.x;
		        aY[aY.length] = oPos.y;
		    }

		    return bIsInteract;
		}




		// var showmentions = function(data){
		// 	$( "#mentions" ).tmpl( data ).appendTo( "#mentionsdiv" );
		// }

		var addmentions = function(){

			var request_url = "https://api.weibo.com/2/statuses/mentions.json?access_token=2.00I28PyBlvrPeC4f0f439b1aioR6GD"; 

			$.ajax({
					type: "GET",
					url: request_url,
					dataType: "jsonp",
					data: {
						"since_id":lastid,
						"count":20
					},
					success: function(data){
						console.log( data );
						// showmentions(data.data.statuses);
						//addmentions(data.data.statuses);

						mentions = data.data.statuses;
						if(mentions.length>0)
				        {

				          
				          for(var i=0; i<mentions.length; i++)
				          {
				          		//sleep(100);
				          		//for (var a=0; a<1000; a++) { console.log(1) };
				                var mention = mentions[i];
				                // var x = Math.ceil(Math.random()*iMaxX);
        						// var y = Math.ceil(Math.random()*iMaxY);
        						// var x = Math.random()*100;
        						// var y = Math.random()*100;
				                do
						    	{
						        	oPosition.x = Math.ceil(Math.random()*iMaxX);
						        	oPosition.y = Math.ceil(Math.random()*iMaxY);
						    	}
						   		while (isInteractOnEachOther(oPosition));

						   		$("#singlemention").tmpl(mention)
						   		.css({"left": oPosition.x+"px","top": oPosition.y+"px","display": "none",'opacity':'0.8'})
						   		.appendTo("#mentionsdiv")
						   		.fadeIn('slow')
						   		.animate({top:"-=6"},210)
						   		.animate({top:"+=6"},180)
						   		.animate({top:"-=3"},150)
						   		.animate({top:"+=3"},130)
						   		.animate({top:"-=1"},100)
						   		.animate({top:"+=1",opacity:"0.8"},80);
						   		//.animate({height:'130px',width:'130px',opacity:'0.4'},'slow').animate({height:'100px',width:'100px',opacity:'1'},'slow')
						   		
				          } 
				    	
				          lastid = mentions[0].id;
				          console.log(lastid);
				        }
				    	else
				        {
			                console.log("No New Msg!!");
				        }

				        $(".bubbler").hover(
							function(){//鼠标移动到图片触发事件
								    //console.log("hover")
									if(!$(this).is(":animated")){//判断，如果图片不在运动，执行下面代码
										$(this).animate({top:"-=24",opacity:'1'},210).animate({top:"+=24",opacity:'1'},180)//往上6px，回来
										.animate({top:"-=12",opacity:'1'},150).animate({top:"+=12",opacity:'0.8'},130)//往上3px，回来
										.animate({top:"-=4",opacity:'0.8'},100).animate({top:"+=4",opacity:'0.8'},80);//往上1px，回来
										document.getElementById('player').play();
		}
						});


					}
				})			
		}

		addmentions();



		// var sssss = function(){
		//   $(".bubbler").animate({top:"+10px"},500);
		//   //$(".dotB").animate({top:"200px"},500);
		//   $(".bubbler").animate({top:"-10px"},500);
		//   //$(".dotB").animate({top:"0px"},500);
		// setTimeout("sssss()",0)
		// }

		// sssss();

		var message = function(){

			var _time = 30000;
			setInterval(function(){
				addmentions();
			},_time);
		}

		message();

});