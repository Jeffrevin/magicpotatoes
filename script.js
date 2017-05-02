/*global $*/
$("body").keydown(function(event) {
    var leftWall = $("#box").offset().left;
    var rightWall = leftWall + $("#box").width();
    var leftJohn = $("#calijohn1").offset().left;
    var rightJohn = leftJohn + $("#calijohn1").width();
    if (event.which === 39){
        if (rightJohn >= rightWall) {
            return;
        }
        $("#calijohn1").css("left", $("#calijohn1").offset().left + 5);
        $("#calijohn1").attr("src", "Calijohn1.png");
    }
    else if(event.which === 37){
        if (leftJohn <= leftWall) {
        return;
        }
        $("#calijohn1").css("left", $("#calijohn1").offset().left - 5);
        $("#calijohn1").attr("src", "Calijohn2.png");
    }
    else {
        return;
    }
   
});
$("document").ready(function() {
    var interval = setInterval(function() {
        var potatoTop = $(".potato").offset().top;
        var potatoDown = potatoTop + $(".potato").height();
        var divTop = $("#box").offset().top;
        var divDown = divTop + $("#box").height();
        if(potatoDown >= divDown) {
            clearInterval(interval);}
        $("body").append("<img" + " src = 'potato.jpg'" + " class = 'potato'" + ">");
        $(".potato").css("top", $(".potato").offset().top + 20);}, 900);
});
