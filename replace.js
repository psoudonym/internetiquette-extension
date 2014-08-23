$.getJSON("http://internetiquette.herokuapp.com/mappings.json", function(data) {
  $('* :not(:has(*))').text(function(i, value) {
    $.each( data, function( bad_phrase, good_phrase ) {
      var regex = new RegExp(bad_phrase,"ig");
      value = value.replace(regex, good_phrase);
    });
    return value;
  });
})