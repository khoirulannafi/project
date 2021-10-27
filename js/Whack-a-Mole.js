const soil = document.querySelectorAll('.soil');
const mole = document.querySelectorAll('.mole');
const papanSkor = document.querySelector('.papan-skor');
const pop = document.querySelector('#pop');

let soilSebelum;
let selesai;
let skor;

function randomSoil(soil) {
    const s = Math.floor(Math.random() * soil.length);
    const sRandom = soil[s];
    if (sRandom == soilSebelum) {
        randomSoil(soil)
    }
    soilSebelum = sRandom;
    return sRandom;
}

function waktuRand(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function munculMole() {
    const sRandom = randomSoil(soil);
    const wRand = waktuRand(300, 800);
    sRandom.classList.add('muncul');

    setTimeout(() => {
        sRandom.classList.remove('muncul');
        if (!selesai) {
            munculMole();
        }
    }, wRand);
}

function mulai() {
    selesai = false;
    skor = 0;
    skor.textContent = 0;

    munculMole();
    setTimeout(() => {
        selesai = true;
    }, 10000);
}

function hit() {
    skor++;
    this.parentNode.classList.remove('muncul');
    pop.play();
    papanSkor.textContent = skor;
}

mole.forEach(m => {
    m.addEventListener('click', hit);
});