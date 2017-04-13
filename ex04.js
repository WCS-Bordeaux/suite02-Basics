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

function editStringAt(str, position, char) {
   return str.substr(0, position) + char + str.substr(position+char.length, str.length);
}