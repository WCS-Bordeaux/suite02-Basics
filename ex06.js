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

function getValuesByType(arr, type){
    var arrayToRet = [];
    var j = 0;

    for(i = 0 ; i < arr.length ; i++){
        if(typeof(arr[i]) === type){
            arrayToRet[j] = arr[i];
            j++;
        }
    }
    return arrayToRet;
}