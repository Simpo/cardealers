$(document).ready(function() {
   $("input#toyota").click(function() {
     $("div#display").fadeIn("slow");
     $("div#display1").hide();
     $("div#display2").hide();

   });

   $("input#bmw").click(function() {
     $("div#display1").fadeIn("slow");
     $("div#display").hide();
     $("div#display2").hide();

   });

   $("input#merc").click(function() {
    $("div#display2").fadeIn("slow");
     $("div#display").hide();
     $("div#display1").hide();
   });

   $("input#all").click(function() {
    $("div#display2").fadeIn("slow");
     $("div#display").fadeIn("slow");
     $("div#display1").fadeIn("slow");
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
