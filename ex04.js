/*

    editStringAt

    Ecrire une fonction "editStringAt",
    qui modifie une chaine de caractère à une certaine position.
    La fonction retourne cette même chaine de caractère avec les modifications attendus.

    Prototype:
        str editStringAt(str, position, char);

    Exemple:
        editStringAt("toto", 3, "a"); // "tota";

*/


function editStringAt(str, pos, char) {
    str = str.toString();
    if(parseInt(pos) >= 0) {
        let tmpArr = str.split("");
        tmpArr.splice(pos, char.length, char);
        return tmpArr.join('');
    }
}