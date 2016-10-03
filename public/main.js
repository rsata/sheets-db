$(document).ready(function() {


  $.get( "/googlesheets", function(data) {
    console.log(data);

    // first row
    for(var y=0; y<data.values.length; y++) {
      // first column
      for(var x=0; x<data.values[y].length; x++) {
        var val=data.values[y][x];

        if (val!='' && data.values[y][x+1]!='' && data.values[y][x+1]!=undefined) {
          $('#entry').append('<li>'+ val +'<ul>' + makeLi(data.values, x, y) + '</ul></li>');
        }
      }
    }
  });


  function makeLi(values, x, y) {
    var arr = []
    var i, c;

    for (i=y; i<values.length; i++) {
      for (c=0; c<values[i].length; c++) {
        if (values[i][c]!='' && values[i][c-1]!=undefined && values[i][c+1]===undefined)
          arr.push('<li>' + values[i][c] + '</li>');
        continue;
      } 
    }

    return arr.join(' ');
  }


});

