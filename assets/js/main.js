showCart();

var dato = {};
var PINDO = {
    '1': {'jk': 3},
    '2': {'amar': 1, 'rojo': 1, 'azul': 2},
    '4': {'rojo': 1, 'verde': 1, 'azul':1},
    '6': {'amar': 1, 'rojo': 1, 'verde': 1, 'azul': 1},
    '8': {'azul': 1, 'rojo': 1},
}



var SAYO = {
    '1': {'jk': 3},
    '2': {'rojo': 1, 'amar': 1, 'azul':1, 'verde': 1},
    '4': {'verde':1, 'amar':1, 'azul':1 , 'rojo': 1},
    '6': {'azul':1, 'rojo':1},
    '8': {'verde':1, 'amar':1}
}
/*=============== SHOW MENU ===============*/

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the shadow-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true, //Animations repeat
})

sr.reveal(`.home__data`)
sr.reveal(`.home__img`, {origin: 'bottom'})
sr.reveal(`.popular__card`, {interval: 100})


/*=================== Cantidad depedidos ================== */
// JavaScript
function incrementQuantity(btn) {
    const cantSayo = document.getElementById('cant_sayo');
    const cantPindo = document.getElementById('cant_pindo');

    const infoSayo = document.getElementById('cantSayo');
    const infoPindo = document.getElementById('cantPindo');
    
    const parrafoPindo = infoPindo.querySelector('p');
    const parrafoSayo = infoSayo.querySelector('p');
    
    
   // Actualizamos el valor del input
   if(btn.id === 'btn-sayo'){
    infoSayo.style.display = '';
    cantSayo.innerText = parseInt(cantSayo.textContent)+1;
    parrafoSayo.innerHTML = `<b> cantidad sayo: </b>  ${cantSayo.textContent}`;
    // infoSayo.innerHTML = `cantidad sayo:  ${cantSayo.textContent}`;
   }
   if(btn.id === 'btn-pindo'){
    infoPindo.style.display = '';
    cantPindo.innerText = parseInt(cantPindo.textContent)+1;
    parrafoPindo.innerHTML = `<b> cantidad pindo: </b> ${cantPindo.textContent}`;
    // infoPindo.innerHTML = `cantidad Pindo:  ${cantPindo.textContent}`;

   }
   
   showCart();
}

function decrementQuantity(btn) {
    const cantSayo = document.getElementById('cant_sayo');
    const cantPindo = document.getElementById('cant_pindo');
    
    const infoSayo = document.getElementById('cantSayo');
    const infoPindo = document.getElementById('cantPindo');

    const parrafoPindo = infoPindo.querySelector('p');
    const parrafoSayo = infoSayo.querySelector('p');
    
   // Actualizamos el valor del input
   if(btn.id === 'btn-sayo' && cantSayo.textContent > 0){
    cantSayo.innerText = parseInt(cantSayo.textContent)-1;
    parrafoSayo.innerHTML = `<b> cantidad sayo: </b>  ${cantSayo.textContent}`;
    // infoSayo.innerHTML = `cantidad sayo:  ${cantSayo.textContent}`;
    infoSayo.style.display = cantSayo.textContent == '0' ? 'none' : '';
    
   }
   if(btn.id === 'btn-pindo' && cantPindo.textContent > 0){
    cantPindo.innerText = parseInt(cantPindo.textContent)-1;
    parrafoPindo.innerHTML = `<b> cantidad pindo: </b> ${cantPindo.textContent}`;
    // infoPindo.innerHTML = `cantidad Pindo:  ${cantPindo.textContent}`;
    infoPindo.style.display = cantPindo.textContent == '0' ? 'none' : '';

   }
   
   showCart();
}

var visible = true;

function showCart(){
    const cantSayo = document.getElementById('cant_sayo').textContent;
    const cantPindo = document.getElementById('cant_pindo').textContent;

    const cart = document.getElementById('btn-cart');
    const cardShot = document.getElementById('cart-container');


    if ((parseInt(cantSayo) + parseInt(cantPindo)) > 0){
        cart.style.display = '';
    }
    else{
        cart.style.display = 'none';
        cardShot.style.display = 'none';
       
        visible = true;
    }

}

function shoppingCart(){
    console.log("prueba");
    const cardShot = document.getElementById('cart-container');
    cardShot.style.display = visible ? 'block':'none';
    visible = !visible;
}

function pagar(){
    const cantSayo = document.getElementById('cant_sayo');
    const cantPindo = document.getElementById('cant_pindo');

    const infoSayo = document.getElementById('cantSayo');
    const infoPindo = document.getElementById('cantPindo');

    alert('Compra con exito');

    dato = JSON.parse(localStorage.getItem('dato'));
    dato  = dato ? dato: {};
    let cant = Object.keys(dato).length;
    let calcPindo = calculate(PINDO, parseInt(cantPindo.textContent));
    let calcSayo = calculate(SAYO, parseInt(cantSayo.textContent))

    dato['compra' + (cant + 1).toString()] =  [calcPindo, calcSayo];
    // console.log(cant);
    localStorage.setItem('dato', JSON.stringify(dato));

    cantSayo.innerText = '0';
    cantPindo.innerText = '0';

    infoSayo.style.display = 'none';
    infoPindo.style.display = 'none';


    showCart();
}


function calculate(fich, cant){
    let colores = {
        '1': {'jk': 0},
        '2': {'rojo': 0, 'amar': 0, 'azul':0, 'verde': 0},
        '4': {'verde':0, 'amar':0, 'azul':0 , 'rojo': 0},
        '6': {'verde':0, 'amar':0, 'azul':0 , 'rojo': 0},
        '8': {'verde':0, 'amar':0, 'azul':0 , 'rojo': 0}
    }

    Object.keys(fich).forEach(function(propiedad) {
        Object.keys(fich[propiedad]).forEach(function(pro){
            colores[propiedad][pro] = cant * fich[propiedad][pro];
        });
    });

    return colores;
}

window.addEventListener('load', (event) => {
    let texto = '';
    finish = JSON.parse(localStorage.getItem('Finish'));
    const FIN = document.getElementById('Finish');
    let lista = []
    Object.keys(finish).forEach(function (propiedad, index) {
        console.log(finish[propiedad])
        lista.push(finish[propiedad]);
    });
    let cant = lista.length;
    console.log(lista)  

    for (let index = 0; index < cant; index++) {
        texto += `<h3 class="header-compra">${lista[index]}</h3>`;
        console.log(texto)
     }

     FIN.innerHTML = texto;
    
});
