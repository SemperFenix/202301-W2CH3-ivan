# Week 2 - Challenge 3

## Recrear los métodos del objeto _Array_

En este reto tenemos que recrear los distintos métodos del objeto _Array_ (length, push, pop, slice, indexOf...) y testearlos utilizando _jest_.

Realizaremos toda la instalación inicial (_husky_, _eslint_, y _jest_), además, necesitaremos instalar el transpilador _Babel_ para poder trabajar con _jest_ usando módulos _ECMA6_.

## Instalar jest

- `npm i -D jest`
- Crear archivo _sample.test.js_
- instalar `npm i -D @types/jest @babel/plugin-transform-modules-commonjs`
- Editar _.eslintrc.json_:

```json
"env": {
    "browser": true,
    "es2021": true,
    "node": true,
    "jest": true
  },
```

- Crear _jsconfig.json_
- Añadir en ese archivo:

```json
{  "typeAcquisition": { "include":["jest"] } }`
```

## Dudas
