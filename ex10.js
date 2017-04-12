/*

    *doubleSortNumbers*

    Ecrire une fonction "doubleSortNumbers", qui va trier un tableau de nombres.

    Nous ne passerons que des nombres entiers positifs.

    Prototype:
        void doubleSortNumbers(arr1, arr2);

    Exemples:
        doubleSortNumbers([4, 3, 5, 2], [6, 3, 2]); // [2, 2, 3, 3, 4, 5, 6]

    Fonctions interdites:
        Array.sort

*/
function doubleSortNumbers(arr1, arr2) {
    var indice = 0;
    var finalArr = [];
    var minNumber = Infinity;
    // On va mettre les 2 tableaux dans 1
    var newArray = [];
    for(i = 0; i < arr1.length; i++){
        newArray.push(arr1[i]);
    }
    for(j = 0; j < arr2.length; j++){
        newArray.push(arr2[j]);
    }
    // On récupère la taille du tableau car on va supprimer des éléments dedans
    var newArrLength = newArray.length;
    
    for (let j = 0; j < newArrLength; j++) {

        for (let i = 0; i < newArray.length; i++) {

            if (newArray[i] < minNumber) {
                minNumber = newArray[i];
                indice = i;
            }

        }
        finalArr.push(minNumber);
        newArray.splice(indice, 1);
        minNumber = Infinity;
    }
    return finalArr;
}
