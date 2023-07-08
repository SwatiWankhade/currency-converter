const currencyFirst = document.getElementById('currency-first');
const worthFirst = document.getElementById('worth-first');
const exchangeRate = document.getElementById('exchange-rate');
const currencySecond = document.getElementById('currency-second');
const worthSecond = document.getElementById('worth-second');

update();

function update(){
    fetch(`https://v6.exchangerate-api.com/v6/cd88c384822dab08c52a4c31/latest/${currencyFirst.value}`)
    .then((res)=>res.json())
    .then((data)=>{
        const rate = data.conversion_rates[currencySecond.value];
        // console.log(rate);
        exchangeRate.innerText = `1 ${currencyFirst.value} = ${rate+" "+ currencySecond.value} `;

        worthSecond.value = (worthFirst.value*rate).toFixed(2);
    })
    .catch((err)=> console.log("error"));
}

currencyFirst.addEventListener('change',update);
currencySecond.addEventListener('change',update);

worthFirst.addEventListener('input',update);
worthSecond.addEventListener('input',update);