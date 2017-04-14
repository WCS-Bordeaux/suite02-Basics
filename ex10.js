/*

    *doubleSortNumbers*

    Ecrire une fonction "doubleSortNumbers", qui va trier un tableau de nombres.

    Nous ne passerons que des nombres entiers positifs.

    Prototype:
        array doubleSortNumbers(arr1, arr2);

    Exemples:
        doubleSortNumbers([4, 3, 5, 2], [6, 3, 2]); // [2, 2, 3, 3, 4, 5, 6]

    Fonctions interdites:
        Array.sort

*/

function doubleSortNumbers(arr1, arr2) {

    let i = 0;
    let newArr = [];
    let arrrep = [];

    for(v of arr1) {
        if(newArr[v] === 0) {
            newArr[v] += 1;
        }
        else {
            newArr[v] = 0;
        }
    }
    for (w of arr2) {
        if(newArr[w] === 0) {
            newArr[w] += 1;
        }
        else {
            newArr[w] = 0;
        }
    }
    for (k in newArr) {
        arrrep[i] = parseInt(k);
        i++;
        let x = 0;
        while( x < newArr[k] ) {
            arrrep[i] = parseInt(k);
            x++;
            i++;
        }
    }
    return arrrep;
}
