var phrases = ['I like pie', 
'The pourpose of our lives is to be happy',
'Whenever people agree with me, i think i must be wrong','Ars longa, vita brevis', 'Carpe diem'];

function change_phrase(){
  var index = Math.floor(Math.random()*phrases.length)
  $('.my_phrase').text(phrases[index]);
  highlight_li(index);
}

function build_list(){
  for (var i=0; i<phrases.length; i++){
    $('ul').append('<li class="js-li">' + phrases[i] + '<img class="trash" id="' + i + '" src="trash.png"></li>');
  }
}

function highlight_li(index){
  $('li').each(function(index){
    if ($(this).text() === $('.my_phrase').text()){
      $(this).addClass('highlight');
    }else{
      $(this).removeClass('highlight');
    }
  });
}

$(document).on('ready', function(){
  build_list();
  change_phrase();
});

$('.bt-refresh').on('click',function(){
  change_phrase();
});

$('#js-phrase').on('keypress', function(event){
  if (event.keyCode == 13){ 
    var new_phrase = $('#js-phrase').val();
    phrases.push(new_phrase);
    $('.js-li').remove();
    build_list();
    change_phrase(); 
    event.preventDefault();
  }else if ($('li').hasClass('last')){
    var last = $('.js-li.last').text();
    $('.js-li.last').text(''+ $('#js-phrase').val() + '');
  }else{
    $('ul').append('<li class="js-li last">' + $('#js-phrase').val() + '<img class="trash" id="' + ""+(phrases.length-1) + '" src="trash.png"></li>');
  }
});

$('a').on('click', function(){
  $('ul').toggle('show-phrases');
});

$('ul').on('click', '.trash', function(event){
  var index = parseInt($(event.currentTarget).attr('id'));
  phrases.splice(index,1);
  $('.js-li').remove();
  build_list();
});



