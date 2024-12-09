// Funció salutació amb valor per defecte
function salutació(nom = "amic") {
    console.log("Hola, " + nom + "!");
  }
  
  // Crides a la funció amb i sense argument
  salutació("Joan");  // Hola, Joan!
  salutació();         // Hola, amic!