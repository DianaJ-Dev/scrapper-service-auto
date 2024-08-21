# Scrapper-Service-Opinautos

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Instrucciones para ejecutar el proyecto ](#2-Instrucciones-para-ejecutar-el-proyecto)
* [3. Desarrollo del proyecto ](#3-Desarrollo-del-proyecto )
* [4. Futuras mejoras ](#3-Futuras-mejoras )

***

## 1. Resumen del proyecto

Scrapper-Service-Opinautos es una API diseñada para extraer información
de opiniones desde el sitio web [Opinautos](https://www.opinautos.com/co).
Con esta API, puedes obtener información específica sobre tres modelos 
de autos: Chevrolet Sail, Volkswagen Gol, y Toyota Hilux. La API te 
permitirá extraer datos clave como la valoración, así como el mejor y peor
comentario para cada una de estas marcas.

La información se muestra en el siguiente formato:

<img width="600" alt="Respuesta" src="https://github.com/DianaJ-Dev/scrapper-service-auto/blob/main/ImgReadme/ImgRespuesta.png">

## 2. Instrucciones para ejecutar el proyecto

1. Es muy fácil de usar:

Simplemente accede a la página

```text
https://scrapper-service-auto.onrender.com/scrapper-service/brand-name
```

Luego, añade el nombre de la marca al final de la URL.

```text
https://scrapper-service-auto.onrender.com/scrapper-service/Chevrolet Sail
```

### `Para correrlo localmente`

```text
node index.js
```

## 3. Desarrollo del proyecto 

El desarrollo del proyecto se realizó utilizando los siguientes paquetes:

### `cors`
Permite que tu aplicación Express acepte solicitudes de diferentes dominios,
necesario para habilitar la comunicación entre servidores.

```text
npm install cors
```

### `express`
Un framework minimalista para crear aplicaciones web y APIs en Node.js,
facilitando el manejo de rutas, solicitudes, y respuestas.

```text
$ npm install express --save
```

### `puppeteer`
Proporciona una API para controlar un navegador web de manera automatizada

```text
$ npm i puppeteer
```

## 3. Futuras mejoras

* [ ] Soporte para más marcas de autos: Expandir la API para incluir más modelos y marcas.
* [ ] Optimización del rendimiento: Mejorar la velocidad y eficiencia del scraping.











