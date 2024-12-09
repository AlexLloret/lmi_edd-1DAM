# TASCA 2 - ESPAIS DE NOMS

Els espais de noms en documents XML, com el AndroidManifest.xml d’Android, permeten diferenciar elements que poden tenir el mateix nom però provenen de diferents vocabularis o definicions. Un espai de noms és essencialment un identificador que qualifica les etiquetes i atributs dins d’un document per evitar conflictes.

## Per a qué s'utilitzen.
En el context d’AndroidManifest.xml, s'utilitzen espais de noms per integrar atributs i elements específics d'Android. L’espai de noms més comú és xmlns:android="http://schemas.android.com/apk/res/android", que defineix el vocabulari per als atributs Android, com ara android:versionCode o android:label. Això assegura que aquests atributs es distingeixin d’altres possibles etiquetes o atributs que puguin existir.

## Funcionalitats
Mitjançant els espais de noms, es poden combinar diferents esquemes dins del mateix document sense ambigüitats. Aquest mecanisme és crític en el desenvolupament d'aplicacions Android perquè permet gestionar múltiples components amb els seus propis conjunts de dades, fent que el sistema reconegui de manera clara quin atribut o element pertany a quin context.

Així, els espais de noms asseguren una correcta interpretació i validesa del document XML dins d’Android.