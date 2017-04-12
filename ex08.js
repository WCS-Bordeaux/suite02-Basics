/*

    3D array

    Ecrire une fonction "getValuesFrom3DArray", qui va mettre dans un tableau à une dimension chaque valeurs trouvé.

    Prototype:
        arr getValuesFrom3DArray(arr);

    Exemple:
        getValuesFrom3DArray([
            [
                ["Oulala", "ça", "fait"],
                ["beaucoup", "de", "crochets!!!"]
            ],
            [
                ["Pourtant c'est la même chose quasiment !"]
            ]
        ]);
        // ["Oulala", "ça", "fait", "beaucoup", "de", "crochets!!!", "Pourtant c'est la même chose quasiment !"]

*/


function getValuesFrom3DArray(arr) {

    let newArr = [];
    let i = 0;
    let len = arr.length;
    while( i < len ) {
        insideLoop(arr[i]);
        i++;
    }

    function insideLoop(key) {
        if( Array.isArray(key)) {
            let j = 0;
            let lenIn = key.length;
            while (j < lenIn) {
                insideLoop(key[j]);
                j++;
            }
        }
        else {
            newArr.push(key);
        }
    }
    return newArr;
}