/*

    *sortNumbers*

    Ecrire une fonction "sortNumbers", qui va trier un tableau de nombres.

    Nous ne passerons que des nombres entiers positifs.

    Prototype:
        void sortNumbers(arr);

    Exemples:
        sortNumbers([4, 3, 5, 2]); // [2, 3, 4, 5]

    Fonctions interdites:
        Array.sort

*/

function sortNumbers(arr) {
    var indice = 0;
    var newArr = [];
    var minNumber = Infinity;
    // On récupère la taille du tableau car on va supprimer des éléments dedans
    var arrLength = arr.length;
    
    for (let j = 0; j < arrLength; j++) {

        for (let i = 0; i < arr.length; i++) {

            if (arr[i] < minNumber) {
                minNumber = arr[i];
                indice = i;
            }

        }
        newArr.push(minNumber);
        arr.splice(indice, 1);
        minNumber = Infinity;
    }
    return newArr;
}