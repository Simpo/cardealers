$(document).ready(function() {
   $("input#toyota").click(function() {
     $("div#display").fadeIn("slow");
   });

   $("input#bmw").click(function() {
     $("div#display").hide();
     $("div#display1").fadeIn("slow");
   });

   $("input#mercedes").click(function() {
     $("div#display").hide();
     $("div#display1").fadeOut();
     $("div#display2").fadeIn("slow");
   });
});

// Activate Carousel
$("#myCarousel").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
    $("#myCarousel").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function(){
    $("#myCarousel").carousel("prev");
});
