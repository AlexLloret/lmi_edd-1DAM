function verificaHora(hora) {
    // Comprovem si la hora està entre 6 i 12 (inclusiu)
    if (hora >= 6 && hora <= 12) {
      console.log("Bon dia");
    }
    // Comprovem si la hora està entre 13 i 20 (inclusiu)
    else if (hora >= 13 && hora <= 20) {
      console.log("Bona vesprada");
    }
    // Si la hora no és dins d'aquests rangs, es considera "Bona nit"
    else {
      console.log("Bona nit");
    }
  }
  
  // Proves de la funció amb diferents hores
  verificaHora(9);   // Bon dia
  verificaHora(15);  // Bona vesprada
  verificaHora(22);  // Bona nit