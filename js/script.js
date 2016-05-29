$(document).ready(function(){
  var gridCount = 16;
  var gridSize = 720;
  var cellSize = Math.floor( gridSize / gridCount );
  for (var i = 0; i < gridCount*gridCount; i++){
    $('div#container').append('<div class="pixel"></div>');
  };
  $('div.pixel').width(cellSize+"px");
  $('div.pixel').height(cellSize+"px");
  $('div.pixel').hover(function(){
    $(this).addClass('hovered');
  });
  $('button').click(function(){
    gridCount = prompt("How many cells do you want in your new sketch grid?");
    gridSize = 720;
    $('div#container').empty();
    cellSize = Math.floor( gridSize / gridCount );
    gridSize = cellSize * gridCount;
    $('div#container').width(gridSize+"px");
    $('div#container').height(gridSize+"px");
    for (var i = 0; i < gridCount*gridCount; i++){
      $('div#container').append('<div class="pixel"></div>');
    };
    $('div.pixel').width(cellSize+"px");
    $('div.pixel').height(cellSize+"px");
    $('div.pixel').hover(function(){
      $(this).addClass('hovered');
    });
  });
});
