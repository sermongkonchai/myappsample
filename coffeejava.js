window.onload = function(){

  $donate = document.getElementById("donatehere");
  $howmanytodonate = document.getElementById("howmanytodonate");
  $thanks = document.getElementById("Thanks");


$donate.onclick = function() {
   console.log("hi");
   var amount = document.getElementById("howmanytodonate").value;
   var saying = `Thank you for giving us ${amount} dollars!`;

   if(amount>100)
   {
     console.log("over 100 dollars");
    saying = `Thank you for giving us ${amount} dollars that's a bucket full of money! You must be rich.`;
   }
   if(amount<0)
   {
     saying = "Excuse me, you can't give negative dollars. ";
   }
    $thanks.innerHTML =`${saying}`;


}
}
