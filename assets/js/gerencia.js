var dato; 
var finish;

window.addEventListener('load', (event) => {
    infoMostrar();

});


function infoMostrar(){
    dato = JSON.parse(localStorage.getItem('dato'));
    finish = JSON.parse(localStorage.getItem('Finish'));
    finish = finish ? finish: [];
    let cant = Object.keys(dato).length;

    let lista = []
    Object.keys(dato).forEach(function (propiedad, index) {
        lista.push(propiedad);
    });

    const complete = document.getElementById('Compras'); 

    let texto = '';
    for (let index = 0; index < cant; index++) {
       texto += ` <div class="Gerencia">
            <h4 style="font-family: var(--second-font);">${lista[index]}</h4>
            <button class="button" id = "${lista[index]}" style = " cursor: pointer;" >
                    <p>Completada</p>
            </button>

        </div>`;
    }

    complete.innerHTML = texto
}

const contenedorBotones = document.getElementById('Compras');

contenedorBotones.addEventListener('click', function(event) {
    // Verificar si el objetivo del evento es un botón
    if (event.target.tagName === 'BUTTON') {
      const idDelBoton = event.target.id;
      console.log(idDelBoton)
    //   console.log(dato[idDelBoton])
      delete dato[idDelBoton];
      finish.push(idDelBoton)
    }
    localStorage.clear();
    localStorage.setItem('dato', JSON.stringify(dato));
    localStorage.setItem('Finish', JSON.stringify(finish))
    infoMostrar();
  });