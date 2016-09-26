	var img_number=1;
	var new_img_number=2;
	var move="right";

$(document).ready(function(){

	function slide_forward(img_number,new_img_number){
		$("img#ikushum_image_"+img_number).hide('slide',{direction:'left'},1000);
		$("img#ikushum_image_"+new_img_number).show('slide',{direction:'right'},1000);
	}

	function slide_backward(img_number,new_img_number){
		$("img#ikushum_image_"+img_number).hide('slide',{direction:'right'},1000);
		$("img#ikushum_image_"+new_img_number).show('slide',{direction:'left'},1000);
	}

	$("img#ikushum_image_1").show();

	var interval = setInterval(function(){

		$(document).keydown(function (e){
			if(e.keyCode==37){ //left key
				move="left";
			}
  			else if(e.keyCode==39)
  				move="right";
  		});

  		if(move=="right"){
  			if(img_number==3)
				new_img_number=1;
			else
				new_img_number=img_number+1;
			slide_forward(img_number,new_img_number);
		}
		else if(move="left"){
			if(img_number==1)
				new_img_number=3;
			else
			new_img_number=img_number-1;	
			slide_backward(img_number,new_img_number);
		}

  		img_number=new_img_number;


	},5000);

});