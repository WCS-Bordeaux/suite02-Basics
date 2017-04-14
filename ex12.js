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

function splitStr(str, occ) {

    let arr = [],
        tmp = "",
        i = 0,
        len = str.length;

    while( i <= len ) {
        if( i === (len) ) {
            arr.push(tmp);
            break;
        }
        if(str[i] !== occ) {
            tmp += str[i];
        }
        else {
            arr.push(tmp);
            tmp = "";
        }
        i++;


    }
    return arr;
}