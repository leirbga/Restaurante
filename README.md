# 🍕 Simulador de Pedidos Cyberpunk

¡Bienvenido al **Simulador de Pedidos**! Este proyecto es una aplicación web interactiva que recrea el flujo de preparación en la cocina de un restaurante utilizando conceptos fundamentales de programación asíncrona en JavaScript, envuelto en una interfaz de usuario futurista con temáticas de luces neón moradas y azules.

## 🚀 Características

* **Flujo Asíncrono Secuencial:** Implementación de funciones `async/await` para gestionar la preparación paso a paso (Pizza ➡️ Bebida ➡️ Postre).
* **Control de Errores Individual:** Estructura de bloques `try/catch` independientes que permiten identificar con precisión exacta qué producto falló en la cocina sin congelar la ejecución de los demás.
* **Estructura Vertical Limpia:** Interfaz organizada en una sola columna mediante CSS Flexbox para una lectura cómoda y directa.
* **Estética Cyberpunk / Neón:** Uso de fondos ultra oscuros, degradados radiales y efectos de resplandor mediante `box-shadow` y `text-shadow`.

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructura semántica para los contenedores de comida y botones de acción.
* **CSS3:** Estilos neón personalizados y animaciones de interacción (`hover`/`active`).
* **JavaScript (ES6+):** Manejo de promesas nativas (`new Promise`), temporizadores (`setTimeout`), estados aleatorios (`Math.random`) y control de flujo con `async/await`.

## 🧠 Estructura de la Lógica

El proyecto simula una fila de trabajo real en la cocina. Cada elemento del pedido se procesa de forma ordenada mediante bloques de captura de errores individuales:

1. **Intento de preparación:** Se invoca la función asíncrona con `await`.
2. **Éxito:** Si la promesa se resuelve con éxito, se actualiza el contenedor con un diseño cian neón.
3. **Fallo:** Si la promesa es rechazada, el `catch` específico de ese producto atrapa el error, muestra visualmente que ese alimento falló en color rosa neón, y permite que la cocina continúe con el siguiente artículo del pedido.

## 📦 Estructura del Proyecto

```text
├── index.html       # Estructura de la aplicación
├── styles.css       # Estilos de diseño Cyberpunk Neón en columna
└── index.js         # Lógica de simulación y try/catch secuenciales