
/**
 * 1. Calcule la moyenne de trois notes.
 * @param {number} note1 - Première note
 * @param {number} note2 - Deuxième note
 * @param {number} note3 - Troisième note
 * @returns {number} La moyenne des trois notes
 */
function calcularMoyenne(note1, note2, note3) {
    return (note1 + note2 + note3) / 3;
}

/**
 * 2. Détermine si un étudiant est admis selon sa moyenne.
 * @param {number} moyenne - La moyenne de l'étudiant
 * @returns {boolean} true si moyenne >= 10, sinon false
 */
function estAdmis(moyenne) {
    return moyenne >= 10;
}

/**
 * 3. Calcule le prix TTC à partir du prix HT et d'un taux de TVA.
 * @param {number} prixHT - Le prix hors taxe
 * @param {number} tauxTVA - Le taux de TVA (par défaut 0.18, soit 18%)
 * @returns {number} Le prix toutes taxes comprises
 */
function calcularPrixTTC(prixHT, tauxTVA = 0.18) {
    return prixHT * (1 + tauxTVA);
}

/**
 * 4. Fonction fléchée qui convertit un nombre d'heures en minutes.
 * @param {number} heures - Le nombre d'heures
 * @returns {number} Le nombre de minutes correspondant
 */
const convertirEnMinutes = (heures) => heures * 60;

console.log("--- TESTS FONCTION : calcularMoyenne ---");
console.log("Cas classique (12, 14, 10) :", calcularMoyenne(12, 14, 10)); // Attendé : 12
console.log("Cas limite (0, 0, 0) :", calcularMoyenne(0, 0, 0)); // Attendé : 0
console.log("Cas limite (20, 20, 20) :", calcularMoyenne(20, 20, 20)); // Attendé : 20

console.log("\n--- TESTS FONCTION : estAdmis ---");
console.log("Cas classique (15.5) :", estAdmis(15.5));
console.log("Cas limite (10) :", estAdmis(10));
console.log("Cas classique (9.9) :", estAdmis(9.9));

console.log("\n--- TESTS FONCTION : calcularPrixTTC ---");
console.log("TVA par défaut (Prix HT = 100) :", calcularPrixTTC(100));
console.log("TVA modifiée à 20% (Prix HT = 100) :", calcularPrixTTC(100, 0.20));
console.log("Cas limite (Prix HT = 0) :", calcularPrixTTC(0));

console.log("\n--- TESTS FONCTION FLÉCHÉE : convertirEnMinutes ---");
console.log("Cas classique (2 heures) :", convertirEnMinutes(2));
console.log("Cas limite (0 heure) :", convertirEnMinutes(0));
console.log("Cas limite (1.5 heure) :", convertirEnMinutes(1.5));
