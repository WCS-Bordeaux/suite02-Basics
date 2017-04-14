/*

    getCharAt

    Ecrire une fonction "getCharAt",
    qui retourne un caractère à une certaine position.

    Prototype:
        str getCharAt(str, position);

    Exemple:
        getCharAt("salut", 4); // "t"

*/

function getCharAt(theString, theIndex) {

    if(parseInt(theIndex) <= theString.length) {

        return theString[parseInt(theIndex)];
    }
    else {
        return false;
    }
}