# 🍕 Pizzería Asíncrona - Simulador de Pedidos Cyberpunk

¡Bienvenido al **Restaurante de Carne / Pizzería Asíncrona**! Este proyecto es una aplicación web interactiva que simula el flujo de preparación en la cocina de un restaurante utilizando conceptos avanzados de programación asíncrona en JavaScript, envuelto en una interfaz de usuario futurista con temáticas de luces neón moradas y azules.

## 🚀 Características

* **Lógica Asíncrona Avanzada:** Implementación de `Promise.allSettled()` para manejar múltiples promesas en paralelo.
* **Control de Errores Individual:** El sistema detecta y muestra con precisión exacta qué producto falló (la pizza, la bebida o el postre) sin interrumpir el flujo de los demás.
* **Diseño Fluido y Centrado:** Interfaz completamente centrada en la pantalla mediante CSS Flexbox y estructurada verticalmente en columnas.
* **Estética Cyberpunk / Neón:** Uso de degradados oscuros, efectos de resplandor mediante `box-shadow` y `text-shadow` dinámicos.

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructura limpia y semántica para los contenedores de comida.
* **CSS3 (Flexbox & Variables):** Estilos neón y animaciones de interacción (`hover`/`active`).
* **JavaScript (ES6+):** Funciones `async/await`, promesas nativas (`new Promise`), temporizadores (`setTimeout`) y estados aleatorios de éxito/error.

## 📦 Estructura del Proyecto

```text
├── index.html       # Estructura de la aplicación
├── styles.css       # Estilos de diseño Cyberpunk Neón
└── index.js         # Lógica de simulación y control de promesas
