
# VAQUITA NOTES
## CONFIGURATIONS 

Environments need to be located in variables following `ngx-env/builder` style: 
```
NG_APP_ENV=production
NG_APP_API_URL="https://back-production.com"
NG_APP_STORAGE_KEY
```
Avoid locating sensitive keys in the environment package offer by Angular. These files are being uploaded to the github repo.

## INSTALLATION
Packages in use:

[ngx-env/builder](https://www.npmjs.com/package/@ngx-env/builder#quick-start) For loading environment variables (also from .env files)

```
ng add @ngx-env/builder
```

[ngx-sonner](https://tutkli.github.io/ngx-sonner/) Shows messages in a visual attractive way 
```
npm install ngx-sonner 
```
