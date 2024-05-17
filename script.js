let dolar=document.getElementById("dolarclp");
let euro=document.getElementById("euroclp");
let gbp=document.getElementById("libraclp");
fetch('https://v6.exchangerate-api.com/v6/apiaqui/latest/CLP') 
.then(response => response.json())
  .then(data => {
    
    const usdRate = data.conversion_rates.USD;
    const eurRate = data.conversion_rates.EUR;
    const gbpRate = data.conversion_rates.GBP;
    dolar.innerHTML=(`${1/usdRate}`);
    euro.innerHTML=(`${1/eurRate}`);
    gbp.innerHTML=(`${1/gbpRate}`);
  })
  .catch(error => console.error('Error:', error));
  