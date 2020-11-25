const Ime1 = document.getElementById("currencyOneName");
const Ime2 = document.getElementById("currencyTwoName");
const value1 = document.getElementById("currencyOneValue");
const value2 = document.getElementById("currencyTwoValue");
const Stopa = document.getElementById("stopa");
const dugme = document.getElementById("swap");


function racunaj(){
    var izabrana1 = Ime1.value;
    var izabrana2 = Ime2.value;

    fetch("https://v6.exchangerate-api.com/v6/111650606cdad63626faa13b/latest/"+izabrana1)
        .then(res => res.json())
            .then(data =>{
                var NovaStopa = data.conversion_rates[izabrana2];
                value2.value = (value1.value * NovaStopa).toFixed(4);
                Stopa.innerHTML = "1 "+izabrana1+" = " + NovaStopa + " "+ izabrana2;

            });
}

function zamijeni(){
    var temp = Ime1.value;
    Ime1.value = Ime2.value;
    Ime2.value = temp;
    racunaj();
}

Ime1.addEventListener("change",racunaj);
Ime2.addEventListener("change",racunaj);
value1.addEventListener("input",racunaj);
value2.addEventListener("input",racunaj);
dugme.addEventListener("click",zamijeni);

