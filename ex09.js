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
    let i = 0;
    let newArr = [];

    for(v of arr) {
        newArr[v] = 0;
    }
    for (k in newArr) {
        arr[i] = parseInt(k);
        i++;
    }
}
