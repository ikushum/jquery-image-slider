$(document).ready(function(){

	$("img#ikushum_image_1").delay(5000).show();
	$("img#ikushum_image_1").hide('slide',{direction:'left'},1000);

	var count=2;

	setInterval(function(){

		$("img#ikushum_image_"+count).show('slide',{direction:'right'},1000);
		$("img#ikushum_image_"+count).delay(4000).hide('slide',{direction:'left'},1000);

		count=count+1;
		if(count==4)
			count=1;
	},5000);

});