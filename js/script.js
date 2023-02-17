let btnNext = document.getElementById("next");
let btnLeft = document.getElementById("btnLeft");
let btnRight = document.getElementById("btnRight");
let level = document.getElementById("level");
let nivel = 1;

// -------- Verificar se o código está certo antes de passar para a próxima fase  --------
btnNext.addEventListener('click', () => {
    console.log("FOIIIIIIIIIIIIIIIIIIIIIII");
    
})

// -------- Avançar para próxima fase --------
btnRight.addEventListener('click', () => {
    if(nivel < 24){
        nivel++
        let newNivel = document.createTextNode(nivel);

        level.replaceChildren(newNivel);

        console.log(nivel);
        return nivel;
    }
})

// -------- Voltar para fase anterior --------
btnLeft.addEventListener('click', () => {
    if(nivel != 1){
        nivel-- 
        let newNivel = document.createTextNode(nivel);
        level.replaceChildren(newNivel);    
        return nivel;
    }
})
