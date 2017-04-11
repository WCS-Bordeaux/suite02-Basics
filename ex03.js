/*

    copyArray

    Ecrire une fonction "copyArray",
    qui prend en paramètre un tableau,
    et retourne une copie de ce tableau.

    Prototype:
        arr copyArray(arr);

    Exemple:
        copyArray(["bonjour", 4, 5]); // ["bonjour", 4, 5]

*/

function copyArray(array){
    newArray = array;
    for(i = 0; i < array.length; i++){
        newArray[i] = array[i];
    }
    return newArray;
}
