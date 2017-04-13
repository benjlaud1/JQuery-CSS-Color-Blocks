$(document).ready(function (){

  // Add a cube to the DOM of the color button clicked
  $('.color-button').on('click',function () {
    var colorOfCube = $(this).data('color');
    $('.container').append("<div class='color-cube " + colorOfCube + "'></div>");
    // Update the counter for the current cube count
    updateCounter(colorOfCube);
  }); // end color-button on click

  // Remove a cube that is selected from the DOM
  $('.container').on('click', '.color-cube', function () {
    var selectedCube = $(this).attr('class').split(' ')[1];
    $(this).remove();
    // Update the counter for the current cube count
    updateCounter(selectedCube);
  }); // end container, color-cube on click

}); // end document ready

// function updateCounter - updates the cube count to current number of cubes
function updateCounter (color) {
  var cubeCount = $("." + color).length; // counts the number elements on the DOM of class 'color'
  $('#' + color).text(cubeCount);
} // end updateCounter
