
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
      clone.draggable({
        minX: 0
        , minY: 0
        , maxX: 800
        , maxY: 350
      })
      sandboxFurn.add(clone)

      // sandboxFurn.each(function(){
      //   // console.log(this)
      //   clone.on('click', function(){
      //     $('#furn_name').val(this.attr('name'))
      //     $('#furn_width').val(this.width())
      //     $('#furn_length').val(this.height())
      //     $('#furn_rotation').val(this.transform('rotation'))
      //     var self = this
      //     $('#furniture_form').submit(function(e){
      //       console.log(self)
      //       e.preventDefault()
      //       self.attr('name', $('#furn_name').val())
      //       self.width($('#furn_width').val())
      //     })
      //   })
      // })

      // clone.on('click', function(){
      //   $('#furn_name').val(this.attr('name'))
      //   $('#furn_width').val(this.width())
      //   $('#furn_length').val(this.height())
      //   $('#furn_rotation').val(this.transform('rotation'))
      //   var self = this
      //   $('#furniture_form').submit(function(e){
      //     console.log(self)
      //     e.preventDefault()
      //     self.attr('name', $('#furn_name').val())
      //     self.width($('#furn_width').val())
      //   })

      // })
})
})
    //select
    var element;
    $('svg').on('click', 'g[name="sandbox"] image', function(){
      element = SVG.get(this.getAttribute('id'))
      $('#furn_name').val(element.attr('name'))
      $('#furn_width').val(element.width())
      $('#furn_length').val(element.height())
      $('#furn_rotation').val(element.transform('rotation'))
    })

    $('#furniture_form').on('submit', function(e){
      console.log(element)
      e.preventDefault()
      element.attr('name', $('#furn_name').val())
      element.width($('#furn_width').val())
      element.height($('#furn_length').val())
      element.transform({ rotation: $('#furn_rotation').val() })
    })






  })