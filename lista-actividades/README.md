# Lista de Actividades

Esta es una aplicación simple desarrollada en **Angular 19** que permite gestionar una lista de actividades. La aplicación incluye funcionalidades básicas como agregar, editar y eliminar actividades. Además, este proyecto está diseñado para aprender a realizar pruebas end-to-end (E2E) con **Cypress**.

---

## Características

- **Agregar una actividad**: Permite al usuario agregar una nueva actividad a la lista.
- **Editar una actividad**: Permite al usuario modificar una actividad existente.
- **Eliminar una actividad**: Permite al usuario eliminar una actividad de la lista.
- **Pruebas con Cypress**: Incluye ejemplos de pruebas E2E para validar el funcionamiento de la aplicación.

---

## Tecnologías utilizadas

- **Angular 19**: Framework frontend para construir la aplicación.
- **Cypress**: Herramienta de pruebas end-to-end (E2E) para automatizar pruebas en el navegador.
- **CSS**: Para estilizar la interfaz de usuario.

---

## Cómo ejecutar el proyecto

### Requisitos previos

- **Node.js**: Asegúrate de tener Node.js instalado en tu sistema. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).
- **Angular CLI**: Instala Angular CLI globalmente ejecutando:
  ```bash
  npm install -g @angular/cli

### Pasos para ejecutar la aplicación
- **Clonar el repositorio**:
  ```bash
  git clone https://github.com/tu-usuario/lista-actividades.git
  cd lista-actividades

- **Instalar dependencias**:
  ```bash
  npm install


- **Ejecutar la aplicación**:
  ```bash
  ng serve
  La aplicación estará disponible en http://localhost:4200.

## Pruebas con Cypress
Este proyecto incluye pruebas end-to-end (E2E) con Cypress para validar el funcionamiento de la aplicación. A continuación, te explicamos cómo ejecutar las pruebas.

### Instalar Cypress
- **Agrega Cypress al proyecto ejecutando**:
  ```bash
  npm install cypress --save-dev

### Ejecutar las pruebas
- **Abrir Cypress**:
  ```bash
  npx cypress open

Esto abrirá la interfaz de Cypress, donde podrás seleccionar y ejecutar las pruebas.

### Ejecutar pruebas en modo headless:
- Si prefieres ejecutar las pruebas en la terminal, usa:
  ```bash
  npx cypress run


## Ejemplos de pruebas
Las pruebas incluidas en este proyecto validan las siguientes funcionalidades:

- **Agregar una actividad**:

Verifica que se pueda agregar una nueva actividad a la lista.

- **Editar una actividad**:

Verifica que se pueda editar una actividad existente.

- **Eliminar una actividad**:

Verifica que se pueda eliminar una actividad de la lista.


### Puedes encontrar las pruebas en la carpeta cypress/e2e.

- Estructura del proyecto
  ```bash
    lista-actividades/
    ├── src/
    │   ├── app/
    │   │   ├── lista-actividades/
    │   │   │   ├── lista-actividades.component.ts
    │   │   │   ├── lista-actividades.component.html
    │   │   │   └── lista-actividades.component.css
    │   │   ├── app.component.ts
    │   │   ├── app.component.html
    │   │   └── app.component.css
    │   ├── styles.css
    │   └── main.ts
    ├── cypress/
    │   ├── e2e/
    │   │   └── lista-actividades.spec.cy.ts
    │   └── support/
    ├── angular.json
    ├── package.json
    └── README.md

## Licencia
Este proyecto está bajo la licencia MIT.

## Autor
Felipe Valenzuela - https://github.com/fvalenzuelaNexus

¡Gracias por usar esta aplicación! Si tienes alguna pregunta o sugerencia, no dudes en abrir un issue en el repositorio. 😊

## Nota
Este proyecto está diseñado para fines educativos y es una excelente manera de aprender a trabajar con Angular 19 y Cypress. ¡Diviértete explorando y escribiendo pruebas! 🚀