// Declarem un vector amb els dies de la setmana
let diesSetmana = ["Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte", "Diumenge"];

// Mostrem el segon i el cinquè element
console.log(diesSetmana[1]);  // "Dimarts" (index 1 és el segon element)
console.log(diesSetmana[4]);  // "Divendres" (index 4 és el cinquè element)

// Modifiquem l'últim element per indicar "Dia desconegut"
diesSetmana[6] = "Dia desconegut";

// Mostrem el vector després de la modificació
console.log(diesSetmana);