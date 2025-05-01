
# VAQUITA NOTES
## CONFIDURACIONES 

variables de entorno nesecitan seguir el estilo de `ngx-env/builder` con el prefijo `NG_APP`: 
```
NG_APP_ENV=production
NG_APP_API_URL="https://back-production.com"
NG_APP_STORAGE_KEY
```
$\color{yellow}{\textsf{Evita poner claves u otros datos sensibles en el modulo environments de angular.
Estos archivos (ej: environment.ts) seran subidos al repo.}}$

Se puede tener diferentes configuraciones con archivos .env

## INSTALLATION
Paquetes externos:

[ngx-env/builder](https://www.npmjs.com/package/@ngx-env/builder#quick-start) Carga variables de entorno

```
ng add @ngx-env/builder
```

[ngx-sonner](https://tutkli.github.io/ngx-sonner/) Muestra mensajes en un toast
```
npm install ngx-sonner 
```

[Angular Material]() Añade componentes visuales listos para usar de la libreria Material
```
ng add @angular/material
```