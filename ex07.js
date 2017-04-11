/*

    concatArrays

    Ecrire une fonction "concatArrays" qui prend deux tableaux et qui renvoi un tableau avec le contenu des deux tableaux.

    Prototype:
        arr concatArrays(arr1, arr2);

    Exemple:
        concatArrays(["bonjour"], ["ça", "va?", 3, 4]); // ["bonjour", "ça", "va?", 3, 4]

    Fonctions interdites:
        - Array.concat

    La fonction ne doit pas modifier les tableaux initiaux.

*/

function concatArrays(arr1, arr2){
    var newArray = [];

    for(i = 0; i < arr1.length; i++){
        newArray.push(arr1[i]);
    }
    for(j = 0; j < arr2.length; j++){
        newArray.push(arr2[j]);
    }
    return newArray;
}

console.log(concatArrays(["bonjour"], ["ça", "va?", 3, 4]));