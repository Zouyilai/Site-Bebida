var i = -5;

function mostrarProduto(indice) {
    i = indice;
    console.log(i);
}

console.log(i);

function Indice(){
    var img = document.getElementById("imagemProduto");
    img.setAttribute('src', '/public/imgs/imgs-products/p'+ i +'.png');
}

if (i > -1){
    Indice();
}

    