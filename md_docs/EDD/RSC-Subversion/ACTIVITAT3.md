# Diferències entre RCS i Subversion

## RCS:
- Sistema de control de versions local.
- El repositori es troba a l'usuari, no a un servidor central.
- Comandes:
  - **co**: Extraure una versió del fitxer.
  - **ci**: Ingressar els canvis al repositori.

## Subversion (SVN):
- Sistema de control de versions centralitzat.
- El repositori es troba en un servidor central.
- Comandes:
  - **svn co**: Clonar una còpia del repositori al sistema local.
  - **svn ci**: Pujar canvis al repositori central.
  - **svn st**: Mostrar l'estat dels fitxers locals.
  - **svn add**: Afegir fitxers al repositori.
  - **svn up**: Actualitzar la còpia local amb els canvis del repositori central.