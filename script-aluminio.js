
const calcular = document.getElementById('calcular');

function imc () {
    const diametro1 = document.getElementById('diametro').value;
    const material1 = document.getElementById('material').value;
    const material2 = document.getElementById('material2').value;
    const resultado = document.getElementById('resultado');

    if (material1==1 & material2==1) {
        resultado.textContent = `Digite 1 em apenas um tipo de ferramenta`;
    }else if (material1!=1 & material2==1) {
        const rpm = ((500*318)/diametro1).toFixed(1);        
        resultado.textContent = `RPM: ${rpm}`;
    }else if (material1==1 & material2!=1) {
        const rpm = ((60*318)/diametro1).toFixed(1);        
        resultado.textContent = `RPM: ${rpm}`;
    }else {
        resultado.textContent = `Digite 1 em qual tipo de ferramenta quer calcular`;
    }      
    
    
    
}

calcular.addEventListener('click', imc);