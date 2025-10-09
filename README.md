# 🛍️ React Trabajo Final — Perfumes

Proyecto final desarrollado con **React** que simula una tienda online de perfumes.  
Permite visualizar un catálogo de productos, acceder al detalle de cada perfume, agregarlo al carrito de compras y gestionar la compra de manera dinámica.

---

## 📦 Instalación y ejecución

1. **Cloná el repositorio**

## bash
git clone https://github.com/CristianCabo/React-Trabajo-final-Perfumes.git
cd React-Trabajo-final-Perfumes
npm install
npm run dev
npm run build
npm run preview

## 🎯 Objetivo del proyecto

Este proyecto fue creado con fines educativos como trabajo final de React.
El objetivo es aplicar los conceptos aprendidos en el desarrollo de una aplicación web interactiva y funcional, con:

Ruteo dinámico con React Router

Gestión de estado global mediante Context API

Componentización y reutilización de elementos

Simulación de carga de datos

Interfaz limpia, clara y responsive

src/
 ├─ assets/              → Imágenes, íconos y recursos estáticos
 ├─ components/          → Componentes reutilizables
 │   ├─ NavBar.jsx       → Barra de navegación principal
 │   ├─ ItemList.jsx     → Lista de perfumes
 │   ├─ Item.jsx         → Tarjeta individual de perfume
 │   ├─ ItemDetail.jsx   → Detalle del producto seleccionado
 │   ├─ CartItem.jsx     → Elemento individual dentro del carrito
 │   ├─ Footer.jsx       → Pie de página
 │   └─ Loader.jsx       → Componente opcional de carga
 ├─ contexts/
 │   └─ CarritoContext.jsx → Contexto global del carrito de compras
 ├─ pages/
 │   ├─ Home.jsx         → Página principal con listado de perfumes
 │   ├─ Detail.jsx       → Página de detalle del perfume
 │   └─ Cart.jsx         → Página del carrito
 ├─ services/
 │   └─ api.js           → Simulación de base de datos / Fetch de productos
 ├─ App.jsx              → Componente raíz y definición de rutas
 ├─ main.jsx             → Punto de entrada de la aplicación
 └─ index.css            → Estilos globales


## 🧩 Descripción de los componentes principales
Componente / Archivo	Función / Descripción
App.jsx	---> Define las rutas principales del proyecto (/, /detalle/:id, /cart). Contiene la estructura base.
main.jsx --->	Punto de entrada: renderiza la app, envuelve con BrowserRouter y el contexto global.
NavBar.jsx --->	Barra superior de navegación con acceso al home y al carrito. Muestra la cantidad de productos seleccionados.
ItemList.jsx --->	Renderiza una lista de perfumes obtenidos desde services/api.js.
Item.jsx --->	Tarjeta individual de cada perfume: muestra imagen, nombre, precio y botón de acción.
ItemDetail.jsx --->	Muestra información ampliada del producto seleccionado. Incluye botón “Agregar al carrito”.
Cart.jsx --->	Página del carrito: muestra los productos agregados, cantidades, totales y botones para eliminar o vaciar.
CartItem.jsx --->	Representa un producto dentro del carrito, con controles para modificar la cantidad o eliminarlo.
CarritoContext.jsx --->	Define el contexto global del carrito. Maneja agregar, eliminar y calcular totales.
api.js --->	Simula la obtención de perfumes (mock de datos o fetch).
Footer.jsx	Pie de página con información adicional o créditos.


## ⚙️ Funcionalidades principales

- Listado de productos con renderizado dinámico.

- Vista detallada de cada perfume.

- Agregado y eliminación de productos en el carrito.

- Cálculo de totales (cantidad y precio).

- Context API para el manejo global del carrito.

- Navegación con React Router DOM.

- Interfaz responsive y adaptable.


## 🧠 Flujo de la aplicación

- El usuario ingresa a la Home y visualiza el listado de perfumes.

- Puede hacer clic en un producto para ver su detalle.

- Desde el detalle, puede agregar al carrito la cantidad deseada.

- En el carrito, puede revisar su selección, modificar cantidades o eliminar productos.

- Se calcula el total dinámicamente.

## 🧪 Tecnologías utilizadas

- ⚛️ React — Framework principal

- 🧭 React Router DOM — Navegación entre páginas

- 🧰 Context API — Gestión de estado global

- ⚡ Vite — Entorno de desarrollo y build rápido

- 💅 CSS — Estilos personalizados

- 📦 Node.js + npm — Dependencias y scripts

## Dominio
-https://perfumes-porciuj.netlify.app/


## 🧑‍💻 Autor

- Cristián Cabo
- Desarrollador Frontend
- 📍 Proyecto final de React – Aplicación E-commerce de Perfumes