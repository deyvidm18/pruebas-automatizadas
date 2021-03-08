# Pruebas Automatizadas de Software | MISO
## _Pruebas E2E_
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Proyecto de automatización de pruebas de Software, utilizando - [Kraken] y [Cypress.io]

## Escenarios de Pruebas

Dentro del alcance del proyecto se contempla la ejecución de 11 escenarios de pruebas E2E a la aplicación ghost:

- Invite new people to staff: Un usuario administrador realiza la invitación a otro usuario (correo) para tener acceso al portal administrativo de ghost
- Change the site description: Un usuario administrador modifica la descripción del sitio
- Create new page: Un usuario administrador crea una nueva página
- Create new post: Un usuario admnistrador crea un nuevo post
- Create new tag: Un usuario administrador crea una nueva etiqueta para clasificar el contenido del sitio
- Login to the admin panel: Un usuario ingresa al panel administrativo con correo y password
- View about page: Un usuario administrador visualiza los datos de ghost incluyendo la versión
- View labs: Un usuario administrador visualizan las capacidades experimentales del sitio
- Views pages: Un usuario administrador visualiza el listado de paginas del sitio
- View posts: Un usuario administrador visualiza los posts del sitio

Los escenarios de pruebas se realizaron utilizando el patrón [GivenWhenThen] desarrollado por  [Martin Fowler]:

> The given part describes the state of the world before you begin the behavior you're specifying in this scenario. You can think of it as the pre-conditions to the test.
> The when section is that behavior that you're specifying.
> Finally the then section describes the changes you expect due to the specified behavior.

## Instalación de Kraken

Para la instalación de Kraken, se recomienda seguir el paso a paso del siguiente enlace [Kraken](https://github.com/TheSoftwareDesignLab/KrakenMobile). Se debe destacar que se esta utilizando la versión [1.0.9](https://github.com/TheSoftwareDesignLab/KrakenMobile/tree/1.0.9). La instalación se realizó a través de la generación de un Gemfile y una gema de Ruby Bundler.

Es importante destacar que se realizaron modificaciones al código fuente de Kraken, para la inclusión de nuevas instrucciones de pruebas, por lo cual se incluye dentro del repositorio la versión actualizada.

## Instalación de Cypress.io

En este caso se recomienda seguir las intrucciones de instalación del siguiente enlace [Cypress.io](https://docs.cypress.io/guides/getting-started/installing-cypress.html)

## Pruebas Kraken

Para la ejecución de las pruebas con Kraken se debe estar sobre la carpeta myKraken y ejecutar el siguiente comando:
```sh
cd myKraken
bundle install
bundle exec kraken-mobile run --properties.json
```

Para visualizar los resultados se debe consultar el siguiente enlace [Github](https://github.com/deyvidm18/pruebas-automatizadas/tree/main/myKraken/reports)

## Pruebas Cypress.io

Para la ejecución de las pruebas con Kraken se debe estar sobre la carpeta myKraken y ejecutar el siguiente comando:
```sh
cd myCypress
$(npm bin)/cypress open 
```

## Análisis de los resultados de las pruebas.

Ambas herramientas son muy poderosas para automatizar las pruebas E2E y permiten una excelente cobertura de pruebas, sin embargo el proceso de instalación y resolución de problemas técnicos es algo complejo sobretodo. La ejecución de las pruebas requiere una curva de aprendizaje importante y puede ser un freno importante para su adopción. Es importante destacar, que luego de superar la primera fase de uso en las herramientas, la velocidad de creación de las pruebas se acelera mucho. Luego de utilizar las herramientas estas son las conclusiones para cada una de ellas.

## Análisis Kraken
- Es una herramienta en constante evolución, y en proceso de construcción. No existe suficiente documentación y su adopción es muy reducida por lo que conseguir información en foros en la web, es muy excasa. Por lo tanto su adopción en entornos de producción debe ser tomada con mucha precaución.
- Homologa la ejecución de pruebas para web y aplicación móviles, por lo que el tiempo de desarrollo se ve reducido considerablemente.
- Es la que ofrece un lenguaje de construcción de pruebas mucho más natural, por lo que puede ser tomado como documentación viva, y leído facilmente por el equipo de negocio.
- Tiene dependencia con otros softwares de pruebas, por lo que cambios en las versiones de los mismos puede impactar el funcionamiento de la herramienta.

## Análisis Cypress.io
- Es una herramienta muy utilizada para la automatización de pruebas en entornos web. Existe mucha documentación en la web.
- Requiere un mayor conocimiento técnico para la elaboración de las pruebas, y su lectura no es tan amigable como Kraken.
- No tiene un comportamiento correcto con el redireccionamiento dinámico de los sitios webs. Este problema se encuentra debidamente reportado en su sitio web, y se prevé que se va a solucionar en muchas versiones.
- La instalación fue más simple que Kraken, pero la elaboración de las pruebas fue menos ágil


**Proyecto elaborado por William Sanchez y Deyvid Martínez | MISO**

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
