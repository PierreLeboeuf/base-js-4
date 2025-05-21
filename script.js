// // ------------------------------------------------
// Exercice 1 - Afficher les éléments d'un tableau
// // ------------------------------------------------
const nombres = [1, 2, 3, 4, 5];

for (let chiffre of nombres) {
    console.log(chiffre);
}
// // ------------------------------------------------
// Exercice 2 - Calculer la somme des éléments d'un tableau
// // ------------------------------------------------
const tableau = [1, 2, 3, 4, 5]
function sommeTableau(tableau) {
    let somme = 0;
    for (let i = 0; i <= tableau.length; i++) {
        somme += i;

    }
    return somme;

};

console.log(sommeTableau(tableau));

// // ------------------------------------------------
// Exercice 3 - Trouver le mot le plus long dans un tableau
// // ------------------------------------------------
const tableauMots = ["bonjour", "salut", "coucou"];
let max = tableauMots[0];

function motPlusLong(tableauMots) {
    for (let i = 1; i < tableauMots.length; i++) {
        if (tableauMots[i].length > max.length) {
            max = tableauMots[i];

        }

    }
    return max;
}

console.log(motPlusLong(tableauMots));

// // ------------------------------------------------
// Exercice 4 - Inverser une chaine de caractères
// // ------------------------------------------------
// let chaine = "toto"

// function inverserChaine(chaine) {
//     let motInverse = "";
//     for (let i = 0; i < chaine.length; i++) {
//         motInverse = chaine[i] + motInverse;
//         // motInverse = (chaine[0] = t) = t
//         // motInverse = (chaine[1] = o) + (motInverse = t) = ot
//         // motInverse = (chaine[2] = t) + (motInverse = ot) = tot
//         // motInverse = (chaine[3] = o) + (motInverse = tot) = otot
//     }
//     return motInverse;
// }

// console.log(inverserChaine(chaine));

// // avec fonction js
// // split sépare toutes les lettres et les mets dans un tableau
// console.log(chaine.split(``));
// // avec reverse inverse l'ordre des lettres
// console.log(chaine.split(``).reverse());
// // avec join assemble toutes les lettres
// console.log(chaine.split(``).reverse().join(``));

// // ------------------------------------------------
// Exercice 5 - Compter le nombre de voyelles dans une chaine
// // ------------------------------------------------
let chaine = "ordi" ;

function compterVoyelles(chaine){
    let nbVoyelles = 0 ;
    for (let i = 0; i < chaine.length; i++) {
        let voyelles = chaine[i];
        if ((voyelles === "a") || (voyelles === "e") || (voyelles === "i") || (voyelles === "o") || (voyelles === "u") || (voyelles === "y")){
            nbVoyelles++;
        }
        
    }
    return nbVoyelles
}

console.log(compterVoyelles(chaine));
