 // $(document).on('ready',function(){
 //    var test = SVG('test').size(1000, 1000)
 //    $('#test').append('<div id="inside-test"></div>');
 //    var rect = test.rect(100,200);
 //    rect.move(300,300);
 //    var rect2 = test.rect(300,240);
 //    rect2.move(600,600);
 //    var set = test.set()
 //    set.add(rect); set.add(rect2);
 //    var vmousedown = false;
 //    var mouseX, mouseY;
 //    var deltaX_old = 0;
 //    var deltaY_old = 0;
 //    var deltaX,deltaY;

 //     var selectTop, selectBottom, selectLeft, selectRight;
 //    selectTop = test.line(0,0,0,0).stroke({width: 1}); selectBottom = test.line(0,0,0,0).stroke({width: 1}); selectLeft = test.line(0,0,0,0).stroke({width: 1}); selectRight = test.line(0,0,0,0).stroke({width: 1});
 //    var knob = test.circle(0).stroke({color: "blue", width: 2});
 //    var connectKnob = test.circle(0);
 //    var connectLine = test.line(0,0,0,0);
 //    connectKnob.attr({fill: "blue"});
 //    knob.attr({ fill: "green"});
 //    var padding=3;
 //    var set1 = test.set();
 //    set1.add(selectTop); set1.add(selectBottom); set1.add(selectRight); set1.add(selectLeft);
 //    set1.add(knob); set1.add(connectKnob); set1.add(connectLine);

 //    var element = rect;
 //       var x = element.x() - padding;
 //       var x2 = x + element.width() + padding;
 //       var y = element.y() - padding;
 //       var y2 = y + element.height() + padding;
 //        selectTop.plot(x, y, x2, y ).stroke({ width: 1});
 //        selectBottom.plot(x, y2, x2, y2 ).stroke({ width: 1});
 //        selectLeft.plot(x, y, x, y2 ).stroke({ width: 1});
 //        selectRight.plot(x2, y, x2, y2 ).stroke({ width: 1});
 //        knob.radius(4); knob.move(x-2 +(x2-x)/2,y2+18);
 //        connectKnob.radius(4); connectKnob.move(x-2 +(x2-x)/2,y2);
 //        connectLine.plot(x+2 +(x2-x)/2,y2+4,x+2 +(x2-x)/2,y2+17).stroke({ width: 1});
 //       var X = x + (x2-x)/2 ; //center of sofa element
 //       var Y = y + (y2-y)/2 ; //center of sofa element
 //        //define radii
 //        var radii = [];
 //        set1.each(function(){
 //           var x = element.x();
 //           var x2 = x + element.width();
 //           var y = element.y();
 //           var y2 = y + element.height();
 //           var centerX = x + (x2-x)/2 ;
 //           var centerY = x + (x2-x)/2 ;


 //        });

 //    //var elem = $("#SvgjsRect1007");
 //        var elem = document.body;




 //   elem.addEventListener("mousedown", function(ev)
 //    {
 //        vmousedown = true;
 //        mouseX = ev.pageX;
 //        mouseY = ev.pageY;
 //        var startCoords = [];
 //        var deltaCoords = [];
 //        set1.each(function(){
 //            startCoords.push( [this.x(),this.y(),] );
 //            deltaCoords.push( [0,0]);
 //        })

 //    });
 //    elem.addEventListener("mousemove", function(ev)
 //    {
 //        if (vmousedown === false)
 //            return;
 //        deltaX = ev.pageX - mouseX;
 //        deltaY = ev.pageY - mouseY;
 //        theta = Math.atan(deltaY/deltaX); degrees = theta*(360/(2*Math.PI))
 //        set.rotate(degrees);
 //        set1.rotate(degrees)
 //        set1.each(function(i){
 //            var delx = ev.pageX - startCoords[i][0];
 //            var dely = ev.pageY - startCoords[i][1];
 //           deltaCoords[i] = [delx,dely]
 //        })

 //    });

 //    elem.addEventListener("mouseup", function(ev)
 //    {
 //        theta = Math.atan(deltaY/deltaX); degrees = theta*(360/(2*Math.PI))
 //        set.rotate(degrees);
 //        vmousedown = false;
 //        deltaX_old = 0;
 //        deltaY_old = 0;

 //    });


 // })
