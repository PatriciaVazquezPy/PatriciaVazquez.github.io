const Calcular = document.getElementById('calcular');
const Error = document.getElementById('error');
const Flujo = document.getElementById('flujo');
const Mantenimiento = document.getElementById('mantenimiento');

  Calcular.addEventListener('click', () => {
    const Peso = document.getElementById('peso').value
  
  
  if (Peso>0){
    Error.style.display = 'none'
    let flujo = Math.round(calcularFlujo(Peso))
    let mantenimiento = Math.round((flujo*1.5)/24);
    Flujo.innerHTML = 'Flujo:'+ ' ' + flujo + 'cc/hr';
    Mantenimiento.innerHTML = 'Mantenimiento:' + ' ' + 'm+m/2 ' + mantenimiento + ' cc/hr';
    Flujo.style.display = 'block';
    Mantenimiento.style.display = 'block';
    console.log(flujo);
  }
  else{
    Error.style.display = 'block';
    Flujo.style.display = 'none';
    Mantenimiento.style.display = 'none';
  }
  console.log(Peso)
});

function calcularFlujo(peso) {
  let volDiario;
  let supCorporal = 0;
  if (peso <= 10) {
    volDiario = peso * 100;
  }
  if (peso > 10 && peso <= 20) {
    volDiario = 1000 + (peso - 10) * 50;
  }
  if (peso > 20 && peso <= 30) {
    volDiario = 1500 + (peso - 20) * 20;
  }
  if (peso > 30) {
    supCorporal = (peso * 4 + 7) / (Number(peso) + 90); 
    console.log(supCorporal);
    volDiario = supCorporal * 1500;
  }
  return volDiario;
}

     
      

      