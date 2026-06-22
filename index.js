const estatusPedido = document.querySelector('#parrafoEstatus');
const btnEnviarPedido = document.querySelector('#enviarPedido');
const pizza = document.querySelector('#estatusPizza');
const bebida = document.querySelector('#estatusBebida');
const postre = document.querySelector('#estatusPostre');

const estatusDelPedido = () =>{
    return Math.random() < 0.8;
};

const pedidoPizza = () =>{
    return new Promise((resolve)=>{
        setTimeout(() => {
                resolve('Pizza Lista!')
                pizza.innerHTML = `Pizza Lista ✅`;
        }, 3000);
    })
};

const pedidoBebida = () =>{
     return new Promise((resolve)=>{
        setTimeout(() => {
                resolve('Bebida Lista!')
                bebida.innerHTML = `Bebida Lista ✅`;
        }, 3000);
    })
};

const pedidoPostre = () =>{
 return new Promise((resolve)=>{
        setTimeout(() => {
                resolve('Postre Listo')
                postre.innerHTML = `Postre Listo ✅`;
        }, 3000);
    })
};


const preparacionPedido = async () =>{
    try{
        const pizzaLista = await pedidoPizza();
        const bebidaLista = await pedidoBebida();
        const postreListo = await pedidoPostre();
        btnEnviarPedido.classList.remove('habilitar-btn');
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
        preparacionPedido();
        btnEnviarPedido.classList.add('habilitar-btn');
    }else{
        estatusPedido.innerHTML = `<p>Ocurrio un error con tu pedido, intente nuevamente</p>`;
    }
    
});