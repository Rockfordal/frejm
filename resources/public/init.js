(function($){
  $(function(){
    $('.button-collapse').sideNav({
      closeOnClick: true});

    $(document).on('click', '.button-collapse', function(e) {
        e.preventDefault();
        $('.button-collapse').sideNav({
            closeOnClick: true});
    });
  });
})(jQuery);
// Todo: skriva om detta i clojure med tex jayq
