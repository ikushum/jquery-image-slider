var img_number=1;
var new_img_number=2;
var loop;

$(document).ready(function(){
	$("img#ikushum_image_1").show();
	total_image = $("#ikushum_image_slider img").length;
	startslideshow();
});

function startslideshow(){
	loop = setInterval(function(){
  		if(img_number==total_image){
			new_img_number=1;
		}	
		else
			new_img_number=img_number+1;

		slide_forward();

	},5000);
};

function slide_forward(){
		$("img#ikushum_image_"+img_number).hide('slide',{direction:'left'},1000);
		$("img#ikushum_image_"+new_img_number).show('slide',{direction:'right'},1000);
		 img_number=new_img_number;
};

function slide_backward(){
		$("img#ikushum_image_"+img_number).hide('slide',{direction:'right'},1000);
		$("img#ikushum_image_"+new_img_number).show('slide',{direction:'left'},1000);
 		img_number=new_img_number;
};

function next(){
	stoploop();
	if(img_number==total_image)
		new_img_number=1;
	else
		new_img_number=img_number+1;
	slide_forward();
	startslideshow();
}

function prev(){
	stoploop();
	if(img_number==1)
		new_img_number=total_image;
	else
		new_img_number=img_number-1;
	slide_backward();
	startslideshow();

}

function stoploop(){
	window.clearInterval(loop);	
}







