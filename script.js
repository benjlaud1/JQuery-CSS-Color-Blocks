$(document).ready(function (){
  $('.color-button').on('click',function () {
    console.log('clicked: ' + $(this).data('color'));
    var colorToCheck = $(this).data('color');
    displayColorCube(colorToCheck);
  });
}); // end document ready

// function to append cubes to the DOM
function displayColorCube (colorClicked) {
  switch (colorClicked) {
    case 'red':
      console.log('reddy');
      $('.container').append("<div class='color-cube " + colorClicked + "'></div>");
      // sample: <div class='color-cube red'></div>
      // TODO add in counter


      break;
    case 'yellow':
      console.log('yellowy');
      $('.container').append("<div class='color-cube " + colorClicked + "'></div>");
      // add to yellow counter
      addToCounter(colorClicked);
      break;
    case 'green':
      console.log('greeny');
      $('.container').append("<div class='color-cube " + colorClicked + "'></div>");
      break;
    case 'blue':
      console.log('bluey');
      $('.container').append("<div class='color-cube " + colorClicked + "'></div>");
      break;
    default:
      break;
  }

}

// function addToCounter
function addToCounter (color) {

  $().val($( color ).val() + 1 );
}
