
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
  bed.attr('name', 'Bed')
  bed.attr('value', 'bed')

  var couch = draw.image('assets/couch.png', 100,50)
  couch.move(150, 510)
  couch.attr('name', 'Couch')
  couch.attr('value', 'couch')

  var toolBoxFurn = draw.group()
  toolBoxFurn.add(bed)
  toolBoxFurn.add(couch)

  var sandboxFurn = draw.group()
  sandboxFurn.attr('name', 'sandbox')

  toolBoxFurn.each(function(){
    this.on('click', function(){
      var clone = this.clone()
      console.log(clone.id())
      clone.move(0,0)
      clone.draggable()
      sandboxFurn.add(clone)
    })
  })

    var element;
    var selected = false;
    var selectTop, selectBottom, selectLeft, selectRight;
    var padding=3;
    $('svg').on('mousedown', 'g[name="sandbox"] image', function(){
      selected = true;
      if(selected){
       var x = element.x() - padding;
       var x2 = x + element.width() + padding;
       var y = element.y() - padding;
       var y2 = y + element.height() + padding;
      }
      selectTop = draw.line(x, y, x2, y ).stroke({ width: 1});
      selectBottom = draw.line(x, y2, x2, y2 ).stroke({ width: 1});
      selectLeft = draw.line(x, y, x, y2 ).stroke({ width: 1});
      selectRight = draw.line(x2, y, x2, y2 ).stroke({ width: 1});
   //line.plot(x+2, y+2, x2-2, y+2);
    })
    //update form for the furniture
    $('svg').on('click', 'g[name="sandbox"] image', function(){
      element = SVG.get(this.getAttribute('id'))
      $('#furn_name').val(element.attr('name'))
      $('#furn_width').val(element.width())
      $('#furn_length').val(element.height())
      $('#furn_rotation').val(element.transform('rotation'))
    })

    //update the furniture based on form input
    $('#furniture_form').on('submit', function(e){
      e.preventDefault()
      element.attr('name', $('#furn_name').val())
      element.width($('#furn_width').val())
      element.height($('#furn_length').val())
      element.transform({ rotation: $('#furn_rotation').val() })
    })
   //var lineW = draw.line(52, 52, 448, 52 ).stroke({ width: 1 });
  })
