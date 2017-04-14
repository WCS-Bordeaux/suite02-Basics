/*

    *Split*

    Ecrire une fonction "splitStr" qui, d'où son nom,
    sépare une chaine de caractère par une occurence donnée,
    et renvoi un tableau contenant le résultat de la séparation de donnée.

    Prototype:
        arr splitStr(str, occurence);

    Exemples:
        splitStr("Bonjour comment tu vas ? ça va merci.", " ");
        // ["Bonjour", "comment", "tu", "vas", "?", "ça", "va", "merci."]

    Fonctions interdites:
        - String.split

*/

function splitStr(str, occurence) {
   var arr = [], lastSplit = 0;
   for (let i = 0; i < str.length; i++) {
      if (str[i] === occurence) {
         arr.push(str.substr(lastSplit, i - lastSplit));
         lastSplit = i+1;
      } else if (i == str.length-1) {
         arr.push(str.substr(lastSplit, i- lastSplit + 1))
      }
   } return arr;
}