function determinaDia(numDia) {
    // Utilitzem el switch per determinar el dia segons el número
    switch (numDia) {
      case 1:
        console.log("Dilluns");
        break;
      case 2:
        console.log("Dimarts");
        break;
      case 3:
        console.log("Dimecres");
        break;
      case 4:
        console.log("Dijous");
        break;
      case 5:
        console.log("Divendres");
        break;
      case 6:
        console.log("Dissabte");
        break;
      case 7:
        console.log("Diumenge");
        break;
      default:
        console.log("Número de dia invàlid. Ha de ser un valor entre 1 i 7.");
    }
  }
  
  // Proves de la funció amb diferents números de dia
  determinaDia(1);  // Dilluns
  determinaDia(4);  // Dijous
  determinaDia(7);  // Diumenge
  determinaDia(8);  // Número de dia invàlid. Ha de ser un valor entre 1 i 7.  