# Creating a new Library with Angular

## Setup

1. Crear workspace `ng new <workspace-name> --create-application=false`
2. Generar librería `ng g library <library-name>`
    * Crea la librería dentro de la carpeta `projects`

## Testear librería
1. Generar app para testear la librería `ng g application <app-name>`
    * Crea una app angular dentro de la carpeta `projects`
2. Para usar la librería hay que correr: `ng build my-lib`
    * Hace el build de la librería en la carpeta dist
3. Ir a `projects/<app-name>/src/app/app.module.ts` e importar la librería:
    * `import { MyLibModule } from 'my-lib';`
    * Agregar MyLibModule a los imports de la clase AppModule
4. Ahora puedes usar el componente de my-lib en cualquier parte de tu app con `<lib-my-lib></lib-my-lib>`
5. Cada vez que se haga un cambio en la librería, correr `ng build my-lib` o correr una vez `ng build my-lib --watch`

## Crear nuevos componentes
1. `ng g component <component-name> --project=my-lib`
    * Para crearlo dentro de una carpeta `ng g component <folder-name/component-name> --project=my-lib`
2. Exportarlo desde archivo `public-api.ts`
3. Agregar el component a los exports del NgModule de la librería (en el ejemplo `my-lib.module.ts`)

## Usar librería en otro workspace o app
### Opción 1: Crear paquete tgz
1. `cd dist/my-lib`
2. `npm pack` -> creates tgz file
3. Si tienes ese tgz localmente, puedes correr `npm install <path_to_tgz_file>`

### Opción 2: Publicar a npm
1. Actualizar package.json con detalles adicionales (autor, github, etc)
2. Crear cuenta en npm si no tienes:  [link](https://www.npmjs.com/signup)
3. Login a la cuenta con `npm login`
4. Hacer build final: `ng build my/lib --prod`
5. `cd dist/my-lib`
6. `npm publish --access public`


## NPM Package Link
[https://www.npmjs.com/package/@mesantamaria/my-lib](https://www.npmjs.com/package/@mesantamaria/my-lib)

# AngularLibrary

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
