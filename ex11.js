/*

    *Insert at*

    Ecrire une fonction "insertAt", qui insert une occurrence à un certain index d'un tableau.

    Prototype:
        arr insertAt(arr, occurence, position);

    Exemple:
        insertAt(["Bonjour", "va?"], "ça", 1); // ["Bonjour", "ça", "va?"]

*/
function insertAt(arr, occurence, position) {
    var newArray = [];
    var arrLength = arr.length;

    let i = 0;
    while(i < position ){
        
        newArray.push(arr[i]);

        i++;
    }
    newArray.push(occurence);

    while(i < arrLength){

        newArray.push(arr[i]);
        
        i++;
    }
    return newArray;
}

