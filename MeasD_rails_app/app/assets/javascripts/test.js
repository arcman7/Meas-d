$(document).on("ready",function(){
    var drawT = SVG('test').size(500, 500);
    var groupT = drawT.group();
    var rectT = drawT.rect(53, 53).attr({ fill: 'white' });
    rectT.stroke({ color: 'black', opacity: 1, width: 1 })
    var rectR = drawT.rect(50, 50).attr({ fill: '#f86' });
     var set = drawT.set();
     set.add(rectT);
     set.add(rectR);
     rectR.select();
     //rectR.draggable();
     // set.drag = function(){
     //  x1 = set.last.x();
     //  y1 = set.last.y();
     //  };
     var box1 = drawT.rect(100,100).move(50,50);
     var box2 = drawT.rect(100,100).move(200,200);
     //var box3 = box1.merge(box2);

})

