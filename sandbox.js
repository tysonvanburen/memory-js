$(document).ready(function(){
  // this runs when the document is ready
  console.log('document now ready');
  var sandbox = $('#sandbox');
  console.log(sandbox.text());
  sandbox.css({
    'color': '#ff0000',
    'border': '1px solid #ff0000',
    'padding': '10px',
    'background-color': '#ffeeee'
  });
  window.setTimeout(function() {
    console.log('timeout fired');
    sandbox.text('ZOMG!');
    var bigText = $('<h1></h1>');
    bigText.text('BOOM!');
    sandbox.append(bigText);
    sandbox.animate({
      'width': '50%'
    }, 1500);
  }, 2500);

  var square = $('<div></div>');
  square.css({
    'width': '100px',
    'height': '25px',
    'padding': '10px',
    'background-color': 'red',
    'position': 'absolute',
    'top': '100px',
    'z-index': '2',
    'right': '0'
  });
  sandbox.after(square);
  square.data('switch', 'on');

  square.click(function() {
    var switchState = ($(this).data('switch'));
    if(switchState == 'on') {
      $(this).data('switch', 'off');
      $(this).css('background-color', 'green');
        $(this).animate({
          'width': '100%',
          'height': '25px'
        }, 1500);
    } else {
      $(this).data('switch', 'on');
      $(this).css('background-color', 'red');
        $(this).animate({
          'left': '0px',
          'width': '100px',
          'height': '25px'
      }, 1500);
    }
  });

  var light = $('<div></div>');
  light.css({
    'width': '40px',
    'height': '40px',
    'padding': '10px',
    'border-radius': '50%',
    'background-color': 'green',
    'position': 'absolute',
    'top': '250px',
    'z-index': '2',
    'right': '0'
  });
  sandbox.after(light);
  light.data('switch', 'on');

  light.click(function() {
    var switchState = ($(this).data('switch'));
    if(switchState == 'on') {
      $(this).data('switch', 'off');
      $(this).css('background-color', 'red');
        $(this).animate({
          'width': '400px'
        }, 1500);
    } else {
      $(this).data('switch', 'on');
      $(this).css('background-color', 'green');
    $(this).animate({
      'left': '0px',
      'width': '40px'
    }, 1500);
   }
  });

  $(':text').blur(function() {
    sandbox.text($(this).val());
  });

  $(':text').focus(function() {
    $(this).val('');
  });

  $('#linkarea a').click(function(event) {
    console.log($(this).attr('href'));
    return false;
  });

  // bind a click to all a.switch that currently
  // exist in the DOM
  $('a.switch').click(function() {
    light.click();
    square.click();
    return false;
  });
  // bind a click to all a.switch even future ones
  // appended to the DOM.

  $(document).on('click', 'a.switch', function(){
    light.click();
  });

  var newSwitch = $('<a href="#" class="switch">Switch</a>');
  sandbox.after(newSwitch);

  $('select#lang').change(function(){
    sandbox.text($(this).val());
  });

});
