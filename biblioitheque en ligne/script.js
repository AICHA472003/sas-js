const bibliotheque = [

    { code:12,titre: "Clean Code", auteur: "Robert C. Martin", annee: 2008, disponible: true, prix: 150 },
  
    {code:45, titre: "Eloquent JavaScript", auteur: "Marijn Haverbeke", annee: 2018, disponible: true, prix: 200 },
    
    { code:12,titre: "Clean Code", auteur: "Robert C. Martin", annee: 2008, disponible: true, prix: 150 },
  
    {code:45, titre: "Eloquent JavaScript", auteur: "Marijn Haverbeke", annee: 2018, disponible: true, prix: 200 },
  
  ];
  
  let boooks=document.getElementById("books");
  
  
  function checkbook (bookcode) {
      let found=false;
      for (let i = 0 ; i < bibliotheque.length ; i++)
          if (bibliotheque[i].code === bookcode) {
              let card = document.createElement("div");
              let title = document.createElement("h3");
              title.textContent=bibliotheque[i].titre;
               
              let auteur= document.createElement("span");
              auteur.textContent=bibliotheque[i].auteur;
              let disponible=document.createElement("p");
              disponible.textContent=bibliotheque[i].disponible;
              if(bibliotheque[i].disponible)
              {let button=document.createElement("button");
                 button.textContent="reserver";
                 card.appendChild(button);
                 button.addEventListener ("click",function()
                 {
                    bibliotheque[i].disponible=false;
                    disponible.textContent = "false";
                    button. remove();});
            };

  
              card.appendChild(title);
              card.appendChild(auteur);
              card.appendChild(disponible);
              
              boooks.appendChild(card);
  
              found=true;
              break;
          }
          if(found==false){
              alert("book not found");
          }
  
  }
  
  
  for( let i=0 ; i<bibliotheque.length;i++){
  
      checkbook(bibliotheque[i].code);
  }