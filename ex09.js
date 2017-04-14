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

    while (i < arr.length) {
        if( newArr[arr[i]] >= 0 ) {
            newArr.splice(arr[i]+1, 0, arr[i]);
        }
        else {
            newArr[arr[i]]  = arr[i];
        }
        i++;
    }
    i = 0;
    arr.length =  0;
    while( i < newArr.length ) {
        if( newArr[i] !== undefined ) {
            arr.push(newArr[i]);
        }
        i++;
    }
}