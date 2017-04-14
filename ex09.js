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
   var arrCopy = copyArray(arr);
   arr.length = 0;

   while (arrCopy.length > 0) {
      var n = getSmallestNumber(arrCopy);
      arrCopy.splice(arrCopy.indexOf(n), 1);
      arr.push(n);
   }
}

function copyArray(arr) {
   var newArr = [];
   for (let i = 0; i < arr.length; i++) {
      newArr[i] = arr[i];
   }
   return newArr;
}

function getSmallestNumber(arr) {
   for (var i = 1, n = arr[0]; i < arr.length; i++) {
      if (arr[i] < n) n = arr[i];
   }
   return n;
}