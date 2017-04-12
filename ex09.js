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
   var sortedArr = [];
   while (arr.length > 0) {
      var n = getSmallestNumber(arr);
      arr.splice(arr.indexOf(n), 1);
      sortedArr.push(n);
   } return sortedArr;
}

function getSmallestNumber(arr) {
   for (var i = 1, n = arr[0]; i < arr.length; i++) {
      if (arr[i] < n) n = arr[i];
   }
   return n;
}