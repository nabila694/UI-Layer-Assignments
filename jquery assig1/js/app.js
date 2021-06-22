
$("document").ready(function () {
$('button').click(function() {
    var mylist = $('#input').val();
       $('#list').append('<li>'+mylist+'</li>');
       return false;
    });

 
});
