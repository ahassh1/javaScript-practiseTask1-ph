/***
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

var busticket = 1000;
var age=100;

if(age <= 10){
    console.log("childrens ticket free ")
}
else if( busticket>1000 || age >100){
    var discount = 1000*50/100;
    var nowTicket = busticket-discount;
   console.log("students ticket")
}
else if( age>=60 || busticket >=900){
  var discount = 1000*20/100;
  var nowTicket = busticket-discount;
  console.log("senior citizens ticket")
}
else{
  console.log("you don't get ticket")
}
