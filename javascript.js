let a = document.getElementById("adultos");
let c = document.getElementById("criancas");
let h = document.getElementById("horas");
let bt = document.getElementById("bt");




function calcular(){
    console.log("calculando...")

    let ad = a.value;
    let cr = c.value;
    let hr = h.value;

    let qtdcarne = (ad * carnepp(hr)) + (cr * (carnepp(hr) / 2));
    let qtdcerveja = ad * cervejapp(hr);
    let qtdrefri = (ad * refripp(hr)) + (cr * (refripp(hr) / 2));

    // console.log(qtdcarne)
    // console.log(qtdcerveja)
    // console.log(qtdrefri)

    resultado.innerHTML = `<p> ${qtdcarne/1000} Kg de carne. </p>`;
    resultado.innerHTML += `<p> ${Math.ceil(qtdcerveja/355)} Latas 355ml de cerveja. </p>`;
    resultado.innerHTML += `<p> ${Math.ceil(qtdrefri/1000)} L  de refri e outras bebidas. </p>`;
}



function carnepp(hr){
    if (hr >= 6) {return 650} else {return 400};
}

function cervejapp(hr){
    if (hr >= 6) {return 2000} else {return 1500};
}

function refripp(hr){
    if (hr >= 6) {return 1500} else {return 1200};
}

    
    

