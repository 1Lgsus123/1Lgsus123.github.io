
var dato; 

window.addEventListener('load', (event) => {
    dato = JSON.parse(localStorage.getItem('dato'));
    visualizar();
});

function visualizar(){
    console.log('La página se ha cargado completamente.');

    const E1 = document.getElementById('infoE1'); 
    const E2 = document.getElementById('infoE2'); 
    const E3 = document.getElementById('infoE3'); 
    const E4 = document.getElementById('infoE4'); 

    function createCompraE1(compraNumber, infoP, infoS) {
        return `
            <div class="cardInfo">
                <h3 class="header-compra">${compraNumber}</h3>
                <div class="contentInfo">
                    <div class="pindo">
                        <img src="assets/img/products-2.png" alt="" width="100px">
                        <p><strong>
                        PINDO: <br><br>
                            1 pin:<br>jk: ${infoP[0] * (2/3)}<br><br>
                            2 pin:<br>amarillo: ${infoP[2]}<br>azul: ${infoP[3]/2}<br><br>
                        </strong></p>
                    </div>
                    <div class="sayo">
                        <img src="assets/img/products-3.png" alt="" width="100px">
                        <p><strong>
                        SAYO: <br><br>
                            1 pin:<br>jk: ${infoS[0]/3}<br><br>
                            4 pin:<br>rojo: ${infoS[8]}<br><br>
                            6 pin:<br>azul: ${infoS[11]}<br><br>
                            8 pin:<br>verde: ${infoS[13]}<br><br>
                        </strong></p>
                    </div>
                </div>
            </div>
        `;
    }

    function createCompraE2(compraNumber, infoP, infoS) {
        return `
            <div class="cardInfo">
                <h3 class="header-compra">${compraNumber}</h3>
                <div class="contentInfo">
                    <div class="pindo">
                        <img src="assets/img/products-2.png" alt="" width="100px">
                        <p><strong>
                        PINDO: <br><br>
                            6 pin:<br>verde: ${infoP[9]}<br>amarillo: ${infoP[10]}<br><br>
                            8 pin:<br>azul: ${infoP[15]}<br><br>
                        </strong></p>
                    </div>
                    <div class="sayo">
                        <img src="assets/img/products-3.png" alt="" width="100px">
                        <p><strong>
                        SAYO: <br><br>
                            4 pin:<br>azul: ${infoS[7]}<br><br>
                            6 pin:<br>rojo: ${infoS[12]}<br><br>
                            8 pin:<br>amarillo: ${infoS[14]}<br>
                        </strong></p>
                    </div>
                </div>
            </div>
            `;
    }

    function createCompraE3(compraNumber, infoP, infoS) {
        return `
            <div class="cardInfo">
                <h3 class="header-compra">${compraNumber}</h3>
                <div class="contentInfo">
                    <div class="pindo">
                        <img src="assets/img/products-2.png" alt="" width="100px">
                        <p><strong>
                        PINDO: <br><br>
                            1 pin:<br>jk: ${infoP[0]/3}<br><br>
                            2 pin:<br>rojo: ${infoP[1]}<br>azul: ${infoP[3]/2}<br><br>
                            8 pin:<br>rojo: ${infoP[16]}<br>
                        </strong></p>
                    </div>
                    <div class="sayo">
                    <img src="assets/img/products-3.png" alt="" width="100px">
                    <p><strong>
                    SAYO: <br><br>
                            1 pin:<br>jk: ${infoS[0] * 2 / 3}<br><br>
                            2 pin:<br>rojo: ${infoS[4]}<br><br>
                            4 pin:<br>verde: ${infoS[5]}<br>amarillo: ${infoS[6]}<br><br>
                        </strong></p>
                    </div>
                </div>
            </div>
        `;
    }

    function createCompraE4(compraNumber, infoP, infoS) {
        return `
            <div class="cardInfo">
                <h3 class="header-compra">${compraNumber}</h3>
                <div class="contentInfo">
                    <div class="pindo">
                        <img src="assets/img/products-2.png" alt="" width="100px">
                        <p><strong>
                        PINDO: <br><br>
                            4 pin:<br>verde: ${infoP[5]}<br>azul: ${infoP[7]}<br>rojo: ${infoP[8]}<br><br>
                        </strong></p>
                    </div>
                    <div class="sayo">
                    <img src="assets/img/products-3.png" alt="" width="100px">
                    <p><strong>
                    SAYO: <br><br>
                            2 pin:<br>verde: ${infoS[1]}<br>amarillo: ${infoS[2]}<br>azul: ${infoS[3]}<br><br>
                        </strong></p>
                    </div>
                </div>
            </div>
        `;
    }

    let texto1 = '';
    let texto2 = '';
    let texto3 = '';
    let texto4 = '';
    Object.keys(dato).forEach(function (propiedad, index) {
        const infoP = leerInfo(dato[propiedad]['0']);
        const infoS = leerInfo(dato[propiedad]['1']);
        texto1 += createCompraE1(propiedad, infoP, infoS);
        texto2 += createCompraE2(propiedad, infoP, infoS);
        texto3 += createCompraE3(propiedad, infoP, infoS);
        texto4 += createCompraE4(propiedad, infoP, infoS);
        console.log(infoS);
    });

    E1.innerHTML = texto1;
    E2.innerHTML = texto2;
    E3.innerHTML = texto3;
    E4.innerHTML = texto4;
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