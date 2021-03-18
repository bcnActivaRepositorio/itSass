window.addEventListener("load", function(){
    console.log("Web cargada");
})
// onscroll
window.onscroll = ( function() {
  sticky(); 
});

function sticky(){
    ($(window).scrollTop() >= 0) ? $('header').addClass('mySticky') : $('header').removeClass('mySticky');
}