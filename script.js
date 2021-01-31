var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal*years*rate/100;
var futureYear = new Date().getFullYear() + years;

function compute()
{
  p = document.getElementById("principal").value;
}

function rateShow()
{
  document.getElementById("displayRate").innerText = rate;
}
