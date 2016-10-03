# jquery-image-slider
This is a simple image slider that you can use for your website.

# How To Use

1. * Run `git clone <repository-url>` to have this repository locally in your computer
2. Copy the directory img and files ikushum_image_slider.css and ikushum_image_slider.js to the root directory(containing index.html file) of your website project.
3. In the HEAD section of your HTML file include:

 ``<link rel="stylesheet" type="text/css" href="ikushum_image_slider.css">`` 

 ``<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>``
 
 ``<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.0/jquery-ui.min.js"></script>``
  
4. From the HTML file of this repository copy the ikushum_image_slider div and slider_controller div to the HTML file of your project.

5. The image used for the slider should be placed inside the img directory and should be named img1.jpg, img2.jpg and so on. 

6. For every image inside the img directory there should be a corresponding img tag in the html file with class ikushum_image and id ikushum_image_1, ikushum_image_2 and so on.

7. Also for every image inside the img directory there should be a div with class circle and id circle_1, circle_2 and so on inside the div with id slider_controller.

8. It is highly recommended that all the images used for the slider should be of the same size of 1000 X 400 dimension. However if you want to use image of different dimension then go to the ikushum_image_slider.css file and change the width and height property of #ikushum_image_slider as your desire.






