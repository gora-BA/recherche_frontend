
const groupeA = ["Awa", "Moussa", "Fatou"];
const groupeB = ["Ibra", "Mariama"];
const etudiantBase = { nom: "Diop", filiere: "IAGE", niveau: "L2" };
const coordonnees = { ville: "Dakar", telephone: "77XXXXXXX" };
const contact = { email: "diop@exemple.com", telephone: "78XXXXXXX" }; 


const tousLesEtudiants = [...groupeA, ...groupeB];

const copieGroupeA = [...groupeA, "Cheikh"];

const etudiantComplet = {
    ...etudiantBase,
    age: 22,
    ville: "Dakar"
};

const etudiantL3 = {
    ...etudiantBase,
    niveau: "L3" 
};

const profil = {
    ...coordonnees,
    ...contact
};


console.log("--- VÉRIFICATIONS ---");

console.log("Q1 - Tous les étudiants :", tousLesEtudiants); 

console.log("\nQ2 - Vérification de non-mutation (Tableau) :");
console.log("Copie modifiée :", copieGroupeA); 
console.log("Original inchangé :", groupeA);   

console.log("\nQ3 - Étudiant complet :", etudiantComplet);

console.log("\nQ4 - Vérification du remplacement (Objet) :");
console.log("Nouvel objet modifié :", etudiantL3);   
console.log("Objet original inchangé :", etudiantBase); 

console.log("\nQ5 - Profil fusionné :", profil); 

