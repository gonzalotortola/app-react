# Proyecto Final - Gonzalo Tórtola
####Curso ReactJS - Comisión #37070

## Sobre el e-commerce

**Waymara** es una empresa nacida en la provincia de Tucumán que se encuentra en constante expansión y hoy en día ya opera en gran parte del país. Principalmente comercializa indumentaria urbana y deportiva para mujeres y productos de cosmética y belleza.

**¿Por qué elegí está empresa para inspirarme para hacer la app?**
Trabajo actualmente para la empresa en el área de Diseño Gráfico y Manejo de Redes. Decidí realizar esta aplicación inspirado en la estética de la empresa aprovechando el material para rellenar el contenido, basándome en sitios e-commerce del mismo rubro.

---

## :nut_and_bolt: Tecnologías

Esta aplicación fue construida usando las siguientes tecnologias:

* [HTML5](https://developer.mozilla.org/es/docs/Web/HTML/)
* [JavaScript](https://developer.mozilla.org/es/docs/Web/CSS/)
* [React](https://reactjs.org/) \
Libreria para `JavaScript` que nos ayuda a construir interfaces reactivas.
* [Firebase](https://firebase.google.com/) \
Plataforma de desarrollo de Google, que nos sirve de backend para usar los servicios de base de datos llamado `firestore`.
* [Material UI](https://mui.com/) \
Libreria de componentes `React` de código abierto que implementa Material Design de Google.
* [Sass](https://sass-lang.com/) \
Es un pre-procesador para `css`. Es con el que esta escrito la gran mayoría de estilos de esta aplicación.\
* [Material Icons](https://mui.com/material-ui/icons/) \
Grupo de +2000 íconos creados por Google en su sistema `Material`, divididos en cinco secciones: "relleno", "borde", "redondeado", "duotono", "sharp".
* [NPM](https://www.npmjs.com/) \
Sistema de gestión de paquetes por defecto para Node.js.

---

## :electric_plug: Funciones dentro de `CartContext`

* **addToCart:** Añadir un item/producto al carrito.
* **isInCart:** Verificar si un producto ya se encuentra en el carrito.
* **priceTotal:** Suma la totalidad de los precios de los productos añadidos al carrito.
* **deleteItem:** Eliminar un producto del carrito.
* **quantityInCart:** Ver la cantidad total de productos en el carrito.
* **clearCart:** Vaciar el carrito.

---

## :fire: `Firebase`

### Colección: Productos
Cada `producto` tiene las siguientes características:

| Campo             | Tipo            |        Valor         |
| ----------------- | ----------------|----------------------|
| category | string | Categoría |
| description | string | Descripción |
| name | string | Nombre |
| tagline | string | Tagline |
| pictureURL | string | Imagen |
| price | number | Precio |
| stock | number | Stock |

### Colección: Orders
Cada `order` tiene las siguientes características:

| Buyer           | Tipo            |        Valor         |
| ----------------- | ----------------|----------------------|
| email | string | Correo electrónico|
| name | string | Nombre|
| phone | string | Teléfono |
| date | timestamp | Fecha y hora |


| Items            | Tipo            |        Valor         |
| ----------------- | ----------------|----------------------|
| category | string | Categoría |
| description | string | Descripción |
| name | string | Nombre |
| tagline | string | Tagline |
| pictureURL | string | Imagen |
| price | number | Precio |
| stock | number | Stock |
| quantity | number | Cantidad de unidades |
| total | number | Total |

---

## :rocket: Deploy
[![Netlify](https://img.shields.io/badge/Netlify-06795d?style=for-the-badge&logo=netlify&logoColor=white)]()

---

## 🔗 Links Personales

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gonzalotortola/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/gonzalotortola)