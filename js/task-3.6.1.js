var imgColScheme = document.getElementById ("colorscheme");
    imgColScheme.setAttribute('src', 'http://placekitten.com/g/600/500');


var paragraph = document.querySelectorAll( "p" );
    paragraph.forEach( function(para) {
    para.style.color = "blue";
 });

 var header1 = document.querySelectorAll( "h1" );
    header1.forEach( function(head1) {
    head1.style.color = "pink";
 });