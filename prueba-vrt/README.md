# Pruebas de Regresion Visual | MISO
**Proyecto elaborado por William Sanchez y Deyvid Martínez | MISO**
## _Pruebas E2E_
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Proyecto de regresión visual, utilizando - [Cypress.io] [Resemble.js]



## Escenarios de Pruebas

Dentro del alcance del proyecto se contempla la ejecución de 10 escenarios de pruebas E2E a la aplicación ghost:

- Invite new people to staff: Un usuario administrador realiza la invitación a otro usuario (correo) para tener acceso al portal administrativo de ghost
- Create new page: Un usuario administrador crea una nueva página
- Create new post: Un usuario admnistrador crea un nuevo post
- Create new tag: Un usuario administrador crea una nueva etiqueta para clasificar el contenido del sitio
- Login to the admin panel: Un usuario ingresa al panel administrativo con correo y password
- View about page: Un usuario administrador visualiza los datos de ghost incluyendo la versión
- View labs: Un usuario administrador visualizan las capacidades experimentales del sitio
- Views pages: Un usuario administrador visualiza el listado de paginas del sitio
- View posts: Un usuario administrador visualiza los posts del sitio
- View home: Un usuario administrador visualiza los posts del sitio

## Instalación de Cypress.io

En este caso se recomienda seguir las intrucciones de instalación del siguiente enlace [Cypress.io](https://docs.cypress.io/guides/getting-started/installing-cypress.html)


## Pruebas Cypress.io

:
```sh
cd myCypress
$(npm bin)/cypress open 
```


## Análisis de los resultados de las pruebas.




## Análisis Cypress.io

- Es una herramienta muy utilizada para la automatización de pruebas en entornos web. Existe mucha documentación en la web.
- Requiere un mayor conocimiento técnico para la elaboración de las pruebas, y su lectura no es tan amigable como Kraken.
- No tiene un comportamiento correcto con el redireccionamiento dinámico de los sitios webs. Este problema se encuentra debidamente reportado en su sitio web, y se prevé que se va a solucionar en muchas versiones.
- La instalación fue más simple que Kraken, pero la elaboración de las pruebas fue menos ágil



[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [Cypress.io]:<https://www.cypress.io>
   [Resemble.js]: <https://github.com/rsmbl/Resemble.js/blob/master/README.md>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [jQuery]: <http://jquery.com>
   
   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
