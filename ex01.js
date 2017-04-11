/*

    getCharAt

    Ecrire une fonction "getCharAt",
    qui retourne un caractère à une certaine position.

    Prototype:
        str getCharAt(str, position);

    Exemple:
        getCharAt("salut", 4); // "t"

*/


function getCharAt(str, pos){
    if(str.length >= pos ){
        return str[pos];

    }
    else{
        return '';
    }
}