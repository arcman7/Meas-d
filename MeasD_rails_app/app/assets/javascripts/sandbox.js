
// $(document).ready(function(){
//   var draw = SVG('drawing').size(800, 600)

//   var roomWidth = 400;
//   var roomLength = 250;
//   var line = draw.line(0,500, 800,500).stroke({ width: 1 })

//   var room = draw.rect(roomWidth,roomLength)
//   room.fill('white')
//   room.stroke({color: 'black', width: 1})
//   room.move(200,50)

//   $('#room_form').submit(function(e){
//     e.preventDefault();
//     room.width($('#room_width').val())
//     room.height($('#room_length').val())
//   })

//   var bed = draw.image('assets/bed.png', 50,75)
//   bed.move(50,510)
//   bed.attr('name', 'Bed')
//   bed.attr('value', 'bed')

//   var couch = draw.image('assets/couch.png', 100,50)
//   couch.move(150, 510)
//   couch.attr('name', 'Couch')
//   couch.attr('value', 'couch')

//   var toolBoxFurn = draw.group()
//   toolBoxFurn.add(bed)
//   toolBoxFurn.add(couch)

//   var sandboxFurn = draw.group()
//   sandboxFurn.attr('name', 'sandbox')

//   toolBoxFurn.each(function(){
//     this.on('click', function(){
//       var clone = this.clone()
//       console.log(clone.id())
//       clone.move(0,0)
//       clone.draggable()
//       sandboxFurn.add(clone)
//     })
//   })

//     var element;
//     var selected = false;
//     var a = -1;
//     var selectTop, selectBottom, selectLeft, selectRight;
//     selectTop = draw.line(0,0,0,0).stroke({width: 1}); selectBottom = draw.line(0,0,0,0).stroke({width: 1}); selectLeft = draw.line(0,0,0,0).stroke({width: 1}); selectRight = draw.line(0,0,0,0).stroke({width: 1});
//     var knob = draw.circle(0).stroke({color: "blue", width: 2});
//     var connectKnob = draw.circle(0);
//     var connectLine = draw.line(0,0,0,0);
//     connectKnob.attr({fill: "blue"});
//     knob.attr({ fill: "green"});
//     var padding=3;



//     $('svg').on('click', function(){
//       if(a>-1){ a -= 1; }

//         //console.log("event -",a);
//        //console.log(this.getAttribute('id'));
//       // console.log(element.type);
//       if(a == -1 ){
//         selectTop.plot(0,0,0,0).stroke({ width: 1});
//         selectBottom.plot(0,0,0,0).stroke({ width: 1});
//         selectLeft.plot(0,0,0,0).stroke({ width: 1});
//         selectRight.plot(0,0,0,0).stroke({ width: 1});
//         knob.radius(0);
//         connectKnob.radius(0);
//         connectLine.plot(0,0,0,0).stroke({ width: 1});
//       }

//     })
// //$('svg').on('click', 'g')*******************************

// $('svg').on('click', 'g[name="sandbox"] image', function(){
//       if(a==-1){a +=2;}
//       if(a==0){a+=1}
//       element = SVG.get(this.getAttribute('id'))
//       //console.log("event +",a);

//     if(a == 1 || 0 ){
//        var x = element.x() - padding;
//        var x2 = x + element.width() + padding;
//        var y = element.y() - padding;
//        var y2 = y + element.height() + padding;
//         selectTop.plot(x, y, x2, y ).stroke({ width: 1});
//         selectBottom.plot(x, y2, x2, y2 ).stroke({ width: 1});
//         selectLeft.plot(x, y, x, y2 ).stroke({ width: 1});
//         selectRight.plot(x2, y, x2, y2 ).stroke({ width: 1});
//         knob.radius(4); knob.move(x-2 +(x2-x)/2,y2+18)
//         connectKnob.radius(4); connectKnob.move(x-2 +(x2-x)/2,y2);
//         connectLine.plot(x+2 +(x2-x)/2,y2+4,x+2 +(x2-x)/2,y2+17).stroke({ width: 1});
//      }
//   })
//     //update form for the furniture
//     $('svg').on('click', 'g[name="sandbox"] image', function(){
//       element = SVG.get(this.getAttribute('id'))
//       $('#furn_name').val(element.attr('name'))
//       $('#furn_width').val(element.width())
//       $('#furn_length').val(element.height())
//       $('#furn_rotation').val(element.transform('rotation'))
//     })

//     //update the furniture based on form input
//     $('#furniture_form').on('submit', function(e){
//       e.preventDefault()
//       element.attr('name', $('#furn_name').val())
//       element.width($('#furn_width').val())
//       element.height($('#furn_length').val())
//       element.transform({ rotation: $('#furn_rotation').val() })
//     })

// })
