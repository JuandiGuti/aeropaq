## Aeropaq

Documentacion visual del proyecto (wireframe, mockup y prototipos de flujos). Este README no incluye instrucciones de ejecucion.

## Documentacion (README)

a. Tecnologias y versiones.
	- Frontend: React 19 + Vite.
	- Estilos: CSS Modules.
	- Herramientas: ESLint.
	- Lenguaje: JavaScript (ES Modules).
	- Entorno: Node.js (version LTS recomendada) y npm.

b. Como ejecutar el proyecto de frontend.
	1. Instalar dependencias.
		- `cd frontend`
		- `npm install`
	2. Ejecutar en desarrollo.
		- `npm run dev`
	3. Abrir la URL local que muestra Vite en la terminal.

c. Decisiones tecnicas relevantes (estructura de componentes, rutas, etc.)
	- Componentes modulares por seccion, cada uno con su JSX y CSS Module.
	- Estructura por componentes para facilitar el trabajo en equipo (eramos dos personas y asi pudimos dividir los modulos).
	- Vite como bundler por la rapidez para levantar el proyecto, hot restart y buena carga de CSS.
	- Composicion de secciones en una sola pagina.
	- Single-page app sin rutas; la navegacion es por anclas a secciones.
	- Librerias adicionales:
		- Swiper (carrusel/slider): https://swiperjs.com/ - Documentacion oficial: https://swiperjs.com/get-started
		- Country State City (catalogo de paises/estados/ciudades): https://www.npmjs.com/package/country-state-city

### Wireframe

- Movil y desktop: https://www.figma.com/design/J6ciiCWjRB1omdsqCBqXxJ/Programacion-Web---Proyecto-1----Wireframes?node-id=0-1&t=fRD3dtzQhxVG78iD-1

### Mockup

- Movil: https://www.figma.com/proto/cbDOyqWDD8jeqB5FZat4B2/Programacion-Web---Proyecto-1----Movil-Mockup?node-id=4002-74&p=f&t=rPXtX9t4QdClvzwZ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4002%3A74
- Desktop: https://www.figma.com/proto/D3DFmW2wdV2jjce3CZ0G1s/Programacion-Web---Proyecto-1----Desktop-Mockup?node-id=2021-16&p=f&t=AKUrOY20KEt32qFb-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2021%3A16

### Prototipo de flujos

- Movil: usar el prototipo del mockup movil (link arriba).
- Desktop: usar el prototipo del mockup desktop (link arriba).

### Alcance de los flujos

- Navegacion principal entre secciones
- Visualizacion de servicios y planes
- Contacto y cotizaciones
