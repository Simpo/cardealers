function myFunction() {
    var str = "Harrier, Probox, NZE";
    var result = str.link("https://www.w3schools.com");
    document.getElementById("izuzu").innerHTML = result;
}
function updateTotal() {
  document.getElementById("amtOut").innerHTML=document.getElementById("amtIn").value;

}
function applyDiscount(amount) {
  amount = parseFloat(amount);
  var discount = 16;
  var disAmt = 1.16*(amount);
  document.getElementById("disOut").innerHTML = disAmt;

}
