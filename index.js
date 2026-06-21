const estatusPedido = document.querySelector('#parrafoEstatus');
const btnEnviarPedido = document.querySelector('#enviarPedido');
const pizza = document.querySelector('#estatusPizza');
const bebida = document.querySelector('#estatusBebida');
const postre = document.querySelector('#estatusPostre');

const estatusDelPedido = () =>{
    return Math.random() < 0.8;
};

const pedidoPizza = (pedidoExitoso) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(pedidoExitoso){
                resolve('Pizza Lista!')
                pizza.innerHTML = `Pizza Lista ✅`;
            }else{
                reject('Error en la Pizza ❌');
            }
        }, 3000);
    })
};

const pedidoBebida = (pedidoExitoso) =>{
     return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(pedidoExitoso){
                resolve('Bebida Lista!')
                bebida.innerHTML = `Bebida Lista ✅`;
            }else{
                reject('Error en la Bebida ❌');
            }
        }, 3000);
    })
};

const pedidoPostre = (pedidoExitoso) =>{
 return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(pedidoExitoso){
                resolve('Postre Listo')
                postre.innerHTML = `Postre Listo ✅`;
            }else{
                reject('Error en la Bebida ❌');
            }
        }, 3000);
    })
};


const preparacionPedido = async (pedidoExitoso) =>{
    try{
        const pizzaLista = await pedidoPizza(pedidoExitoso);
        const bebidaLista = await pedidoBebida(pedidoExitoso);
        const postreListo = await pedidoPostre(pedidoExitoso);
    }catch(error){
        console.log(error);
    }
};


btnEnviarPedido.addEventListener('click',(evento) =>{
    estatusPedido.innerHTML = `<p>Procesando Pedido...</p>`;
    pizza.innerHTML = ``;
    bebida.innerHTML = ``;
    postre.innerHTML = ``;

    const pedidoAprobado = estatusDelPedido();

    if(pedidoAprobado){
        estatusPedido.innerHTML = `<p>Tu pedido ha sido procesado con exito ✅</p>`;
        preparacionPedido(pedidoAprobado);
    }else{
        estatusPedido.innerHTML = `<p>Ocurrio un error con tu pedido, intente nuevamente</p>`;
    }
    
});