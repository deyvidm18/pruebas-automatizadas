# Pruebas Automatizadas de Software | MISO
**Proyecto elaborado por William Sanchez y Deyvid Martínez | MISO**
## _Pruebas E2E_
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Proyecto de automatización de pruebas de Software, utilizando - [Kraken] y [Cypress.io]



## Escenarios de Pruebas

Dentro del alcance del proyecto se contempla la ejecución de 6 escenarios de pruebas con 3 métodos de validación de datos, para un total de 18 pruebas.

## Escenarios A-Priori:
En los cuales se generá la data a probar de forma manual, antes de la ejecución de las pruebas
## Datos Aleatorios:
Los datos son generados a través de la librería faker, al momento de la ejecución de las pruebas.
## Pool-Datos
Los datos son generados de forma aleatoria y almacenados en un archivo de formato JSON, para su utilización durante las pruebas.

## Escenarios de Pruebas

- Invite new people to staff: Un usuario administrador realiza la invitación a otro usuario (correo) para tener acceso al portal administrativo de ghost
- Change the site description: Un usuario administrador modifica la descripción del sitio
- Create new page: Un usuario administrador crea una nueva página
- Create new post: Un usuario admnistrador crea un nuevo post
- Create new tag: Un usuario administrador crea una nueva etiqueta para clasificar el contenido del sitio
- Login to the admin panel: Un usuario ingresa al panel administrativo con correo y password

Los escenarios de pruebas se realizaron utilizando el patrón [GivenWhenThen] desarrollado por  [Martin Fowler]:

> The given part describes the state of the world before you begin the behavior you're specifying in this scenario. You can think of it as the pre-conditions to the test.
> The when section is that behavior that you're specifying.
> Finally the then section describes the changes you expect due to the specified behavior.

## Instalación de Cypress.io

En este caso se recomienda seguir las intrucciones de instalación del siguiente enlace [Cypress.io](https://docs.cypress.io/guides/getting-started/installing-cypress.html)

## Faker

Para la instalación de la herramienta faker, se utiliza el manejador de paquetes npm:
```sh
npm i faker --save-dev
```

## Pruebas Cypress.io

Para la ejecución de las pruebas con Kraken se debe estar sobre la carpeta Cypress.io y ejecutar el siguiente comando:
```sh
cd myCypress
$(npm bin)/cypress open 
```
Adicionalmente se utilizó la librería mochaawesome para generar el reporte, realizando la siguiente ejecución de pasos:

Se agrega el parámetro reportes a la ejecución de Cypress.IO

```sh
$(npm bin)/cypress run --reporter mochawesome 
```

Se realiza el merge de los distintos archivos JSON de resultados

```sh
npx mochawesome-merge --reportDir *.json>mochawesome.json 
```
Se genera el reporte en formato HTML

```sh
npx marge mochawesome.json                                       
```


## Análisis de los resultados de las pruebas.

La utilización de generación de datos aleatorios, permite la rápida aplicación de múltiples escenarios de pruebas para validar casos de borde y escenarios de datos no válidos. La utilización de estas herramientas, permite abarcar una gran cantidad de casos que de forma manual serían imposibles o tomarían demasiado tiempo su ejecución.

## Resultados HTML

Dentro del repositorio se comparte el reporte en HTML para la visualización de los resultados de las pruebas:

https://github.com/deyvidm18/pruebas-automatizadas/blob/semana7/myCypress/cypress/report/mochawesome-report/mochawesome-report/mochawesome.html


## Resultados Videos

Dentro del repositorio se comparten los videos con la evidencia de las pruebas ejecutadas:

https://github.com/deyvidm18/pruebas-automatizadas/tree/semana7/myCypress/cypress/videos






[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [Kraken]:<https://github.com/TheSoftwareDesignLab/KrakenMobile>
   [Cypress.io]:<https://www.cypress.io>
   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [martin fowler]: <https://martinfowler.com/>
   [givenwhenthen]: <https://martinfowler.com/bliki/GivenWhenThen.html#:~:text=Given%2DWhen%2DThen%20is%20a,%2DDriven%20Development%20(BDD)>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
