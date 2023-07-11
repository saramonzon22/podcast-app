# Podcast-app

Application for the reproduction of the top 100 popular podcasts

## Descripción

Este repositorio consiste en la creación de una mini-aplicación para escuchar podcasts musicales, concretamente, los 100 más populares del momento en iTunes :musical_note: :fire:
Se ha montado para ello una SPA, con tres vistas posibles para el usuario, que permita reproducir los episodios. 
En primer lugar se renderiza toda la lista de podcast, junto a un buscador que permite filtrar según los datos que pongamos.
Una vez decidamos cual queremos oír, al hacer click nos llevará a una lista de todos los episodios disponibles junto con una tarjeta de información del podcast. 
Por último, la tercera vista, será el episodio que hemos seleccionado de la lista anterior, con un reproductor de audio para poder oírlo.

## Como acceder a la aplicación


Debemos clonar el repositorio en nuestro ordenador, con el comando `git clone` y la url que GitHub nos proporciona en la pestaña de Code, quedando de esta manera:

    `git clone https://github.com/saramonzon22/podcast-app.git`

Una vez tenemos la carpeta, desde la raiz del proyecto lanzaremos el comando `npm install`para tener así todas las dependencias del proyecto instaladas :computer:

## Modos

Hay que tener en cuenta que la aplicación tiene dos modos: Un modo ​development en el que se sirven los assets sin minimizar y otro modo producción.

### Modo development

Para acceder a este modo lanzaremos el comando `npm start` desde la raiz del proyecto, lo que nos permite visualizar los cambios que vamos haciendo en tiempo real en la aplicación. Hay que tener en cuenta que cada vez que guardemos, este lanzará un nuevo renderizado.

### Modo producción

Este modo lo lanzaremos con el comando `npm run build`, que convertirá nuestra aplicación en ficheros estáticos y los dejará listos para su uso en producción. 