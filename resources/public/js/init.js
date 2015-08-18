(function($){
  $(function(){
    // Aktivera sideNav
    $('.button-collapse').sideNav({
      closeOnClick: true});

    // Lyssna på 
    $(document).on('click', '.button-collapse', function(e) {
        e.preventDefault();
        $('.button-collapse').sideNav({
            closeOnClick: true});
    });
  });
})(jQuery);
// Todo: skriva om detta i clojure med tex jayq
