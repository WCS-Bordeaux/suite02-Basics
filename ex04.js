/*

    editStringAt

    Ecrire une fonction "editStringAt",
    qui modifie une chaine de caractère à une certaine position.
    La fonction retourne cette même chaine de caractère avec les modifications attendus.
// 
    Prototype:
        str editStringAt(str, position, char);

    Exemple:
        editStringAt("toto", 3, "a"); // "tota";

*/

function editStringAt(str, position, char){
    // substr retourn les caractères entre le premier(compris) et le dernier(non compris) mis en arguments
    
    newStr = str.substr(0,position) + char + str.substr(position +1, str.length);
    return newStr;
}

//console.log(editStringAt("toto", 1, "a"));