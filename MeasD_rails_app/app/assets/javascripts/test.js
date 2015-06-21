$(document).on("ready",function(){
    var draw = SVG('test').size(500, 500);
    var group = draw.group()
    var rect = draw.rect(100, 100).attr({ fill: '#f06' });
    var rect2 = draw.rect(50, 50).attr({ fill: '#f86' });

    rect.draggable();
})

