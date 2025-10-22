let fruits=["pomme","bannane","cerise"] ;
console.log("Tableau initial:",fruits);

fruit push("orange") ;
console. log("Apres push:",fruit);
fruit.pop();
console.log("Après pop :", fruits);


fruits[1] = "kiwi";
console.log("Après modification :", fruits);

console.log("Boucle for :");
for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}

let produits = [
    { nom: "Stylo", prix: 5 },
    { nom: "Cahier", prix: 15 },
    { nom: "Crayon", prix: 3 },
  ];
  
  console.log("Liste des produits :");
  produits.forEach((p) => console.log(`${p.nom} → ${p.prix} DH`));

