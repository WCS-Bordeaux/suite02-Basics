/*

    getValuesByType

    Ecrire une fonction "getValuesByType",
    qui donne un tableau avec uniquement les valeurs d'un type en particulier depuis un autre tableau.
    
    
    Nous testerons avec des nombres, chaines de caractères et avec undefined.


    Prototype:
        arr getValuesByType(arr, type);

    Exemple:
        getValuesByType(["toto", 4, 5], "number"); // [4, 5]

    Attention, la fonction ne doit pas modifier le tableau modèle.

*/

function getValuesByType(arr, type) {
    let i = 0;
    let len = arr.length;
    let sortedArray = [];
    while( i < len ) {
        let x = arr[i];
        if( typeof x === type ) {
            sortedArray.push(x);
        }
        i++;
    }
    return sortedArray;
}