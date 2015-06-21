$(document).on('ready',function(){

var elem = document.getElementById('draw-groups').children[0];

var two = new Two({ width: 1000, height: 1000 }).appendTo(elem);

var circle = two.makeCircle(70, 0, 50);
var moveObj = function(deltaX,deltaY){
  circle.translation.x += deltaX;
  circle.translation.y += deltaY;
}
//var rect = two.makeRectangle(70, 0, 100, 100);
circle.fill = '#FF8000';
circle.stroke = 'orangered';
//rect.fill = 'rgba(0, 200, 255, 0.75)';
//rect.stroke = '#1C75BC';

// Groups can take an array of shapes and/or groups.
//var group = two.makeGroup(circle, rect);
var group = two.makeGroup(circle);

// And have translation, rotation, scale like all shapes.
group.translation.set(two.width / 2, two.height / 2);
//group.rotation = Math.PI;
group.scale = 0.75;

// You can also set the same properties a shape have.
group.linewidth = 7;
//two.update();
 two.play();


// group.bind('click',function(){
//   var copy = group.clone();
//   two.add(copy);
//   two.update();
// })

$('#two_2').on('click',function(event){
      var copy = group.clone();
      //console.log(copy.children)
      //var circle = copy.children.two_5

      two.add(copy);
      copy.translation.set(two.width/2 +200, two.height/2);
      //var copy_selector = $( copy.id);
      //var circle = $(this).children()[1].clone();
      var circle_selector = $('#'+copy.id);
      two.add(copy);
      two.update();

      //circle_selector.draggable();
      circle_selector.addClass("ui-draggable ui-draggable-handle")
      //circle_selector.children.draggable();
      console.log(circle_selector);
    console.log(circle_selector.children()[0])
    //console.log(circle);
  });

// $('div').draggable();
var vmousedown = false;
    var mouseX, mouseY;
    var deltaX_old = 0;
    var deltaY_old = 0;
    var deltaX,deltaY;

    elem.addEventListener("mousedown", function(ev)
    {
        console.log("clicked down")
        vmousedown = true;
        mouseX = ev.pageX;
        mouseY = ev.pageY;

    });

   elem.addEventListener("mousemove", function(ev)
    {
        if (vmousedown === false)
            return;
        deltaX = ev.pageX - mouseX - deltaX_old;
        deltaY = ev.pageY - mouseY - deltaY_old;

        moveObj(deltaX,deltaY,circle);

        deltaX_old = ev.pageX - mouseX;
        deltaY_old = ev.pageY - mouseY;
    });

    elem.addEventListener("mouseup", function(ev)
    {
        console.log('released mouse')
        vmousedown = false;
        deltaX_old = 0;
        deltaY_old = 0;

    });


// Make an instance of two and place it on the page.
    // var elem = document.body;
    // var params = { width: 1000, height: 1000 };
    // var two = new Two(params).appendTo(elem);

    // console.log(two);
    // //two.antialias = true;
    // // two has convenience methods to create shapes.
    // var circle = two.makeCircle(72, 100, 50);
    // var rect = two.makeRectangle(213, 100, 100, 100);

    // // The object returned has many stylable properties:
    // circle.fill = '#FF8000';
    // circle.stroke = 'red'; // Accepts all valid css color
    // circle.linewidth = 5;

    // rect.fill = 'rgb(0, 200, 255)';
    // //rect.opacity = 0.75;
    // rect.noStroke();

    // // Don't forget to tell two to render everything
    // // to the screen


    // two.play();


    // function pan(deltaX, deltaY,shape){

    //     shape.translation.x += deltaX;
    //     shape.translation.y += deltaY;


    // }

    // var vmousedown = false;
    // var mouseX, mouseY;
    // var deltaX_old = 0;
    // var deltaY_old = 0;
    // var deltaX,deltaY;

    // elem.addEventListener("mousedown", function(ev)
    // {
    //     vmousedown = true;
    //     mouseX = ev.pageX;
    //     mouseY = ev.pageY;

    // });

    // elem.addEventListener("mousemove", function(ev)
    // {
    //     if (vmousedown === false)
    //         return;
    //     deltaX = ev.pageX - mouseX - deltaX_old;
    //     deltaY = ev.pageY - mouseY - deltaY_old;

    //     pan(deltaX,deltaY,circle);

    //     deltaX_old = ev.pageX - mouseX;
    //     deltaY_old = ev.pageY - mouseY;
    // });

    // elem.addEventListener("mouseup", function(ev)
    // {
    //     vmousedown = false;
    //     deltaX_old = 0;
    //     deltaY_old = 0;

    // });

})

