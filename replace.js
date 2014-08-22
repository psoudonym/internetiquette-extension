
$('* :not(:has(*))').text(function(i, v) {
return v.replace(/jQuery/g, 'boners');
});
