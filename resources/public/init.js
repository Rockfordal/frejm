(function($){
  $(function(){
     //$('.button-collapse').sideNav('true');
    $(document).on('click', '.button-collapse', function() {
        $('.button-collapse').sideNav({
            closeOnClick: true});
    });
    //$(document).on('click', '#nav-mobile>li>a', function() {
    //    $('.button-collapse').sideNav(0);
    //});
  });
})(jQuery);

//$( document ).ready(function() {
//});
