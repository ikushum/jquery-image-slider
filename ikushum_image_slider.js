var img_number=1;
var new_img_number=2;
var old_img_number=0;
var loop;

$(document).ready(function(){
	$("img#ikushum_image_1").show();
	$("#circle_"+img_number).css("border","5px solid black");


	total_image = $("#ikushum_image_slider img.ikushum_image").length;

	$(".arrow").hover(function(){
		$(this).stop(true,true).toggleClass('arrow_hover',250);
	});

    $(document).keydown(function (e){
    	if(e.keyCode==39) //right key
    		next();
    	if(e.keyCode==37) //left key
    		prev();
	});

	startslideshow();
});

function startslideshow(){
	loop = setInterval(function(){
  		if(img_number==total_image){
			new_img_number=1;	
			old_img_number=total_image;
		} else{
			new_img_number = img_number+1;
			old_img_number = img_number
		}

		slide_forward();
		slider_controller();

	},5000);
};

function slide_forward(){
		$("img#ikushum_image_"+img_number).stop(true,true).fadeOut(1000);
		$("img#ikushum_image_"+new_img_number).stop(true,true).fadeIn(1000);
		 img_number=new_img_number;
};

function slide_backward(){
		$("img#ikushum_image_"+img_number).stop(true,true).fadeOut(1000);
		$("img#ikushum_image_"+new_img_number).stop(true,true).fadeIn(1000);
 		img_number=new_img_number;
};

function next(){
	window.clearInterval(loop);	
	if(img_number==total_image){
		new_img_number = 1;
		old_img_number = total_image;
	} else {
		new_img_number=img_number+1;
		old_img_number = img_number;
	}
	slide_forward();
	slider_controller();
	startslideshow();
}

function prev(){
	window.clearInterval(loop);	
	if(img_number==1){
		new_img_number=total_image;
		old_img_number = 1;
	} else {
		new_img_number=img_number-1;
		old_img_number = img_number;
	}

	slide_backward();
	slider_controller();
	startslideshow();
}

function slider_controller(){
	$("#circle_"+new_img_number).css("border","5px solid black");
	$("#circle_"+(old_img_number)).css("border","2px solid black");
}







