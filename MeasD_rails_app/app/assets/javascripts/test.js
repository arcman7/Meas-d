 // $(document).on('ready',function(){
 //    var test = SVG('test').size(1000, 1000)
 //    $('#test').append('<div id="inside-test"></div>');

 //    var vmousedown = false;
 //    var mouseX, mouseY;
 //    var deltaX_old = 0;
 //    var deltaY_old = 0;
 //    var deltaX,deltaY;
 //    var couchContainer = test.nested();

 //    var rect = couchContainer.rect(100, 200)
 //    couchContainer.move(100,100);

 //     var selectTop, selectBottom, selectLeft, selectRight;
 //    selectTop = couchContainer.line(0,0,0,0).stroke({width: 1}); selectBottom = couchContainer.line(0,0,0,0).stroke({width: 1}); selectLeft = couchContainer.line(0,0,0,0).stroke({width: 1}); selectRight = couchContainer.line(0,0,0,0).stroke({width: 1});
 //    var knob = couchContainer.circle(0).stroke({color: "blue", width: 2});
 //    var connectKnob = couchContainer.circle(0);
 //    var connectLine = couchContainer.line(0,0,0,0);
 //    connectKnob.attr({fill: "blue"});
 //    knob.attr({ fill: "green"});
 //    var padding=3;
 //    //added everything to nested svg - couchContainer

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





 //    //var elem = $("#SvgjsRect1007");
 //        var elem = document.body;




 //   elem.addEventListener("mousedown", function(ev)
 //    {
 //        vmousedown = true;
 //        mouseX = ev.pageX;
 //        mouseY = ev.pageY;

 //    });
 //    elem.addEventListener("mousemove", function(ev)
 //    {
 //        if (vmousedown === false)
 //            return;
 //        deltaX = ev.pageX - mouseX;
 //        deltaY = ev.pageY - mouseY;
 //        theta = Math.atan(deltaY/deltaX); degrees = theta*(360/(2*Math.PI))
 //        couchContainer.rotate(degrees);

 //    })



 //    elem.addEventListener("mouseup", function(ev)
 //    {
 //        theta = Math.atan(deltaY/deltaX); degrees = theta*(360/(2*Math.PI))
 //        couchContainer.rotate(degrees);
 //        vmousedown = false;
 //        deltaX_old = 0;
 //        deltaY_old = 0;

 //    });


 // })


/////////////////
 $(document).on('ready',function(){
    var test = SVG('test').size(1000, 1000)
    $('#test').append('<div id="inside-test"></div>');
    var rect = test.rect(100,200);
    rect.move(300,300);
    var rect2 = test.rect(300,240);
    rect2.move(600,600);
    var set = test.set()
    set.add(rect); set.add(rect2);
    var vmousedown = false;
    var mouseX, mouseY;
    var deltaX_old = 0;
    var deltaY_old = 0;
    var deltaX,deltaY;
    var centerX,centerY;


     var selectTop, selectBottom, selectLeft, selectRight;
    selectTop = test.line(0,0,0,0).stroke({width: 1}); selectBottom = test.line(0,0,0,0).stroke({width: 1}); selectLeft = test.line(0,0,0,0).stroke({width: 1}); selectRight = test.line(0,0,0,0).stroke({width: 1});
    var knob = test.circle(0).stroke({color: "blue", width: 2});
    var connectKnob = test.circle(0);
    var connectLine = test.line(0,0,0,0);
    connectKnob.attr({fill: "blue"});
    knob.attr({ fill: "green"});
    var padding=3;
    var set1 = test.set();
    set1.add(selectTop); set1.add(selectBottom); set1.add(selectRight); set1.add(selectLeft);
    set1.add(knob); set1.add(connectKnob); set1.add(connectLine);


    var element = rect;
       var x = element.x() - padding;
       var x2 = x + element.width() + padding;
       var y = element.y() - padding;
       var y2 = y + element.height() + padding;
        selectTop.plot(x, y, x2, y ).stroke({ width: 1});
        selectBottom.plot(x, y2, x2, y2 ).stroke({ width: 1});
        selectLeft.plot(x, y, x, y2 ).stroke({ width: 1});
        selectRight.plot(x2, y, x2, y2 ).stroke({ width: 1});
        knob.radius(4); knob.move(x-2 +(x2-x)/2,y2+18);
        connectKnob.radius(4); connectKnob.move(x-2 +(x2-x)/2,y2);
        connectLine.plot(x+2 +(x2-x)/2,y2+4,x+2 +(x2-x)/2,y2+17).stroke({ width: 1});


        var elem = document.body;


   elem.addEventListener("mousedown", function(ev)
    {
        vmousedown = true;
        mouseX = ev.pageX;
        mouseY = ev.pageY;
    });
    elem.addEventListener("mousemove", function(ev)
    {
        if (vmousedown === false){ return; }

       deltaX = ev.pageX - mouseX - deltaX_old;
       deltaY = ev.pageY - mouseY - deltaY_old;
       deltaX_old = ev.pageX - mouseX;
       deltaY_old = ev.pageY - mouseY;
       centerX = element.cx();
       centerY = element.cy();


       theta = Math.atan(deltaY/deltaX)*(360/(2*Math.PI));
       var a = Math.sqrt( Math.pow((ev.pageX-8 - centerX),2) + Math.pow((ev.pageY-682 - centerY),2) );
       var c = Math.sqrt( Math.pow(deltaX,2) + Math.pow(deltaY,2) );
       if(c != 0){
           var A = 90.0 - theta;
           var C = Math.asin(c*Math.sin(A)/a);
           degrees = C*(360/(2*Math.PI));
           degrees = Math.abs(degrees);
           //console.log("a = " + Math.round(a),"c = " + Math.round(c), "A = "+ A,"C = "+C*(360/(2*Math.PI)), degrees)
           degrees = rect.transform("rotation") + degrees;
           if(degrees > 360){
             degrees = degrees % 360;
           }
           //console.log(degrees);
           rect.rotate(degrees);
           set1.rotate(degrees, centerX, centerY);
       }

    });

    elem.addEventListener("mouseup", function(ev)
    {

       deltaX = ev.pageX - mouseX -deltaX_old;
       deltaY = ev.pageY - mouseY -deltaY_old;
       centerX = element.cx();
       centerY = element.cy();

       theta = Math.atan(deltaY/deltaX)*(360/(2*Math.PI));
    var a = Math.sqrt( Math.pow((ev.pageX-8 - centerX),2) + Math.pow((ev.pageY-682 - centerY),2) );
       var c = Math.sqrt( Math.pow(deltaX,2) + Math.pow(deltaY,2) );
       if(c != 0){
           var A = 90.0 - theta;
           var C = Math.asin(c*Math.sin(A)/a);
           degrees = C*(360/(2*Math.PI));
           degrees = Math.abs(degrees);
           //console.log("a = " + Math.round(a),"c = " + Math.round(c), "A = "+ A,"C = "+C*(360/(2*Math.PI)), degrees)
           degrees = rect.transform("rotation") + degrees;
           if(degrees > 360){
             degrees = degrees % 360;
           }
           //console.log(degrees);
           rect.rotate(degrees);
           set1.rotate(degrees, centerX, centerY);
           vmousedown = false;
           deltaX_old = 0;
           deltaY_old = 0;
       }
        vmousedown = false;
        deltaX_old = 0;
        deltaY_old = 0;
    });


 })
