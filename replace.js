//Pull data from internetiquette.herokuapp.com/mappings.json
$.getJSON("http://internetiquette.herokuapp.com/mappings.json", function(data) {
  //look for text nodes
  $('* :not(:has(*))').text(function(i, value) {
    //iterate over all key value pairs found in the mappings portion of the json response
    $.each( data.mappings, function( bad_phrase, good_phrase ) {
      //create a regex object that will look for all case insentive occurence of the bad phrase
      var regex = new RegExp(bad_phrase,"ig");
      //replace the bad phrase with the good phrase and store the value
      value = value.replace(regex, good_phrase.toUpperCase());
    });
    return value;
  });
})