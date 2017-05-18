
function updateTotal() {
  document.getElementById("amtOut").innerHTML=document.getElementById("amtIn").value;

}
function applyDiscount(amount) {
  amount = parseInt(amount);
  var discount = 16;
  var disAmt = 1.16*(amount);
  document.getElementById("disOut").innerHTML = disAmt;
  // document.getElementById("disOut").innerHTML = cashIn;
  var tot = (disAmt)*0.02 + (disAmt);

  document.getElementById("totOut").innerHTML=tot;


}
// function upTotal(total) {
//   total = parseFloat(total);
//   var tot = (disAmt)*0.02
//   document.getElementById("totOut").innerHTML=tot;
//
// }
