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
   var arr = arr1.concat(arr2);
   var sortedArr = [];

   while (arr.length > 0) {
      var n = getSmallestNumber(arr);
      arr.splice(arr.indexOf(n), 1);
      sortedArr.push(n);
   }

   return sortedArr;
}

function getSmallestNumber(arr) {
   for (var i = 1, n = arr[0]; i < arr.length; i++) {
      if (arr[i] < n) n = arr[i];
   }
   return n;
}