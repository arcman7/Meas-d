$(document).on("ready",function(){
    var draw = SVG('test').size(300, 300);
    var rect = draw.rect(100, 100).attr({ fill: '#f06' });
    rect.draggable();
})

