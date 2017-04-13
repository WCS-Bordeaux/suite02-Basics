/*

    *Insert at*

    Ecrire une fonction "insertAt", qui insert une occurrence à un certain index d'un tableau.

    Prototype:
        arr insertAt(arr, occurence, position);

    Exemple:
        insertAt(["Bonjour", "va?"], "ça", 1); // ["Bonjour", "ça", "va?"]

*/


function insertAt(arr, occ, position) {
    if(Array.isArray(arr)) {
        arr.splice(position, 0, occ);
        return arr;
    }
    else {
        return false;
    }

}