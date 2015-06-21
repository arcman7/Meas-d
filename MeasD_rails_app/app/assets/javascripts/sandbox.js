
$(document).ready(function(){
  var draw = SVG('drawing').size(800, 400)
//   var rect = draw.rect(100, 100).fill('#f06')
//   rect.draggable({
//   minX: 10
// , minY: 15
// , maxX: 200
// , maxY: 300
// });
  var roomWidth = 400;
  var roomLength = 250;
  var line = draw.line(0,350, 800,350).stroke({ width: 1 })

  var room = draw.rect(roomWidth,roomLength)
  room.fill('white')
  room.stroke({color: 'black', width: 1})
  room.move(200,50)

  var bed = draw.image('assets/bed.png', 75,50).move(50,350)

  bed.on('click', function(){
    console.log('bed clicked')
  })

  bed.on('mousedown', function(){
    var clone = bed.clone()
    clone.move(0,0)
    clone.draggable({
      minX: 200
    , minY: 50
    , maxX: 600
    , maxY: 300
    })
  })

})