// 🧱 Tableau des livres
let livres = [
    {code:1, Titre:"ALICE IN THE WONDERLAND", Auteur:"Lewiscarroll", Annéedeparution:1865, Prix:15, disponible:true},
    {code:2, Titre:"LITTLE RED RIDING HOOD", Auteur:"Charles Perrault", Annéedeparution:1697, Prix:16, disponible:true},
    {code:3, Titre:"Candide", Auteur:"Voltaire", Annéedeparution:1759, Prix:42, disponible:true},
    {code:4, Titre:"Boite à merveille", Auteur:"Ahmed Sefrioui", Annéedeparution:1954, Prix:100, disponible:false},
    {code:5, Titre:"Snow White", Auteur:"Wilhelm Grimm", Annéedeparution:1812, Prix:100, disponible:true},
  ];
  
  // 🧩 Fonction principale pour afficher les livres
  function afficherLivres() {
    let container = document.getElementById("container");
    container.innerHTML = ""; // vider le contenu avant d’ajouter les nouvelles cartes
  
    livres.forEach(livr => {
      let card = document.createElement("div");
      card.classList.add("card");
  
      card.innerHTML = `
        <h2>${livr.Titre}</h2>
        <p><strong>Auteur :</strong> ${livr.Auteur}</p>
        <p><strong>Année :</strong> ${livr.Annéedeparution}</p>
        <p><strong>Prix :</strong> ${livr.Prix} MAD</p>
        <p><strong>Disponible :</strong> ${livr.disponible ? "✅ Oui" : "❌ Non"}</p>
        <button class="btn-supprimer" onclick="supprimerLivre(${livr.code})">Supprimer</button>
      `;
  
      container.appendChild(card);
    });
  
    // mettre à jour les statistiques
    afficherStats();
  }
  
  // 🗑️ Supprimer un livre à partir de son code
  function supprimerLivre(code) {
    for (let i = 0; i < livres.length; i++) {
      if (livres[i].code === code) {
        livres.splice(i, 1); // supprime le livre trouvé
        afficherLivres();    // met à jour l’affichage
        break;               // arrête la boucle une fois le livre supprimé
      }
    }
  }
  
  
  // 🔢 Calculer le nombre total de livres
  function nombreTotal() {
    return livres.length;
  }
  
  // ✅ Calculer le nombre de livres disponibles
  function nombreDisponibles() {
    return livres.filter(l => l.disponible === true).length;
  }
  
  // ❌ Calculer le nombre de livres indisponibles
  function nombreIndisponibles() {
    return livres.filter(l => l.disponible === false).length;
  }
  
  // 📊 Afficher les stats dans le footer
  function afficherStats() {
    document.getElementById("total").textContent = "Total : " + nombreTotal();
    document.getElementById("disponibles").textContent = " | Disponibles : " + nombreDisponibles();
    document.getElementById("indisponibles").textContent = " | Indisponibles : " + nombreIndisponibles();
  }
  
  // ▶️ Afficher les livres dès le chargement
  afficherLivres();
  