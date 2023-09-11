


let piezas = document.getElementById('infoPieza');

function leerInfo(sacarInfo){
  let info =[]
  Object.keys(sacarInfo).forEach(function(propiedad){
    Object.keys(sacarInfo[propiedad]).forEach(function(prop){
      info.push(sacarInfo[propiedad][prop]);
    })
  });
  return info;
}

window.addEventListener('load', (event) => {
    // Tu código aquí se ejecutará cuando la página esté completamente cargada.
    console.log('La página se ha cargado completamente.');
    const dato = JSON.parse(localStorage.getItem('compra'));
    
    // Object.keys(dato).forEach(function(propiedad) {
    //     Object.keys(dato[propiedad]).forEach(function(pro){
    //         console.log(`pruena ${pro}`)
    //     });
    //     // console.log(`${propiedad}: ${dpiezasato[propiedad]}`);
    // });

    let infoP;
    let infoS;

    Object.keys(dato).forEach(function(propiedad){
      infoP = leerInfo(dato[propiedad][0])
      infoS = leerInfo(dato[propiedad][1])
      console.log(infoP);
    });

    let texto = `                
    <div class= "cardInfo">
      <h3 class="header-compra">COMPRA #1</h3> 

      <div class="contentInfo">

          <div class="pindo">
            <img src="assets/img/products-2.png" alt="" width="100px">
            <p> <strong>
            1 pin: <br>
              jk: ${infoP[0]}
            <br> <br>
            2 pin: <br> 
            rojo: ${infoP[1]}
            <br>
            amarillo: ${infoP[2]}
            <br>
            azul: ${infoP[3]}
            <br><br>
            4 pin: <br>
            verde: ${infoP[5]}
            <br> 
            azul: ${infoP[7]}
            <br>
            rojo: ${infoP[8]}
            <br><br>
            6 pin: <br>
            verde: ${infoP[9]}
            <br>
            amarillo: ${infoP[10]}
            <br>
            azul: ${infoP[11]}
            <br>
            rojo: ${infoP[12]}
            <br><br>
            8 pin: 
            azul: ${infoP[15]} 
            <br>
            rojo: ${infoP[16]} 
            <br>
            </strong>
            </p>
          </div>
          
          <div class="sayo">
            <img src="assets/img/products-3.png" alt="" width="100px">
            <p>
              1 pin: 3
              <br>
              2 pin: 3
              <br>
              4 pin: 3
              <br>
              6 pin: 2
              <br>
              8 pin: 1
            </p>
          </div>

      </div>
    </div>`;
    piezas.innerHTML = texto;

    console.log(dato);
});

