
var dato; 

window.addEventListener('load', (event) => {
    dato = JSON.parse(localStorage.getItem('dato'));
    visualizar();
});

function visualizar(){
    console.log('La página se ha cargado completamente.');

    const piezas = document.getElementById('infoPieza'); // Asegúrate de tener un elemento HTML con el id "piezas" en tu página

    function createCompraCard(compraNumber, infoP, infoS) {
        return `
            <div class="cardInfo">
                <h3 class="header-compra">${compraNumber}</h3>
                <div class="contentInfo">
                    <div class="pindo">
                        <img src="assets/img/products-2.png" alt="" width="100px">
                        <p><strong>
                            PINDO: <br><br>
                            1 pin:<br>jk: ${infoP[0]}<br><br>
                            2 pin:<br>rojo: ${infoP[1]}<br>amarillo: ${infoP[2]}<br>azul: ${infoP[3]}<br><br>
                            4 pin:<br>verde: ${infoP[5]}<br>azul: ${infoP[7]}<br>rojo: ${infoP[8]}<br><br>
                            6 pin:<br>verde: ${infoP[9]}<br>amarillo: ${infoP[10]}<br>azul: ${infoP[11]}<br>rojo: ${infoP[12]}<br><br>
                            8 pin:<br>azul: ${infoP[15]}<br>rojo: ${infoP[16]}<br>
                        </strong></p>
                    </div>
                    <div class="sayo">
                        <img src="assets/img/products-3.png" alt="" width="100px">
                        <p><strong>
                            SAYO: <br><br>
                            1 pin:<br>jk: ${infoS[0]}<br><br>
                            2 pin:<br>verde: ${infoS[1]}<br>amarillo: ${infoS[2]}<br>azul: ${infoS[3]}<br>rojo: ${infoS[4]}<br><br>
                            4 pin:<br>verde: ${infoS[5]}<br>amarillo: ${infoS[6]}<br>azul: ${infoS[7]}<br>rojo: ${infoS[8]}<br><br>
                            6 pin:<br>azul: ${infoS[11]}<br>rojo: ${infoS[12]}<br><br>
                            8 pin:<br>verde: ${infoS[13]}<br>amarillo: ${infoS[14]}<br>
                        </strong></p>
                    </div>
                </div>
            </div>
        `;
    }

    let texto = '';
    Object.keys(dato).forEach(function (propiedad, index) {
        const infoP = leerInfo(dato[propiedad]['0']);
        const infoS = leerInfo(dato[propiedad]['1']);
        texto += createCompraCard(propiedad, infoP, infoS);
        console.log(infoS);
    });

    piezas.innerHTML = texto;
}


function leerInfo(sacarInfo){
    let info =[]
    Object.keys(sacarInfo).forEach(function(propiedad){
      Object.keys(sacarInfo[propiedad]).forEach(function(prop){
        info.push(sacarInfo[propiedad][prop]);
      })
    });
    return info;
  }