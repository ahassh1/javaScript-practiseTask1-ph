/***
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
const busTicket = 800;
const age=80;

if(age <= 10){
    console.log("childrens ticket free ")
}
else if( age >10){
    const discount = busTicket *50/100;
    const nowTicketPayment = busTicket - discount;
   console.log(nowTicketPayment)
}
else if( age>=60){
  const discount = busTicket *20/100;
  const nowTicketPayment = busTicket - discount;
  console.log(nowTicketPayment)
}
else{
  console.log("you don't get ticket")
}
