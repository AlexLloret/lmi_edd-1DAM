# Mecanismes i Procediment per a Desenvolupament Col·laboratiu

## Mecanisme Utilitzat
- **Sistema de control de versions: Subversion (SVN)**
  - Subversion és un sistema centralitzat que facilita el control de versions del codi font compartit entre diversos desenvolupadors.

## Procediment de Treball

1. **Configuració inicial del repositori**:
   - Crear el repositori a SVN i fer la primera còpia del projecte amb:
     ```bash
     svn co <URL-del-repositori>
     ```

2. **Desenvolupament**:
   - Abans de començar a treballar, actualitza els teus arxius:
     ```bash
     svn up
     ```
   - Treballa en la teva branca i realitza els canvis necessaris.

3. **Pujar els canvis al repositori**:
   - Després de realitzar els canvis, puja els arxius amb:
     ```bash
     svn ci -m "Descripció dels canvis"
     ```

4. **Revisió i gestió de conflictes**:
   - Quan fusionis canvis, es poden produir conflictes, que caldrà resoldre manualment.

5. **Verificar l'estat dels arxius**:
   - Utilitza:
     ```bash
     svn st
     ```