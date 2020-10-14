
const calcular = document.getElementById('calcular');

function imc () {
    const diametro1 = document.getElementById('diametro').value;
    const material1 = document.getElementById('material').value;
    const resultado = document.getElementById('resultado');

    if (material1==1020) {
        const rpm = ((25*318)/diametro1).toFixed(1);        
        resultado.textContent = `RPM: ${rpm}`;

    }else if(material1==1045){
        const rpm = ((20*318)/diametro1).toFixed(1);       
        resultado.textContent = `RPM: ${rpm}`;
    }else if(material1==1060){
        const rpm = ((15*318)/diametro1).toFixed(1);       
        resultado.textContent = `RPM: ${rpm}`;
    }else{
        resultado.textContent = `Digite o tipo de aço`;
    }   
}

calcular.addEventListener('click', imc);