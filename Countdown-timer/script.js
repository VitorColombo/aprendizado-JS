const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");


const dataFinal = "29 Mar 2030";

function contagem(){
    const diaViagem = new Date(dataFinal);
    const diaDeHoje = new Date();

    const totalseg = (diaViagem - diaDeHoje) / 1000;
    const dias = Math.floor(totalseg / 3600 / 24);
    const horas = Math.floor(totalseg / 3600 % 24);
    const minutos = Math.floor(totalseg / 60 % 24 % 60);
    const seg = Math.floor(totalseg % 3600 % 60);

    daysEl.innerHTML = formatar(dias);
    hoursEl.innerHTML = formatar(horas);
    minsEl.innerHTML = formatar(minutos);
    secondsEl.innerHTML = formatar(seg);
}

function formatar(horario){
    if (horario < 10)
        return '0' + horario;
    return horario;
}

contagem();

setInterval(contagem, 1000);


