
function compute()
{
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = parseInt(document.getElementById("years").value);
  var interest = principal*years*rate/100;
  var futureYear = parseInt(new Date().getFullYear())  + years;
  document.getElementById("result").innerText = "If your deposit " + principal
  + ",\nat an interest rate of " + rate +".\nYou will receive an amount of "
  + (parseFloat(principal) + parseFloat(interest)) + ",\nin the year " + futureYear;
}

function rateShow()
{
  var rate = document.getElementById("rate").value;
  document.getElementById("displayRate").innerText = rate+"";
}

var principal = document.getElementById("principal");
principal.addEventListener('keyup', (e) => {
  if(principal.value==="")
    document.getElementById("ComputeInterest").disabled = true;
  else
  {
    document.getElementById("ComputeInterest").disabled = false;
    if(e.keyCode==13) compute(); //xong
  }
});
