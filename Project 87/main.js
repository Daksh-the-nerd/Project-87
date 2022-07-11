

var canvas = new fabric.Canvas("myCanvas");

var rr_width = 300;
var rr_height = 400;
var rr_image_object = "";
var rr_X = 10;
var rr_Y = 10;
var rr_object = "";



function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
    rr_image_object=Img;
    rr_image_object.scaleToWidth(rr_width);
    rr_image_object.scaleToHeight(rr_height);
    rr_image_object.set({
        top:rr_Y,
        left:rr_X
    });
    canvas.add(rr_image_object);
    });
    
    
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keypressed = e.keyCode;
    console.log("hello world")

    if (keypressed == "82")
    {
        rr_X = 10
        new_image("rr1.png")
        console.log("r")
    }

    if (keypressed == "71")
    {
        rr_X = 310
        new_image("gr.png")
        console.log("g")
    }
}

