$(document).ready(function(){
  $(".freezable").each(function(){
    var $this = $(this);

    var $mapContainer = $("<div><div class='map-container'></div></div>");
    $mapContainer.insertAfter($this);

    $mapContainer = $mapContainer.find('.map-container');
    $mapContainer.append($this);

    // var $mapCoverClone = $(".map-cover-container.model").clone().toggleClass('model');
    var $mapCoverClone = $('<div class="map-cover-container"><div class="map-cover"><div class="map-cover-background"></div><div class="map-cover-message">Click to Scroll</div><div class="map-cover-uncover-message">Freeze<div></div></div>');

    $mapContainer.append($mapCoverClone);
  });

  $map_cover = $(".map-cover-container");

  $map_cover.click(function(){
    $(this).toggleClass('melted');
  });
});
