/*global $*/

var counter = 0;
var leftWall = $("#box").offset().left;
$("document").ready(function() {
    
    
    $("body").keydown(function(event) {
        
        var leftWall = $("#box").offset().left;
        
        var rightWall = leftWall + $("#box").width();
        
        var leftJohn = $("#calijohn1").offset().left;
        
        var rightJohn = leftJohn + $("#calijohn1").width();
        
        if (event.which === 39){
            if (rightJohn >= rightWall) {
                return;
            }
            $("#calijohn1").css("left", $("#calijohn1").offset().left + 10);
            $("#calijohn1").attr("src", "Calijohn1.png");
        }
        else if(event.which === 37){
            if (leftJohn <= leftWall) {
                return;
            }
            $("#calijohn1").css("left", $("#calijohn1").offset().left - 10);
            $("#calijohn1").attr("src", "Calijohn2.png");
        }
        else {
            return;
        }
   
    });
    
    setInterval(function() {
        
        var leftWall = $("#box").offset().left;
        var rightWall = leftWall + $("#box").width();
        
        var greaterThanLeftWall = Math.floor( Math.random() * (rightWall - leftWall) + leftWall);

        // find CURRENT potato, currently won't work for first potato
        var divTop = $("#box").offset().top;
        var divDown = divTop + $("#box").height();
        
        // make it drop
        var newPotato = $("<img src = 'potato.jpg'" + " class = 'potato'>");
        newPotato.css("top", divTop);
        newPotato.css("left", greaterThanLeftWall);
        
        counter++;
        
        if (counter === 10) {
            // $("#score").('score' + counter);
            $("body").append(newPotato);
            counter = 0;
        }
        $(".potato").each(function(index) {
            
            var thisPotato = $(this);
            
            var thisPotatoPos = thisPotato.offset().top;
            
            var fallingPotato = thisPotatoPos + 8;
            
            thisPotato.css("top", fallingPotato);
            //check below head, inside arms, above feet
            //if it touches, make it disappear and update the score
            //or if it is touching the ground then make it disappear
            var topJohn = $("#calijohn1").offset().top;
            console.log(topJohn);
            var downJohn = topJohn + $("#calijohn1").height();
        
            var leftJohn = $("#calijohn1").offset().left;
            
            var rightJohn = leftJohn + $("#calijohn1").width();
            var topPotato = thisPotato.offset().top;
            console.log(topPotato)
            var downPotato = topPotato + thisPotato.height();
            var leftPotato = thisPotato.offset().left;
            var rightPotato = leftPotato + thisPotato.width();
        
            if (downPotato >= topJohn && leftJohn <= rightPotato && rightJohn >= leftPotato) {
                thisPotato.remove();
            }
        //     debugger;
        });
        //$("body").append("<img" + " src = 'potato.jpg'" + " class = 'potato'" + ">");
        //$(".potato").each(function(index, potato) {
            //debugger;
            //$(potato).css("top", $(potato).offset().top + 20);  
        //})
        },100);
});

// 1. Drop potato 1
// 2a. Once potato 1 hits bottom of the box stop dropping it
// 2b. Once potato 1 hits bottom of the box, append potato 2
// 3. Drop potato 2
// 4. repeat
