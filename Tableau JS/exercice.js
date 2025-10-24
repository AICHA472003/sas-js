//Creer un tableau des livres
let livres=[
    {Name:"Boite a merveille",Auteur:"AHMED SEFFRIOUI",Prix:100},
    {Name:"Snow white",Auteur:"Wilhelm Grimm",Prix:100},
    { Name:"HARRY POTTER",Auteur:"Joanne ROWLING",Prix:150} ,
]
console.log("listes des livres:",livres);
console.log("Titres des livres:");
livres.forEach((livre) =>console.log (livre.Name)) ;
//Totale des prixs
    
let total=0;
livres.forEach((livre)=>total+=livre.Prix);
console.log("Le totale est:",total);
//LEprix est superieur 100;
let max=100;
for (let livre of livres){
    if(livre.Prix>max){
        console.log(livre.titre)
    }
}
livres.push({titre:"candide",auteur:"Voltaire",Prix:"40"});
console.log("New livre",livres);

