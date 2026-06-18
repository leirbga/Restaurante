const estatusPedido = document.querySelector('#parrafoEstatus');
const btnEnviarPedido = document.querySelector('#enviarPedido');
const pizza = document.querySelector('#estatusPizza');
const bebida = document.querySelector('#estatusBebida');
const postre = document.querySelector('#estatusPostre');

btnEnviarPedido.addEventListener('click',(evento) =>{
    estatusPedido.innerHTML = `<p>Procesando Pedido...</p>`;
    preparacionPedido();
});

const estatusDelPedido = () =>{
    const pedido = Math.random() < 0.8;
    return pedido;
};

const pedidoPizza = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(estatusDelPedido()){
                resolve('Pizza Lista!')
                pizza.innerHTML = `Pizza Lista ✅`;
            }else{
                reject('Ocurrio un error...')
                pizza.innerHTML = `Error ❌`;
            }
        }, 3000);
    })
};

const pedidoBebida = () =>{
     return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(estatusDelPedido()){
                resolve('Bebida Lista!')
                bebida.innerHTML = `Bebida Lista ✅`;
            }else{
                reject('Ocurrio un error...')
                bebida.innerHTML = `Error ❌`;
            }
        }, 3000);
    })
};

const pedidoPostre = () =>{
 return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(estatusDelPedido()){
                resolve('Postre Listo')
                postre.innerHTML = `Postre Listo ✅`;
            }else{
                reject('Ocurrio un error...')
                postre.innerHTML = `Error ❌`;
            }
        }, 3000);
    })
};


const preparacionPedido = async () =>{
    try{
       const pizzaLista = await pedidoPizza();
       const bebidaLista = await pedidoBebida();
       const postreListo = await pedidoPostre();
    }catch(error){
        estatusPedido.innerHTML = `<p>Ocurrio un error con tu pedido, intente nuevamente</p>`;
    }
};