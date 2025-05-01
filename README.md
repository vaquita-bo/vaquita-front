# Vaquita 
Plataforma de compras grupales boliviana

$\color{yellow}{\textsf{WIP:}}$ Desarrollo en curso

## GitFlow
### Ramas
Ramas principales: prod, dev
  - prod (Production):  Version abierta al publico
  - dev (Development): Rama con los cambios estables mas recientes. 
Ramas temporales: 
  - features: ft-product-list
  - hotfix: hot-product-align

### Pull Requests
Criterios de Pull request 
  - Código corriendo, desplegado
  - Aprobación de 2 miembros (además del responsable)
  - Acción de aprobación: rebase (via github)
### Versiones
Una suma de features se programa para cada versión.
Cada version incluye una descripcion de cambios:
  - lista de features 
  - limites o decisiones 
  - deben ser anotados con SemVer (ej: 1.0.1) 
