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
<<<<<<< HEAD
     $("div#display1").hide();
   });

   $("input#all").click(function() {
    $("div#display2").fadeIn("slow");
     $("div#display").fadeIn("slow");
     $("div#display1").fadeIn("slow");
=======
     $("div#display1").fadeOut();
     $("div#display2").fadeIn("slow");


>>>>>>> f6d29d5832d73d349c67a62d70f4b8f44dd709e9
   });
});
function updateTotal() {
  document.getElementById("amtOut").innerHTML=document.getElementById("amtIn").value;
}
function applyDiscount(amount) {
  amount = parseFloat(amount);
  var discount = 16;
  var disAmt = 1.16*(amount);
  document.getElementById("disOut").innerHTML = disAmt;
  // document.getElementById("disOut").innerHTML = cashIn;
  var tot = (disAmt)*0.02 + (disAmt);

  document.getElementById("totOut").innerHTML=tot;


}

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
