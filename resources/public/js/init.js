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

    // $('.dropdown-button').dropdown({
    //     inDuration: 300,
    //     outDuration: 225,
    //     constrain_width: false, // Does not change width of dropdown to that of the activator
    //     hover: true, // Activate on hover
    //     gutter: 0, // Spacing from edge
    //     belowOrigin: false // Displays dropdown below the button
    //     }
    // );

  });
})(jQuery);
// Todo: skriva om detta i clojure med tex jayq
