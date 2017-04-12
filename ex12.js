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
    var position = 0;
    var finalArray = [];
    var length = str.length;
    let i = 0;

    while (i < length) {
        if (str[i] === occurence) {
            let data = str.substr(position, i - position);
            position = i +1;
            finalArray.push(data);
        }
        i++;
    }
    return finalArray;
}