
const etudiant = {
 id: 2026,
 nom: "Ndiaye",
 prenom: "Moussa",
 filiere: "IAGE",
 niveau: "L2",
 ville: "Dakar"
};

const resultats = ";"
const { nom, prenom, filiere } = etudiant;

const { niveau: classe } = etudiant;

const [premiereNote, deuxiemeNote, , , derniereNote] = resultats;

const [note1, , note3] = resultats;


const { email = "moussa.ndiaye@exemple.com" } = etudiant;
console.log(`L'étudiant se nomme ${prenom} ${nom}, il est inscrit en filière ${filiere} (classe de ${classe}).`);


console.log("\n--- VÉRIFICATIONS ---");
console.log("Q1 - Extraction classique :", { nom, prenom, filiere });
console.log("Q2 - Variable renommée (classe) :", classe);
console.log("Q3 - Première, deuxième et dernière note :", { premiereNote, deuxiemeNote, derniereNote });
console.log("Q4 - Première et troisième note (position ignorée) :", { note1, note3 });
console.log("Q5 - Propriété email avec valeur par défaut :", email);
