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

function concatArrays(arr1, arr2) {
    let newArr = [],
        i = 0,
        len = 0,
        len2 = 0;
    if(arr1) {
        len = arr1.length;
    }
    if(arr2) {
        len2 = arr2.length;
    }
    // newArr = arr1.splice(0, arr1.length);
    while( i < len ) {
        newArr.push(arr1[i]);
        i++;
    }
    i = 0;
    while( i < len2 ) {
        newArr.push(arr2[i]);
        i++;
    }

    return newArr;
}