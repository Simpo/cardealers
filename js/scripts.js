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
