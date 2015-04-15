$(document).ready(function(){
  $('#submit').on('click', function(){
    var entry = $('input').val();
    $('ul').append("<li>"+entry+"</li>"); //the item will be appended into the ul as a li element.
  })
  $('#clear').on('click', function(){
    var entry = $('input').val();
    $("ul").remove();
  })
});

