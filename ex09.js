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
    let newArr = [];
    newArr[0] = arr[0];
    let i = 1;
    let len = arr.length;
    while( i < len ) {
        let currentVal = arr[i];
        if (currentVal < newArr[0]) {
            newArr.unshift(currentVal);
        }
        else {
            let j = 0;
            let lenj = newArr.length;
            while (j < lenj) {
                if (currentVal > newArr[j]) {
                    newArr.splice(newArr[j + 1], 0, currentVal);
                    break;
                }
                j++;
            }
        }
        i++;
    }
    return newArr;
}
