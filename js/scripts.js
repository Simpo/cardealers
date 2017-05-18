
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

   $(".user form").submit(function(event) {

     var fullName = $("input#fullname").val();
     var address = $("input#address").val();
     var email = $("input#email").val();


     $(".fullname").text(fullName);
     $(".address").text(address);
     $(".email").text(email);


     $("#receipt").show();
     $(".user").hide();

     event.preventDefault();

});
});

function updateTotal() {
 document.getElementById("amtOut").innerHTML=document.getElementById("amtIn").value;

}
function applyDiscount(amount) {
  var amount = parseInt(20,000);
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
