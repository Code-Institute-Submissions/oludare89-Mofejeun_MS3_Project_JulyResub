$(document).ready(function(){
    $('.sidenav').sidenav();
    $(".dropdown-trigger").dropdown();
    $(".collapsible").collapsible();

    $('#flash-close').click(function() {
        $(".flashes").addClass("hide");
  });
});