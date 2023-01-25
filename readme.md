# Week 2 - Challenge 3

## Recrear los métodos del objeto _Array_

En este reto tenemos que recrear los distintos métodos del objeto _Array_ (length, push, pop, slice, indexOf...) y testearlos utilizando _jest_.

Realizaremos toda la instalación inicial (_husky_, _eslint_, y _jest_), además, necesitaremos instalar el transpilador _Babel_ para poder trabajar con _jest_ usando módulos _ECMA6_.

## Antes de empezar

Primero inicializamos el repositorio con los cuatro archivos básicos(_readme.md, package.json, .gitignore y .editorconfig_), hacemos el _Initial commit_ y subimos el repositorio. A continuación, creamos una rama nueva de configuración inicial e instalamos _husky_ junto con los dos _huskys_ que vamos a utilizar durante el curso.

### Instalar jest

- Introducir en el terminal:

```git
npm i -D jest
```

- Crear archivo _sample.test.js_
- Instalar @types/jest (jest interpreta que vamos a usar un módulo de TypeScript) y el transpilador _Babel_. Para ello introducir en el terminal:

```git
npm i -D @types/jest @babel/plugin-transform-modules-commonjs
```

- Editar _.eslintrc.json_:

```json
"env": {
    "browser": true,
    "es2021": true,
    "node": true,
    "jest": true
  },
```

- Crear _jsconfig.json_ y añadir en ese archivo este código:

```json
{  "typeAcquisition": { "include":["jest"] } }`
```

## Dudas
