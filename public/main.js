$(document).ready(function() {




  $.get( "/googlesheets", function(data) {
    console.log(data);

    // first row
    for(var x=0; x<data.values.length; x++) {
      // first column
      for(var y=0; y<data.values[x].length; y++) {
        // check for value
        if(data.values[x][y]!="") {
          $('#entry').append('<div class="x_' + x + ' y_' + y + '">' + data.values[x][y] + '</div>')
        }
      }
    }


  });




})