/*

    concatArrays

    Ecrire une fonction "concatArrays" qui prend deux tableaux et qui renvoi un tableau avec le contenu des deux tableaux.

    Prototype:
        arr concatArrays(arr1, arr2);

    Exemple:
        concatArrays(["bonjour"], ["ça", "va?", 3, 4]); // ["bonjour", "ça", "va?", 3, 4]

    Fonctions interdites:
        - Array.concat

    La fonction ne doit pas modifier les tableaux initiaux.

*/

function concatArrays(arr1, arr2) {
   for (let i = 0; i < arr2.length; i++) {
      arr1.push(arr2[i]);
   } return arr1;
}