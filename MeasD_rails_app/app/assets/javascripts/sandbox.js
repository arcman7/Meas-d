
$(document).ready(function(){
  var draw = SVG('drawing').size(800, 600)

  var roomWidth = 400;
  var roomLength = 250;
  var line = draw.line(0,500, 800,500).stroke({ width: 1 })

  var room = draw.rect(roomWidth,roomLength)
  room.fill('white')
  room.stroke({color: 'black', width: 1})
  room.move(200,50)

  $('#room_form').submit(function(e){
    e.preventDefault();
    room.width($('#room_width').val())
    room.height($('#room_length').val())
  })

  var bed = draw.image('assets/bed.png', 50,75)
  bed.move(50,510)

  var couch = draw.image('assets/couch.png', 100,50)
  couch.move(150, 510)

  var toolBoxFurn = draw.group()
  toolBoxFurn.add(bed)
  toolBoxFurn.add(couch)

  toolBoxFurn.each(function(i, children){
    this.on('click', function(){
    var clone = this.clone()
    clone.move(0,0)
    clone.draggable({
      minX: 0
    , minY: 0
    , maxX: 800
    , maxY: 350
    })
    // clone.on('click')

  })
  })



})