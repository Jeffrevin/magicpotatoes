/*global $*/
$("body").keydown(function(event) {
    if (event.which === 37) {
        $("#calijohn1").css("left", $("#calijohn1").offset().left - 10);
    }
    
    else {
        return;
    }
    
});