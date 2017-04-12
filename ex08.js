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

function getValuesFrom3DArray(arr){
    var newArr = [];

    for(i=0 ; i<arr.length ; i++){
        for(j=0; j<arr[i].length ; j++ ){
            for(k=0; k<arr[i][j].length ; k ++){
                newArr.push(arr[i][j][k]);
            }
        }
    }
    return newArr;
}