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
// const tableau = [1, 2, 3, 4, 5]
// function sommeTableau(tableau) {
//     let somme = 0;
//     for (let i = 0; i <= tableau.length; i++) {
//         somme += i;

//     }
//     return somme;

// };

// console.log(sommeTableau(tableau));

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
let chaine = "bonjour";
// Méthode avec for simple
// function compterVoyelles(chaine){
//     let nbVoyelles = 0 ;
//     for (let i = 0; i < chaine.length; i++) {
//         let voyelles = chaine[i];
//         if ((voyelles === "a") || (voyelles === "e") || (voyelles === "i") || (voyelles === "o") || (voyelles === "u") || (voyelles === "y")){
//             nbVoyelles++;
//         }
//     }
//     return nbVoyelles
// }

// Méthode avec boucle dans un tableau

function compterVoyelles(chaine) {
    let nbVoyelles = 0;
    let voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];
    for (let lettre of chaine) {
        if (voyelles.includes(lettre)) { // si une voyelle du tableau est inclus dans le mot alors incrémenter nbVoyelles
            nbVoyelles++;
        }
    }
    return nbVoyelles
}

console.log(compterVoyelles(chaine));

// // ------------------------------------------------
// Exercice 6 - Filtrer les nombres pairs d'un tableau
// // ------------------------------------------------
// const tableau = []
// const tableauOrigine = [1, 2, 3, 4, 5, 6]

// function nombresPairs(tableau) {
//     for (let pairs of tableauOrigine) {
//         if (pairs % 2 === 0) {
//             tableau.push(pairs);
//         }
//     }
// }

// nombresPairs(tableau, tableauOrigine);
// console.log(tableau);


// // ------------------------------------------------
// Exercice 7 - Compter les propriétés d'un objet
// // ------------------------------------------------
const objet = {
    prenom: "Luc",
    age: 30,
    profession: "developpeur"
};
// avec une boucle
// function compterProprietes(objet) {
//     let nbObjet = 0;
//     for (let clé in objet) {
//         if (objet.hasOwnProperty(clé))
//             nbObjet++;
//     }
//     return nbObjet;
// }

// console.log(compterProprietes(objet));

// avec fonction javascrip

function compterProprietes(objet) {
    return Object.keys(objet).length;
}
console.log(compterProprietes(objet));

// // ------------------------------------------------
// Exercice 8 : Convertir un tableau d'objets en un tableau de valeurs
// // ------------------------------------------------

let produits = [
    { nom: "Stylo", prix: 2 },
    { nom: "Cahier", prix: 5 },
    { nom: "Gomme", prix: 1 }
];

let nomProduits = [];

function extraireNoms(produits) {
    for (let produit of produits) {
        if (produit.nom !== "") {
            console.log(`${produit.nom}`);
            nomProduits.push(produit.nom);
        }
    }
}

extraireNoms(produits, nomProduits);
console.log(nomProduits);

// // ------------------------------------------------
// Exercice 9 : Calculer la factorielle d'un nombre
// // ------------------------------------------------



// // ------------------------------------------------
// Exercice 10 : Vérifier si un tableau est trié en ordre croissant
// // ------------------------------------------------


let chiffres = [1, 2, 3, 4, 5, 6, 7, 8];

function estTrie(chiffres) {
    // Un tableau vide ou un tableau avec un seul élément est considéré comme trié
    if (chiffres.length <= 1) {
        return true;
    }
    // Itérer jusqu'à l'avant-dernier élément
    for (let i = 0; i < chiffres.length - 1; i++) {
        // Si l'élément actuel est supérieur à l'élément suivant, il n'est pas trié
        if (chiffres[i] > chiffres[i + 1]) {
            return false; // Paire non triée trouvée, donc on retourne false immédiatement
        }
    }

    // Si la boucle se termine, cela signifie que toutes les paires étaient dans l'ordre croissant
    return true;
}

console.log(estTrie(chiffres));
