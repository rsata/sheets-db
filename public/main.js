$(document).ready(function() {


  $.get( "/googlesheets", function(data) {
    console.log(data);

    // first row
    for(var y=0; y<data.values.length; y++) {
      // first column
      for(var x=0; x<data.values[y].length; x++) {
        var val=data.values[y][x];

        if(val==='') continue;
        // check for value
        // if (data.values[y][x-1]===undefined) {
        //   $('#entry').append('<ul class="x_' + x + ' y_' + y + '">PARENT' + val + '</ul>');
        // } else if(data.values[y][x+1]===undefined) {
        //   $('#entry').append('<li class="x_' + x + ' y_' + y + '">LAST_CHILD' + val + '</li>');
        // } else {
        //   $('#entry').append('<li class="x_' + x + ' y_' + y + '">SUB_PARENT' + val + '</li>')
        // }

        if (data.values[y][x-1]===undefined) {
          $('#entry').append('<li>'+ val +'<ul>' + yaya(data.values[y]) + '</ul></li>');
        }

      }
    }
  });






  function yaya(x) {
    var h;
    $.each(x, function(index, value) {
      if(value) return h ='<li>'+ value +'</li>';
      continue;
    });
    return h;
  }


});
